function vm(u,r){for(var c=0;c<r.length;c++){const s=r[c];if(typeof s!="string"&&!Array.isArray(s)){for(const f in s)if(f!=="default"&&!(f in u)){const d=Object.getOwnPropertyDescriptor(s,f);d&&Object.defineProperty(u,f,d.get?d:{enumerable:!0,get:()=>s[f]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(f){if(f.ep)return;f.ep=!0;const d=c(f);fetch(f.href,d)}})();function bm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var qu={exports:{}},Pi={};var v1;function ym(){if(v1)return Pi;v1=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(s,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var b in f)b!=="key"&&(d[b]=f[b])}else d=f;return f=d.ref,{$$typeof:u,type:s,key:p,ref:f!==void 0?f:null,props:d}}return Pi.Fragment=r,Pi.jsx=c,Pi.jsxs=c,Pi}var b1;function xm(){return b1||(b1=1,qu.exports=ym()),qu.exports}var w=xm(),Vu={exports:{}},Yi={},Zu={exports:{}},ju={};var y1;function Sm(){return y1||(y1=1,(function(u){function r(z,P){var $=z.length;z.push(P);e:for(;0<$;){var oe=$-1>>>1,ve=z[oe];if(0<f(ve,P))z[oe]=P,z[$]=ve,$=oe;else break e}}function c(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var P=z[0],$=z.pop();if($!==P){z[0]=$;e:for(var oe=0,ve=z.length,S=ve>>>1;oe<S;){var B=2*(oe+1)-1,I=z[B],K=B+1,te=z[K];if(0>f(I,$))K<ve&&0>f(te,I)?(z[oe]=te,z[K]=$,oe=K):(z[oe]=I,z[B]=$,oe=B);else if(K<ve&&0>f(te,$))z[oe]=te,z[K]=$,oe=K;else break e}}return P}function f(z,P){var $=z.sortIndex-P.sortIndex;return $!==0?$:z.id-P.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;u.unstable_now=function(){return d.now()}}else{var p=Date,b=p.now();u.unstable_now=function(){return p.now()-b}}var x=[],v=[],E=1,g=null,A=3,O=!1,k=!1,C=!1,G=!1,Y=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function V(z){for(var P=c(v);P!==null;){if(P.callback===null)s(v);else if(P.startTime<=z)s(v),P.sortIndex=P.expirationTime,r(x,P);else break;P=c(v)}}function Q(z){if(C=!1,V(z),!k)if(c(x)!==null)k=!0,D||(D=!0,ae());else{var P=c(v);P!==null&&Le(Q,P.startTime-z)}}var D=!1,j=-1,F=5,ie=-1;function Me(){return G?!0:!(u.unstable_now()-ie<F)}function Xe(){if(G=!1,D){var z=u.unstable_now();ie=z;var P=!0;try{e:{k=!1,C&&(C=!1,X(j),j=-1),O=!0;var $=A;try{t:{for(V(z),g=c(x);g!==null&&!(g.expirationTime>z&&Me());){var oe=g.callback;if(typeof oe=="function"){g.callback=null,A=g.priorityLevel;var ve=oe(g.expirationTime<=z);if(z=u.unstable_now(),typeof ve=="function"){g.callback=ve,V(z),P=!0;break t}g===c(x)&&s(x),V(z)}else s(x);g=c(x)}if(g!==null)P=!0;else{var S=c(v);S!==null&&Le(Q,S.startTime-z),P=!1}}break e}finally{g=null,A=$,O=!1}P=void 0}}finally{P?ae():D=!1}}}var ae;if(typeof Z=="function")ae=function(){Z(Xe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,be=_e.port2;_e.port1.onmessage=Xe,ae=function(){be.postMessage(null)}}else ae=function(){Y(Xe,0)};function Le(z,P){j=Y(function(){z(u.unstable_now())},P)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(z){z.callback=null},u.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<z?Math.floor(1e3/z):5},u.unstable_getCurrentPriorityLevel=function(){return A},u.unstable_next=function(z){switch(A){case 1:case 2:case 3:var P=3;break;default:P=A}var $=A;A=P;try{return z()}finally{A=$}},u.unstable_requestPaint=function(){G=!0},u.unstable_runWithPriority=function(z,P){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=A;A=z;try{return P()}finally{A=$}},u.unstable_scheduleCallback=function(z,P,$){var oe=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?oe+$:oe):$=oe,z){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=$+ve,z={id:E++,callback:P,priorityLevel:z,startTime:$,expirationTime:ve,sortIndex:-1},$>oe?(z.sortIndex=$,r(v,z),c(x)===null&&z===c(v)&&(C?(X(j),j=-1):C=!0,Le(Q,$-oe))):(z.sortIndex=ve,r(x,z),k||O||(k=!0,D||(D=!0,ae()))),z},u.unstable_shouldYield=Me,u.unstable_wrapCallback=function(z){var P=A;return function(){var $=A;A=P;try{return z.apply(this,arguments)}finally{A=$}}}})(ju)),ju}var x1;function Tm(){return x1||(x1=1,Zu.exports=Sm()),Zu.exports}var Pu={exports:{}},ne={};var S1;function Em(){if(S1)return ne;S1=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),A=Symbol.iterator;function O(S){return S===null||typeof S!="object"?null:(S=A&&S[A]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,G={};function Y(S,B,I){this.props=S,this.context=B,this.refs=G,this.updater=I||k}Y.prototype.isReactComponent={},Y.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},Y.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function X(){}X.prototype=Y.prototype;function Z(S,B,I){this.props=S,this.context=B,this.refs=G,this.updater=I||k}var V=Z.prototype=new X;V.constructor=Z,C(V,Y.prototype),V.isPureReactComponent=!0;var Q=Array.isArray;function D(){}var j={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function ie(S,B,I){var K=I.ref;return{$$typeof:u,type:S,key:B,ref:K!==void 0?K:null,props:I}}function Me(S,B){return ie(S.type,B,S.props)}function Xe(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function ae(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(I){return B[I]})}var _e=/\/+/g;function be(S,B){return typeof S=="object"&&S!==null&&S.key!=null?ae(""+S.key):B.toString(36)}function Le(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(D,D):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function z(S,B,I,K,te){var ce=typeof S;(ce==="undefined"||ce==="boolean")&&(S=null);var ue=!1;if(S===null)ue=!0;else switch(ce){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(S.$$typeof){case u:case r:ue=!0;break;case E:return ue=S._init,z(ue(S._payload),B,I,K,te)}}if(ue)return te=te(S),ue=K===""?"."+be(S,0):K,Q(te)?(I="",ue!=null&&(I=ue.replace(_e,"$&/")+"/"),z(te,B,I,"",function(st){return st})):te!=null&&(Xe(te)&&(te=Me(te,I+(te.key==null||S&&S.key===te.key?"":(""+te.key).replace(_e,"$&/")+"/")+ue)),B.push(te)),1;ue=0;var Je=K===""?".":K+":";if(Q(S))for(var De=0;De<S.length;De++)K=S[De],ce=Je+be(K,De),ue+=z(K,B,I,ce,te);else if(De=O(S),typeof De=="function")for(S=De.call(S),De=0;!(K=S.next()).done;)K=K.value,ce=Je+be(K,De++),ue+=z(K,B,I,ce,te);else if(ce==="object"){if(typeof S.then=="function")return z(Le(S),B,I,K,te);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ue}function P(S,B,I){if(S==null)return S;var K=[],te=0;return z(S,K,"","",function(ce){return B.call(I,ce,te++)}),K}function $(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(I){(S._status===0||S._status===-1)&&(S._status=1,S._result=I)},function(I){(S._status===0||S._status===-1)&&(S._status=2,S._result=I)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var oe=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ve={map:P,forEach:function(S,B,I){P(S,function(){B.apply(this,arguments)},I)},count:function(S){var B=0;return P(S,function(){B++}),B},toArray:function(S){return P(S,function(B){return B})||[]},only:function(S){if(!Xe(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ne.Activity=g,ne.Children=ve,ne.Component=Y,ne.Fragment=c,ne.Profiler=f,ne.PureComponent=Z,ne.StrictMode=s,ne.Suspense=x,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,ne.__COMPILER_RUNTIME={__proto__:null,c:function(S){return j.H.useMemoCache(S)}},ne.cache=function(S){return function(){return S.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(S,B,I){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var K=C({},S.props),te=S.key;if(B!=null)for(ce in B.key!==void 0&&(te=""+B.key),B)!F.call(B,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&B.ref===void 0||(K[ce]=B[ce]);var ce=arguments.length-2;if(ce===1)K.children=I;else if(1<ce){for(var ue=Array(ce),Je=0;Je<ce;Je++)ue[Je]=arguments[Je+2];K.children=ue}return ie(S.type,te,K)},ne.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},ne.createElement=function(S,B,I){var K,te={},ce=null;if(B!=null)for(K in B.key!==void 0&&(ce=""+B.key),B)F.call(B,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(te[K]=B[K]);var ue=arguments.length-2;if(ue===1)te.children=I;else if(1<ue){for(var Je=Array(ue),De=0;De<ue;De++)Je[De]=arguments[De+2];te.children=Je}if(S&&S.defaultProps)for(K in ue=S.defaultProps,ue)te[K]===void 0&&(te[K]=ue[K]);return ie(S,ce,te)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(S){return{$$typeof:b,render:S}},ne.isValidElement=Xe,ne.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:$}},ne.memo=function(S,B){return{$$typeof:v,type:S,compare:B===void 0?null:B}},ne.startTransition=function(S){var B=j.T,I={};j.T=I;try{var K=S(),te=j.S;te!==null&&te(I,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(D,oe)}catch(ce){oe(ce)}finally{B!==null&&I.types!==null&&(B.types=I.types),j.T=B}},ne.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},ne.use=function(S){return j.H.use(S)},ne.useActionState=function(S,B,I){return j.H.useActionState(S,B,I)},ne.useCallback=function(S,B){return j.H.useCallback(S,B)},ne.useContext=function(S){return j.H.useContext(S)},ne.useDebugValue=function(){},ne.useDeferredValue=function(S,B){return j.H.useDeferredValue(S,B)},ne.useEffect=function(S,B){return j.H.useEffect(S,B)},ne.useEffectEvent=function(S){return j.H.useEffectEvent(S)},ne.useId=function(){return j.H.useId()},ne.useImperativeHandle=function(S,B,I){return j.H.useImperativeHandle(S,B,I)},ne.useInsertionEffect=function(S,B){return j.H.useInsertionEffect(S,B)},ne.useLayoutEffect=function(S,B){return j.H.useLayoutEffect(S,B)},ne.useMemo=function(S,B){return j.H.useMemo(S,B)},ne.useOptimistic=function(S,B){return j.H.useOptimistic(S,B)},ne.useReducer=function(S,B,I){return j.H.useReducer(S,B,I)},ne.useRef=function(S){return j.H.useRef(S)},ne.useState=function(S){return j.H.useState(S)},ne.useSyncExternalStore=function(S,B,I){return j.H.useSyncExternalStore(S,B,I)},ne.useTransition=function(){return j.H.useTransition()},ne.version="19.2.7",ne}var T1;function uc(){return T1||(T1=1,Pu.exports=Em()),Pu.exports}var Yu={exports:{}},rt={};var E1;function Mm(){if(E1)return rt;E1=1;var u=uc();function r(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)v+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(x,v,E){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:g==null?null:""+g,children:x,containerInfo:v,implementation:E}}var p=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,rt.createPortal=function(x,v){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(r(299));return d(x,v,null,E)},rt.flushSync=function(x){var v=p.T,E=s.p;try{if(p.T=null,s.p=2,x)return x()}finally{p.T=v,s.p=E,s.d.f()}},rt.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(x,v))},rt.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},rt.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var E=v.as,g=b(E,v.crossOrigin),A=typeof v.integrity=="string"?v.integrity:void 0,O=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;E==="style"?s.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:g,integrity:A,fetchPriority:O}):E==="script"&&s.d.X(x,{crossOrigin:g,integrity:A,fetchPriority:O,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},rt.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var E=b(v.as,v.crossOrigin);s.d.M(x,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(x)},rt.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var E=v.as,g=b(E,v.crossOrigin);s.d.L(x,E,{crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},rt.preloadModule=function(x,v){if(typeof x=="string")if(v){var E=b(v.as,v.crossOrigin);s.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(x)},rt.requestFormReset=function(x){s.d.r(x)},rt.unstable_batchedUpdates=function(x,v){return x(v)},rt.useFormState=function(x,v,E){return p.H.useFormState(x,v,E)},rt.useFormStatus=function(){return p.H.useHostTransitionStatus()},rt.version="19.2.7",rt}var M1;function ed(){if(M1)return Yu.exports;M1=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),Yu.exports=Mm(),Yu.exports}var w1;function wm(){if(w1)return Yi;w1=1;var u=Tm(),r=uc(),c=ed();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return x(i),e;if(n===l)return x(i),t;n=n.sibling}throw Error(s(188))}if(a.return!==l.return)a=i,l=n;else{for(var o=!1,h=i.child;h;){if(h===a){o=!0,a=i,l=n;break}if(h===l){o=!0,l=i,a=n;break}h=h.sibling}if(!o){for(h=n.child;h;){if(h===a){o=!0,a=n,l=i;break}if(h===l){o=!0,l=n,a=i;break}h=h.sibling}if(!o)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,A=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Me=Symbol.for("react.memo_cache_sentinel"),Xe=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=Xe&&e[Xe]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case Y:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case D:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case Z:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var Le=Array.isArray,z=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},oe=[],ve=-1;function S(e){return{current:e}}function B(e){0>ve||(e.current=oe[ve],oe[ve]=null,ve--)}function I(e,t){ve++,oe[ve]=e.current,e.current=t}var K=S(null),te=S(null),ce=S(null),ue=S(null);function Je(e,t){switch(I(ce,t),I(te,e),I(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qf(t),e=Vf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(K),I(K,e)}function De(){B(K),B(te),B(ce)}function st(e){e.memoizedState!==null&&I(ue,e);var t=K.current,a=Vf(t,e.type);t!==a&&(I(te,e),I(K,a))}function Pt(e){te.current===e&&(B(K),B(te)),ue.current===e&&(B(ue),qi._currentValue=$)}var Ql,pe;function Se(e){if(Ql===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ql=t&&t[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ql+e+pe}var Te=!1;function Ve(e,t){if(!e||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(L){var U=L}Reflect.construct(e,[],q)}else{try{q.call()}catch(L){U=L}e.call(q.prototype)}}else{try{throw Error()}catch(L){U=L}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(L){if(L&&U&&typeof L.stack=="string")return[L.stack,U.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),o=n[0],h=n[1];if(o&&h){var y=o.split(`
`),R=h.split(`
`);for(i=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(l===y.length||i===R.length)for(l=y.length-1,i=R.length-1;1<=l&&0<=i&&y[l]!==R[i];)i--;for(;1<=l&&0<=i;l--,i--)if(y[l]!==R[i]){if(l!==1||i!==1)do if(l--,i--,0>i||y[l]!==R[i]){var N=`
`+y[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Se(a):""}function Fl(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==t&&t!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return Ve(e.type,!1);case 11:return Ve(e.type.render,!1);case 1:return Ve(e.type,!0);case 31:return Se("Activity");default:return""}}function Ga(e){try{var t="",a=null;do t+=Fl(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fa=Object.prototype.hasOwnProperty,Kl=u.unstable_scheduleCallback,Wl=u.unstable_cancelCallback,rl=u.unstable_shouldYield,Ze=u.unstable_requestPaint,we=u.unstable_now,Wd=u.unstable_getCurrentPriorityLevel,gc=u.unstable_ImmediatePriority,vc=u.unstable_UserBlockingPriority,Wi=u.unstable_NormalPriority,Jd=u.unstable_LowPriority,bc=u.unstable_IdlePriority,$d=u.log,eh=u.unstable_setDisableYieldValue,Jl=null,gt=null;function da(e){if(typeof $d=="function"&&eh(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Jl,e)}catch{}}var vt=Math.clz32?Math.clz32:lh,th=Math.log,ah=Math.LN2;function lh(e){return e>>>=0,e===0?32:31-(th(e)/ah|0)|0}var Ji=256,$i=262144,en=4194304;function qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~n,l!==0?i=qa(l):(o&=h,o!==0?i=qa(o):a||(a=h&~e,a!==0&&(i=qa(a))))):(h=l&~n,h!==0?i=qa(h):o!==0?i=qa(o):a||(a=l&~e,a!==0&&(i=qa(a)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:i}function $l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ih(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yc(){var e=en;return en<<=1,(en&62914560)===0&&(en=4194304),e}function _r(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ei(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nh(e,t,a,l,i,n){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,R=e.hiddenUpdates;for(a=o&~a;0<a;){var N=31-vt(a),q=1<<N;h[N]=0,y[N]=-1;var U=R[N];if(U!==null)for(R[N]=null,N=0;N<U.length;N++){var L=U[N];L!==null&&(L.lane&=-536870913)}a&=~q}l!==0&&xc(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(o&~t))}function xc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-vt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Sc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-vt(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function Tc(e,t){var a=t&-t;return a=(a&42)!==0?1:Rr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Rr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ec(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:o1(e.type))}function Mc(e,t){var a=P.p;try{return P.p=e,t()}finally{P.p=a}}var ha=Math.random().toString(36).slice(2),tt="__reactFiber$"+ha,ct="__reactProps$"+ha,sl="__reactContainer$"+ha,Ur="__reactEvents$"+ha,rh="__reactListeners$"+ha,sh="__reactHandles$"+ha,wc="__reactResources$"+ha,ti="__reactMarker$"+ha;function Or(e){delete e[tt],delete e[ct],delete e[Ur],delete e[rh],delete e[sh]}function ul(e){var t=e[tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[sl]||a[tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Qf(e);e!==null;){if(a=e[tt])return a;e=Qf(e)}return t}e=a,a=e.parentNode}return null}function cl(e){if(e=e[tt]||e[sl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ai(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ol(e){var t=e[wc];return t||(t=e[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[ti]=!0}var Ac=new Set,Cc={};function Va(e,t){fl(e,t),fl(e+"Capture",t)}function fl(e,t){for(Cc[e]=t,e=0;e<t.length;e++)Ac.add(t[e])}var uh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_c={},Rc={};function ch(e){return fa.call(Rc,e)?!0:fa.call(_c,e)?!1:uh.test(e)?Rc[e]=!0:(_c[e]=!0,!1)}function an(e,t,a){if(ch(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ln(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function At(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,n.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){if(!e._valueTracker){var t=zc(e)?"checked":"value";e._valueTracker=oh(e,t,""+e[t])}}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=zc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fh=/[\n"\\]/g;function Ct(e){return e.replace(fh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Dr(e,t,a,l,i,n,o,h){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+At(t)):e.value!==""+At(t)&&(e.value=""+At(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?kr(e,o,At(t)):a!=null?kr(e,o,At(a)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+At(h):e.removeAttribute("name")}function Oc(e,t,a,l,i,n,o,h){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Lr(e);return}a=a!=null?""+At(a):"",t=t!=null?""+At(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Lr(e)}function kr(e,t,a){t==="number"&&nn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function dl(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+At(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lc(e,t,a){if(t!=null&&(t=""+At(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+At(a):""}function Dc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(Le(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=At(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Lr(e)}function hl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var dh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||dh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Nc(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&kc(e,i,l)}else for(var n in t)t.hasOwnProperty(n)&&kc(e,n,t[n])}function Nr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var Br=null;function Hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,pl=null;function Bc(e){var t=cl(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Dr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[ct]||null;if(!i)throw Error(s(90));Dr(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Uc(l)}break e;case"textarea":Lc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&dl(e,!!a.multiple,t,!1)}}}var Gr=!1;function Hc(e,t,a){if(Gr)return e(t,a);Gr=!0;try{var l=e(t);return l}finally{if(Gr=!1,(ml!==null||pl!==null)&&(In(),ml&&(t=ml,e=pl,pl=ml=null,Bc(t),e)))for(t=0;t<e.length;t++)Bc(e[t])}}function li(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ct]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if(It)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){qr=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{qr=!1}var ma=null,Vr=null,sn=null;function Gc(){if(sn)return sn;var e,t=Vr,a=t.length,l,i="value"in ma?ma.value:ma.textContent,n=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===i[n-l];l++);return sn=i.slice(e,1<l?1-l:void 0)}function un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cn(){return!0}function qc(){return!1}function ot(e){function t(a,l,i,n,o){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(n):n[h]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?cn:qc,this.isPropagationStopped=qc,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},on=ot(Za),ni=g({},Za,{view:0,detail:0}),ph=ot(ni),Zr,jr,ri,fn=g({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(Zr=e.screenX-ri.screenX,jr=e.screenY-ri.screenY):jr=Zr=0,ri=e),Zr)},movementY:function(e){return"movementY"in e?e.movementY:jr}}),Vc=ot(fn),gh=g({},fn,{dataTransfer:0}),vh=ot(gh),bh=g({},ni,{relatedTarget:0}),Pr=ot(bh),yh=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),xh=ot(yh),Sh=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Th=ot(Sh),Eh=g({},Za,{data:0}),Zc=ot(Eh),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ch(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ah[e])?!!t[e]:!1}function Yr(){return Ch}var _h=g({},ni,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yr,charCode:function(e){return e.type==="keypress"?un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rh=ot(_h),zh=g({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=ot(zh),Uh=g({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yr}),Oh=ot(Uh),Lh=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=ot(Lh),kh=g({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=ot(kh),Bh=g({},Za,{newState:0,oldState:0}),Hh=ot(Bh),Gh=[9,13,27,32],Xr=It&&"CompositionEvent"in window,si=null;It&&"documentMode"in document&&(si=document.documentMode);var qh=It&&"TextEvent"in window&&!si,Pc=It&&(!Xr||si&&8<si&&11>=si),Yc=" ",Xc=!1;function Ic(e,t){switch(e){case"keyup":return Gh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gl=!1;function Vh(e,t){switch(e){case"compositionend":return Qc(t);case"keypress":return t.which!==32?null:(Xc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Xc?null:e;default:return null}}function Zh(e,t){if(gl)return e==="compositionend"||!Xr&&Ic(e,t)?(e=Gc(),sn=Vr=ma=null,gl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pc&&t.locale!=="ko"?null:t.data;default:return null}}var jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jh[e.type]:t==="textarea"}function Kc(e,t,a,l){ml?pl?pl.push(l):pl=[l]:ml=l,t=er(t,"onChange"),0<t.length&&(a=new on("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ui=null,ci=null;function Ph(e){Df(e,0)}function dn(e){var t=ai(e);if(Uc(t))return e}function Wc(e,t){if(e==="change")return t}var Jc=!1;if(It){var Ir;if(It){var Qr="oninput"in document;if(!Qr){var $c=document.createElement("div");$c.setAttribute("oninput","return;"),Qr=typeof $c.oninput=="function"}Ir=Qr}else Ir=!1;Jc=Ir&&(!document.documentMode||9<document.documentMode)}function eo(){ui&&(ui.detachEvent("onpropertychange",to),ci=ui=null)}function to(e){if(e.propertyName==="value"&&dn(ci)){var t=[];Kc(t,ci,e,Hr(e)),Hc(Ph,t)}}function Yh(e,t,a){e==="focusin"?(eo(),ui=t,ci=a,ui.attachEvent("onpropertychange",to)):e==="focusout"&&eo()}function Xh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dn(ci)}function Ih(e,t){if(e==="click")return dn(t)}function Qh(e,t){if(e==="input"||e==="change")return dn(t)}function Fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Fh;function oi(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!fa.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lo(e,t){var a=ao(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ao(a)}}function io(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?io(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function no(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=nn(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kh=It&&"documentMode"in document&&11>=document.documentMode,vl=null,Kr=null,fi=null,Wr=!1;function ro(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wr||vl==null||vl!==nn(l)||(l=vl,"selectionStart"in l&&Fr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fi&&oi(fi,l)||(fi=l,l=er(Kr,"onSelect"),0<l.length&&(t=new on("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=vl)))}function ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var bl={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Jr={},so={};It&&(so=document.createElement("div").style,"AnimationEvent"in window||(delete bl.animationend.animation,delete bl.animationiteration.animation,delete bl.animationstart.animation),"TransitionEvent"in window||delete bl.transitionend.transition);function Pa(e){if(Jr[e])return Jr[e];if(!bl[e])return e;var t=bl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in so)return Jr[e]=t[a];return e}var uo=Pa("animationend"),co=Pa("animationiteration"),oo=Pa("animationstart"),Wh=Pa("transitionrun"),Jh=Pa("transitionstart"),$h=Pa("transitioncancel"),fo=Pa("transitionend"),ho=new Map,$r="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$r.push("scrollEnd");function Bt(e,t){ho.set(e,t),Va(t,[e])}var hn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],yl=0,es=0;function mn(){for(var e=yl,t=es=yl=0;t<e;){var a=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var i=_t[t];_t[t++]=null;var n=_t[t];if(_t[t++]=null,l!==null&&i!==null){var o=l.pending;o===null?i.next=i:(i.next=o.next,o.next=i),l.pending=i}n!==0&&mo(a,i,n)}}function pn(e,t,a,l){_t[yl++]=e,_t[yl++]=t,_t[yl++]=a,_t[yl++]=l,es|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ts(e,t,a,l){return pn(e,t,a,l),gn(e)}function Ya(e,t){return pn(e,null,null,t),gn(e)}function mo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=e.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-vt(a),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),n):null}function gn(e){if(50<Li)throw Li=0,ou=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xl={};function e2(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,a,l){return new e2(e,t,a,l)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=yt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function po(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vn(e,t,a,l,i,n){var o=0;if(l=e,typeof e=="function")as(e)&&(o=1);else if(typeof e=="string")o=nm(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=yt(31,a,t,i),e.elementType=ie,e.lanes=n,e;case C:return Xa(a.children,i,n,t);case G:o=8,i|=24;break;case Y:return e=yt(12,a,t,i|2),e.elementType=Y,e.lanes=n,e;case Q:return e=yt(13,a,t,i),e.elementType=Q,e.lanes=n,e;case D:return e=yt(19,a,t,i),e.elementType=D,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:o=10;break e;case X:o=9;break e;case V:o=11;break e;case j:o=14;break e;case F:o=16,l=null;break e}o=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=yt(o,a,t,i),t.elementType=e,t.type=l,t.lanes=n,t}function Xa(e,t,a,l){return e=yt(7,e,l,t),e.lanes=a,e}function ls(e,t,a){return e=yt(6,e,null,t),e.lanes=a,e}function go(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function is(e,t,a){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vo=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var a=vo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ga(t)},vo.set(e,t),t)}return{value:e,source:t,stack:Ga(t)}}var Sl=[],Tl=0,bn=null,di=0,zt=[],Ut=0,pa=null,qt=1,Vt="";function Ft(e,t){Sl[Tl++]=di,Sl[Tl++]=bn,bn=e,di=t}function bo(e,t,a){zt[Ut++]=qt,zt[Ut++]=Vt,zt[Ut++]=pa,pa=e;var l=qt;e=Vt;var i=32-vt(l)-1;l&=~(1<<i),a+=1;var n=32-vt(t)+i;if(30<n){var o=i-i%5;n=(l&(1<<o)-1).toString(32),l>>=o,i-=o,qt=1<<32-vt(t)+i|a<<i|l,Vt=n+e}else qt=1<<n|a<<i|l,Vt=e}function ns(e){e.return!==null&&(Ft(e,1),bo(e,1,0))}function rs(e){for(;e===bn;)bn=Sl[--Tl],Sl[Tl]=null,di=Sl[--Tl],Sl[Tl]=null;for(;e===pa;)pa=zt[--Ut],zt[Ut]=null,Vt=zt[--Ut],zt[Ut]=null,qt=zt[--Ut],zt[Ut]=null}function yo(e,t){zt[Ut++]=qt,zt[Ut++]=Vt,zt[Ut++]=pa,qt=t.id,Vt=t.overflow,pa=e}var at=null,ke=null,ge=!1,ga=null,Ot=!1,ss=Error(s(519));function va(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hi(Rt(t,e)),ss}function xo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[tt]=e,t[ct]=l,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<ki.length;a++)de(ki[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Oc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Dc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Hf(t.textContent,a)?(l.popover!=null&&(de("beforetoggle",t),de("toggle",t)),l.onScroll!=null&&de("scroll",t),l.onScrollEnd!=null&&de("scrollend",t),l.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||va(e,!0)}function So(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:at=at.return}}function El(e){if(e!==at)return!1;if(!ge)return So(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wu(e.type,e.memoizedProps)),a=!a),a&&ke&&va(e),So(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ke=If(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ke=If(e)}else t===27?(t=ke,Ua(e.type)?(e=zu,zu=null,ke=e):ke=t):ke=at?Dt(e.stateNode.nextSibling):null;return!0}function Ia(){ke=at=null,ge=!1}function us(){var e=ga;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),ga=null),e}function hi(e){ga===null?ga=[e]:ga.push(e)}var cs=S(null),Qa=null,Kt=null;function ba(e,t,a){I(cs,t._currentValue),t._currentValue=a}function Wt(e){e._currentValue=cs.current,B(cs)}function os(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function fs(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;e:for(;n!==null;){var h=n;n=i;for(var y=0;y<t.length;y++)if(h.context===t[y]){n.lanes|=a,h=n.alternate,h!==null&&(h.lanes|=a),os(n.return,a,e),l||(o=null);break e}n=h.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=a,n=o.alternate,n!==null&&(n.lanes|=a),os(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Ml(e,t,a,l){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var h=i.type;bt(i.pendingProps.value,o.value)||(e!==null?e.push(h):e=[h])}}else if(i===ue.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(qi):e=[qi])}i=i.return}e!==null&&fs(t,e,a,l),t.flags|=262144}function yn(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){Qa=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return To(Qa,e)}function xn(e,t){return Qa===null&&Fa(e),To(e,t)}function To(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(s(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var t2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},a2=u.unstable_scheduleCallback,l2=u.unstable_NormalPriority,Ie={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ds(){return{controller:new t2,data:new Map,refCount:0}}function mi(e){e.refCount--,e.refCount===0&&a2(l2,function(){e.controller.abort()})}var pi=null,hs=0,wl=0,Al=null;function i2(e,t){if(pi===null){var a=pi=[];hs=0,wl=gu(),Al={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hs++,t.then(Eo,Eo),t}function Eo(){if(--hs===0&&pi!==null){Al!==null&&(Al.status="fulfilled");var e=pi;pi=null,wl=0,Al=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function n2(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Mo=z.S;z.S=function(e,t){uf=we(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&i2(e,t),Mo!==null&&Mo(e,t)};var Ka=S(null);function ms(){var e=Ka.current;return e!==null?e:Oe.pooledCache}function Sn(e,t){t===null?I(Ka,Ka.current):I(Ka,t.pool)}function wo(){var e=ms();return e===null?null:{parent:Ie._currentValue,pool:e}}var Cl=Error(s(460)),ps=Error(s(474)),Tn=Error(s(542)),En={then:function(){}};function Ao(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Co(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xt,Xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ro(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ro(e),e}throw Ja=t,Cl}}function Wa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,Cl):a}}var Ja=null;function _o(){if(Ja===null)throw Error(s(459));var e=Ja;return Ja=null,e}function Ro(e){if(e===Cl||e===Tn)throw Error(s(483))}var _l=null,gi=0;function Mn(e){var t=gi;return gi+=1,_l===null&&(_l=[]),Co(_l,e,t)}function vi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wn(e,t){throw t.$$typeof===A?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zo(e){function t(M,T){if(e){var _=M.deletions;_===null?(M.deletions=[T],M.flags|=16):_.push(T)}}function a(M,T){if(!e)return null;for(;T!==null;)t(M,T),T=T.sibling;return null}function l(M){for(var T=new Map;M!==null;)M.key!==null?T.set(M.key,M):T.set(M.index,M),M=M.sibling;return T}function i(M,T){return M=Qt(M,T),M.index=0,M.sibling=null,M}function n(M,T,_){return M.index=_,e?(_=M.alternate,_!==null?(_=_.index,_<T?(M.flags|=67108866,T):_):(M.flags|=67108866,T)):(M.flags|=1048576,T)}function o(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function h(M,T,_,H){return T===null||T.tag!==6?(T=ls(_,M.mode,H),T.return=M,T):(T=i(T,_),T.return=M,T)}function y(M,T,_,H){var ee=_.type;return ee===C?N(M,T,_.props.children,H,_.key):T!==null&&(T.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===F&&Wa(ee)===T.type)?(T=i(T,_.props),vi(T,_),T.return=M,T):(T=vn(_.type,_.key,_.props,null,M.mode,H),vi(T,_),T.return=M,T)}function R(M,T,_,H){return T===null||T.tag!==4||T.stateNode.containerInfo!==_.containerInfo||T.stateNode.implementation!==_.implementation?(T=is(_,M.mode,H),T.return=M,T):(T=i(T,_.children||[]),T.return=M,T)}function N(M,T,_,H,ee){return T===null||T.tag!==7?(T=Xa(_,M.mode,H,ee),T.return=M,T):(T=i(T,_),T.return=M,T)}function q(M,T,_){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=ls(""+T,M.mode,_),T.return=M,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return _=vn(T.type,T.key,T.props,null,M.mode,_),vi(_,T),_.return=M,_;case k:return T=is(T,M.mode,_),T.return=M,T;case F:return T=Wa(T),q(M,T,_)}if(Le(T)||ae(T))return T=Xa(T,M.mode,_,null),T.return=M,T;if(typeof T.then=="function")return q(M,Mn(T),_);if(T.$$typeof===Z)return q(M,xn(M,T),_);wn(M,T)}return null}function U(M,T,_,H){var ee=T!==null?T.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return ee!==null?null:h(M,T,""+_,H);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case O:return _.key===ee?y(M,T,_,H):null;case k:return _.key===ee?R(M,T,_,H):null;case F:return _=Wa(_),U(M,T,_,H)}if(Le(_)||ae(_))return ee!==null?null:N(M,T,_,H,null);if(typeof _.then=="function")return U(M,T,Mn(_),H);if(_.$$typeof===Z)return U(M,T,xn(M,_),H);wn(M,_)}return null}function L(M,T,_,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return M=M.get(_)||null,h(T,M,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case O:return M=M.get(H.key===null?_:H.key)||null,y(T,M,H,ee);case k:return M=M.get(H.key===null?_:H.key)||null,R(T,M,H,ee);case F:return H=Wa(H),L(M,T,_,H,ee)}if(Le(H)||ae(H))return M=M.get(_)||null,N(T,M,H,ee,null);if(typeof H.then=="function")return L(M,T,_,Mn(H),ee);if(H.$$typeof===Z)return L(M,T,_,xn(T,H),ee);wn(T,H)}return null}function W(M,T,_,H){for(var ee=null,ye=null,J=T,se=T=0,me=null;J!==null&&se<_.length;se++){J.index>se?(me=J,J=null):me=J.sibling;var xe=U(M,J,_[se],H);if(xe===null){J===null&&(J=me);break}e&&J&&xe.alternate===null&&t(M,J),T=n(xe,T,se),ye===null?ee=xe:ye.sibling=xe,ye=xe,J=me}if(se===_.length)return a(M,J),ge&&Ft(M,se),ee;if(J===null){for(;se<_.length;se++)J=q(M,_[se],H),J!==null&&(T=n(J,T,se),ye===null?ee=J:ye.sibling=J,ye=J);return ge&&Ft(M,se),ee}for(J=l(J);se<_.length;se++)me=L(J,M,se,_[se],H),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?se:me.key),T=n(me,T,se),ye===null?ee=me:ye.sibling=me,ye=me);return e&&J.forEach(function(Na){return t(M,Na)}),ge&&Ft(M,se),ee}function le(M,T,_,H){if(_==null)throw Error(s(151));for(var ee=null,ye=null,J=T,se=T=0,me=null,xe=_.next();J!==null&&!xe.done;se++,xe=_.next()){J.index>se?(me=J,J=null):me=J.sibling;var Na=U(M,J,xe.value,H);if(Na===null){J===null&&(J=me);break}e&&J&&Na.alternate===null&&t(M,J),T=n(Na,T,se),ye===null?ee=Na:ye.sibling=Na,ye=Na,J=me}if(xe.done)return a(M,J),ge&&Ft(M,se),ee;if(J===null){for(;!xe.done;se++,xe=_.next())xe=q(M,xe.value,H),xe!==null&&(T=n(xe,T,se),ye===null?ee=xe:ye.sibling=xe,ye=xe);return ge&&Ft(M,se),ee}for(J=l(J);!xe.done;se++,xe=_.next())xe=L(J,M,se,xe.value,H),xe!==null&&(e&&xe.alternate!==null&&J.delete(xe.key===null?se:xe.key),T=n(xe,T,se),ye===null?ee=xe:ye.sibling=xe,ye=xe);return e&&J.forEach(function(gm){return t(M,gm)}),ge&&Ft(M,se),ee}function Ue(M,T,_,H){if(typeof _=="object"&&_!==null&&_.type===C&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case O:e:{for(var ee=_.key;T!==null;){if(T.key===ee){if(ee=_.type,ee===C){if(T.tag===7){a(M,T.sibling),H=i(T,_.props.children),H.return=M,M=H;break e}}else if(T.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===F&&Wa(ee)===T.type){a(M,T.sibling),H=i(T,_.props),vi(H,_),H.return=M,M=H;break e}a(M,T);break}else t(M,T);T=T.sibling}_.type===C?(H=Xa(_.props.children,M.mode,H,_.key),H.return=M,M=H):(H=vn(_.type,_.key,_.props,null,M.mode,H),vi(H,_),H.return=M,M=H)}return o(M);case k:e:{for(ee=_.key;T!==null;){if(T.key===ee)if(T.tag===4&&T.stateNode.containerInfo===_.containerInfo&&T.stateNode.implementation===_.implementation){a(M,T.sibling),H=i(T,_.children||[]),H.return=M,M=H;break e}else{a(M,T);break}else t(M,T);T=T.sibling}H=is(_,M.mode,H),H.return=M,M=H}return o(M);case F:return _=Wa(_),Ue(M,T,_,H)}if(Le(_))return W(M,T,_,H);if(ae(_)){if(ee=ae(_),typeof ee!="function")throw Error(s(150));return _=ee.call(_),le(M,T,_,H)}if(typeof _.then=="function")return Ue(M,T,Mn(_),H);if(_.$$typeof===Z)return Ue(M,T,xn(M,_),H);wn(M,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,T!==null&&T.tag===6?(a(M,T.sibling),H=i(T,_),H.return=M,M=H):(a(M,T),H=ls(_,M.mode,H),H.return=M,M=H),o(M)):a(M,T)}return function(M,T,_,H){try{gi=0;var ee=Ue(M,T,_,H);return _l=null,ee}catch(J){if(J===Cl||J===Tn)throw J;var ye=yt(29,J,null,M.mode);return ye.lanes=H,ye.return=M,ye}}}var $a=zo(!0),Uo=zo(!1),ya=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=gn(e),mo(e,null,a),t}return pn(e,l,t,a),gn(e)}function bi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Sc(e,a)}}function bs(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,a=a.next}while(a!==null);n===null?i=n=t:n=n.next=t}else i=n=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ys=!1;function yi(){if(ys){var e=Al;if(e!==null)throw e}}function xi(e,t,a,l){ys=!1;var i=e.updateQueue;ya=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var y=h,R=y.next;y.next=null,o===null?n=R:o.next=R,o=y;var N=e.alternate;N!==null&&(N=N.updateQueue,h=N.lastBaseUpdate,h!==o&&(h===null?N.firstBaseUpdate=R:h.next=R,N.lastBaseUpdate=y))}if(n!==null){var q=i.baseState;o=0,N=R=y=null,h=n;do{var U=h.lane&-536870913,L=U!==h.lane;if(L?(he&U)===U:(l&U)===U){U!==0&&U===wl&&(ys=!0),N!==null&&(N=N.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var W=e,le=h;U=t;var Ue=a;switch(le.tag){case 1:if(W=le.payload,typeof W=="function"){q=W.call(Ue,q,U);break e}q=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=le.payload,U=typeof W=="function"?W.call(Ue,q,U):W,U==null)break e;q=g({},q,U);break e;case 2:ya=!0}}U=h.callback,U!==null&&(e.flags|=64,L&&(e.flags|=8192),L=i.callbacks,L===null?i.callbacks=[U]:L.push(U))}else L={lane:U,tag:h.tag,payload:h.payload,callback:h.callback,next:null},N===null?(R=N=L,y=q):N=N.next=L,o|=U;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;L=h,h=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);N===null&&(y=q),i.baseState=y,i.firstBaseUpdate=R,i.lastBaseUpdate=N,n===null&&(i.shared.lanes=0),Aa|=o,e.lanes=o,e.memoizedState=q}}function Oo(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Lo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Oo(a[e],t)}var Rl=S(null),An=S(0);function Do(e,t){e=ra,I(An,e),I(Rl,t),ra=e|t.baseLanes}function xs(){I(An,ra),I(Rl,Rl.current)}function Ss(){ra=An.current,B(Rl),B(An)}var xt=S(null),Lt=null;function Ta(e){var t=e.alternate;I(je,je.current&1),I(xt,e),Lt===null&&(t===null||Rl.current!==null||t.memoizedState!==null)&&(Lt=e)}function Ts(e){I(je,je.current),I(xt,e),Lt===null&&(Lt=e)}function ko(e){e.tag===22?(I(je,je.current),I(xt,e),Lt===null&&(Lt=e)):Ea()}function Ea(){I(je,je.current),I(xt,xt.current)}function St(e){B(xt),Lt===e&&(Lt=null),B(je)}var je=S(0);function Cn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_u(a)||Ru(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,re=null,Re=null,Qe=null,_n=!1,zl=!1,el=!1,Rn=0,Si=0,Ul=null,r2=0;function Ge(){throw Error(s(321))}function Es(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!bt(e[a],t[a]))return!1;return!0}function Ms(e,t,a,l,i,n){return Jt=n,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?b0:Gs,el=!1,n=a(l,i),el=!1,zl&&(n=Bo(t,a,l,i)),No(e),n}function No(e){z.H=Mi;var t=Re!==null&&Re.next!==null;if(Jt=0,Qe=Re=re=null,_n=!1,Si=0,Ul=null,t)throw Error(s(300));e===null||Fe||(e=e.dependencies,e!==null&&yn(e)&&(Fe=!0))}function Bo(e,t,a,l){re=e;var i=0;do{if(zl&&(Ul=null),Si=0,zl=!1,25<=i)throw Error(s(301));if(i+=1,Qe=Re=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}z.H=y0,n=t(a,l)}while(zl);return n}function s2(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Ti(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(re.flags|=1024),t}function ws(){var e=Rn!==0;return Rn=0,e}function As(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Cs(e){if(_n){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_n=!1}Jt=0,Qe=Re=re=null,zl=!1,Si=Rn=0,Ul=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?re.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Pe(){if(Re===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Qe===null?re.memoizedState:Qe.next;if(t!==null)Qe=t,Re=e;else{if(e===null)throw re.alternate===null?Error(s(467)):Error(s(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Qe===null?re.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function zn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ti(e){var t=Si;return Si+=1,Ul===null&&(Ul=[]),e=Co(Ul,e,t),t=re,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?b0:Gs),e}function Un(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ti(e);if(e.$$typeof===Z)return lt(e)}throw Error(s(438,String(e)))}function _s(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zn(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Me;return t.index++,a}function $t(e,t){return typeof t=="function"?t(e):t}function On(e){var t=Pe();return Rs(t,Re,e)}function Rs(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}t.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var h=o=null,y=null,R=t,N=!1;do{var q=R.lane&-536870913;if(q!==R.lane?(he&q)===q:(Jt&q)===q){var U=R.revertLane;if(U===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),q===wl&&(N=!0);else if((Jt&U)===U){R=R.next,U===wl&&(N=!0);continue}else q={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(h=y=q,o=n):y=y.next=q,re.lanes|=U,Aa|=U;q=R.action,el&&a(n,q),n=R.hasEagerState?R.eagerState:a(n,q)}else U={lane:q,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(h=y=U,o=n):y=y.next=U,re.lanes|=q,Aa|=q;R=R.next}while(R!==null&&R!==t);if(y===null?o=n:y.next=h,!bt(n,e.memoizedState)&&(Fe=!0,N&&(a=Al,a!==null)))throw a;e.memoizedState=n,e.baseState=o,e.baseQueue=y,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function zs(e){var t=Pe(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,n=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do n=e(n,o.action),o=o.next;while(o!==i);bt(n,t.memoizedState)||(Fe=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,l]}function Ho(e,t,a){var l=re,i=Pe(),n=ge;if(n){if(a===void 0)throw Error(s(407));a=a()}else a=t();var o=!bt((Re||i).memoizedState,a);if(o&&(i.memoizedState=a,Fe=!0),i=i.queue,Ls(Vo.bind(null,l,i,e),[e]),i.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(l.flags|=2048,Ol(9,{destroy:void 0},qo.bind(null,l,i,a,t),null),Oe===null)throw Error(s(349));n||(Jt&127)!==0||Go(l,t,a)}return a}function Go(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=zn(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qo(e,t,a,l){t.value=a,t.getSnapshot=l,Zo(t)&&jo(e)}function Vo(e,t,a){return a(function(){Zo(t)&&jo(e)})}function Zo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!bt(e,a)}catch{return!0}}function jo(e){var t=Ya(e,2);t!==null&&pt(t,e,2)}function Us(e){var t=ut();if(typeof e=="function"){var a=e;if(e=a(),el){da(!0);try{a()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function Po(e,t,a,l){return e.baseState=a,Rs(e,Re,typeof l=="function"?l:$t)}function u2(e,t,a,l,i){if(kn(e))throw Error(s(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};z.T!==null?a(!0):n.isTransition=!1,l(n),a=t.pending,a===null?(n.next=t.pending=n,Yo(t,n)):(n.next=a.next,t.pending=a.next=n)}}function Yo(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var n=z.T,o={};z.T=o;try{var h=a(i,l),y=z.S;y!==null&&y(o,h),Xo(e,t,h)}catch(R){Os(e,t,R)}finally{n!==null&&o.types!==null&&(n.types=o.types),z.T=n}}else try{n=a(i,l),Xo(e,t,n)}catch(R){Os(e,t,R)}}function Xo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Io(e,t,l)},function(l){return Os(e,t,l)}):Io(e,t,a)}function Io(e,t,a){t.status="fulfilled",t.value=a,Qo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yo(e,a)))}function Os(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Qo(t),t=t.next;while(t!==l)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Fo(e,t){return t}function Ko(e,t){if(ge){var a=Oe.formState;if(a!==null){e:{var l=re;if(ge){if(ke){t:{for(var i=ke,n=Ot;i.nodeType!==8;){if(!n){i=null;break t}if(i=Dt(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ke=Dt(i.nextSibling),l=i.data==="F!";break e}}va(l)}l=!1}l&&(t=a[0])}}return a=ut(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},a.queue=l,a=p0.bind(null,re,l),l.dispatch=a,l=Us(!1),n=Hs.bind(null,re,!1,l.queue),l=ut(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=u2.bind(null,re,i,n,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function Wo(e){var t=Pe();return Jo(t,Re,e)}function Jo(e,t,a){if(t=Rs(e,t,Fo)[0],e=On($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ti(t)}catch(o){throw o===Cl?Tn:o}else l=t;t=Pe();var i=t.queue,n=i.dispatch;return a!==t.memoizedState&&(re.flags|=2048,Ol(9,{destroy:void 0},c2.bind(null,i,a),null)),[l,n,e]}function c2(e,t){e.action=t}function $o(e){var t=Pe(),a=Re;if(a!==null)return Jo(t,a,e);Pe(),t=t.memoizedState,a=Pe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ol(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=re.updateQueue,t===null&&(t=zn(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function e0(){return Pe().memoizedState}function Ln(e,t,a,l){var i=ut();re.flags|=e,i.memoizedState=Ol(1|t,{destroy:void 0},a,l===void 0?null:l)}function Dn(e,t,a,l){var i=Pe();l=l===void 0?null:l;var n=i.memoizedState.inst;Re!==null&&l!==null&&Es(l,Re.memoizedState.deps)?i.memoizedState=Ol(t,n,a,l):(re.flags|=e,i.memoizedState=Ol(1|t,n,a,l))}function t0(e,t){Ln(8390656,8,e,t)}function Ls(e,t){Dn(2048,8,e,t)}function o2(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=zn(),re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function a0(e){var t=Pe().memoizedState;return o2({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function l0(e,t){return Dn(4,2,e,t)}function i0(e,t){return Dn(4,4,e,t)}function n0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r0(e,t,a){a=a!=null?a.concat([e]):null,Dn(4,4,n0.bind(null,t,e),a)}function Ds(){}function s0(e,t){var a=Pe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Es(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function u0(e,t){var a=Pe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Es(t,l[1]))return l[0];if(l=e(),el){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l}function ks(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=of(),re.lanes|=e,Aa|=e,a)}function c0(e,t,a,l){return bt(a,t)?a:Rl.current!==null?(e=ks(e,a,l),bt(e,t)||(Fe=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(he&261930)===0?(Fe=!0,e.memoizedState=a):(e=of(),re.lanes|=e,Aa|=e,t)}function o0(e,t,a,l,i){var n=P.p;P.p=n!==0&&8>n?n:8;var o=z.T,h={};z.T=h,Hs(e,!1,t,a);try{var y=i(),R=z.S;if(R!==null&&R(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var N=n2(y,l);Ei(e,t,N,Mt(e))}else Ei(e,t,l,Mt(e))}catch(q){Ei(e,t,{then:function(){},status:"rejected",reason:q},Mt())}finally{P.p=n,o!==null&&h.types!==null&&(o.types=h.types),z.T=o}}function f2(){}function Ns(e,t,a,l){if(e.tag!==5)throw Error(s(476));var i=f0(e).queue;o0(e,i,t,$,a===null?f2:function(){return d0(e),a(l)})}function f0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function d0(e){var t=f0(e);t.next===null&&(t=e.alternate.memoizedState),Ei(e,t.next.queue,{},Mt())}function Bs(){return lt(qi)}function h0(){return Pe().memoizedState}function m0(){return Pe().memoizedState}function d2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Mt();e=xa(a);var l=Sa(t,e,a);l!==null&&(pt(l,t,a),bi(l,t,a)),t={cache:ds()},e.payload=t;return}t=t.return}}function h2(e,t,a){var l=Mt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kn(e)?g0(t,a):(a=ts(e,t,a,l),a!==null&&(pt(a,e,l),v0(a,t,l)))}function p0(e,t,a){var l=Mt();Ei(e,t,a,l)}function Ei(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kn(e))g0(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var o=t.lastRenderedState,h=n(o,a);if(i.hasEagerState=!0,i.eagerState=h,bt(h,o))return pn(e,t,i,0),Oe===null&&mn(),!1}catch{}if(a=ts(e,t,i,l),a!==null)return pt(a,e,l),v0(a,t,l),!0}return!1}function Hs(e,t,a,l){if(l={lane:2,revertLane:gu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},kn(e)){if(t)throw Error(s(479))}else t=ts(e,a,l,2),t!==null&&pt(t,e,2)}function kn(e){var t=e.alternate;return e===re||t!==null&&t===re}function g0(e,t){zl=_n=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function v0(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Sc(e,a)}}var Mi={readContext:lt,use:Un,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Mi.useEffectEvent=Ge;var b0={readContext:lt,use:Un,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:t0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ln(4194308,4,n0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ln(4194308,4,e,t)},useInsertionEffect:function(e,t){Ln(4,2,e,t)},useMemo:function(e,t){var a=ut();t=t===void 0?null:t;var l=e();if(el){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ut();if(a!==void 0){var i=a(t);if(el){da(!0);try{a(t)}finally{da(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=h2.bind(null,re,e),[l.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Us(e);var t=e.queue,a=p0.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ds,useDeferredValue:function(e,t){var a=ut();return ks(a,e,t)},useTransition:function(){var e=Us(!1);return e=o0.bind(null,re,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=re,i=ut();if(ge){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Oe===null)throw Error(s(349));(he&127)!==0||Go(l,t,a)}i.memoizedState=a;var n={value:a,getSnapshot:t};return i.queue=n,t0(Vo.bind(null,l,n,e),[e]),l.flags|=2048,Ol(9,{destroy:void 0},qo.bind(null,l,n,a,t),null),a},useId:function(){var e=ut(),t=Oe.identifierPrefix;if(ge){var a=Vt,l=qt;a=(l&~(1<<32-vt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Rn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=r2++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bs,useFormState:Ko,useActionState:Ko,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hs.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:_s,useCacheRefresh:function(){return ut().memoizedState=d2.bind(null,re)},useEffectEvent:function(e){var t=ut(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Gs={readContext:lt,use:Un,useCallback:s0,useContext:lt,useEffect:Ls,useImperativeHandle:r0,useInsertionEffect:l0,useLayoutEffect:i0,useMemo:u0,useReducer:On,useRef:e0,useState:function(){return On($t)},useDebugValue:Ds,useDeferredValue:function(e,t){var a=Pe();return c0(a,Re.memoizedState,e,t)},useTransition:function(){var e=On($t)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ti(e),t]},useSyncExternalStore:Ho,useId:h0,useHostTransitionStatus:Bs,useFormState:Wo,useActionState:Wo,useOptimistic:function(e,t){var a=Pe();return Po(a,Re,e,t)},useMemoCache:_s,useCacheRefresh:m0};Gs.useEffectEvent=a0;var y0={readContext:lt,use:Un,useCallback:s0,useContext:lt,useEffect:Ls,useImperativeHandle:r0,useInsertionEffect:l0,useLayoutEffect:i0,useMemo:u0,useReducer:zs,useRef:e0,useState:function(){return zs($t)},useDebugValue:Ds,useDeferredValue:function(e,t){var a=Pe();return Re===null?ks(a,e,t):c0(a,Re.memoizedState,e,t)},useTransition:function(){var e=zs($t)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ti(e),t]},useSyncExternalStore:Ho,useId:h0,useHostTransitionStatus:Bs,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var a=Pe();return Re!==null?Po(a,Re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_s,useCacheRefresh:m0};y0.useEffectEvent=a0;function qs(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:g({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vs={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Mt(),i=xa(l);i.payload=t,a!=null&&(i.callback=a),t=Sa(e,i,l),t!==null&&(pt(t,e,l),bi(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Mt(),i=xa(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Sa(e,i,l),t!==null&&(pt(t,e,l),bi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Mt(),l=xa(a);l.tag=2,t!=null&&(l.callback=t),t=Sa(e,l,a),t!==null&&(pt(t,e,a),bi(t,e,a))}};function x0(e,t,a,l,i,n,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,o):t.prototype&&t.prototype.isPureReactComponent?!oi(a,l)||!oi(i,n):!0}function S0(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function tl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=g({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function T0(e){hn(e)}function E0(e){console.error(e)}function M0(e){hn(e)}function Nn(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function w0(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Zs(e,t,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Nn(e,t)},a}function A0(e){return e=xa(e),e.tag=3,e}function C0(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){w0(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){w0(t,a,l),typeof i!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function m2(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Ml(t,a,i,!0),a=xt.current,a!==null){switch(a.tag){case 31:case 13:return Lt===null?Qn():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===En?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),hu(e,l,i)),!1;case 22:return a.flags|=65536,l===En?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),hu(e,l,i)),!1}throw Error(s(435,a.tag))}return hu(e,l,i),Qn(),!1}if(ge)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==ss&&(e=Error(s(422),{cause:l}),hi(Rt(e,a)))):(l!==ss&&(t=Error(s(423),{cause:l}),hi(Rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Rt(l,a),i=Zs(e.stateNode,l,i),bs(e,i),qe!==4&&(qe=2)),!1;var n=Error(s(520),{cause:l});if(n=Rt(n,a),Oi===null?Oi=[n]:Oi.push(n),qe!==4&&(qe=2),t===null)return!0;l=Rt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Zs(a.stateNode,l,e),bs(a,e),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ca===null||!Ca.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=A0(i),C0(i,e,a,l),bs(a,i),!1}a=a.return}while(a!==null);return!1}var js=Error(s(461)),Fe=!1;function it(e,t,a,l){t.child=e===null?Uo(t,null,a,l):$a(t,e.child,a,l)}function _0(e,t,a,l,i){a=a.render;var n=t.ref;if("ref"in l){var o={};for(var h in l)h!=="ref"&&(o[h]=l[h])}else o=l;return Fa(t),l=Ms(e,t,a,o,n,i),h=ws(),e!==null&&!Fe?(As(e,t,i),ea(e,t,i)):(ge&&h&&ns(t),t.flags|=1,it(e,t,l,i),t.child)}function R0(e,t,a,l,i){if(e===null){var n=a.type;return typeof n=="function"&&!as(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,z0(e,t,n,l,i)):(e=vn(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!Ws(e,i)){var o=n.memoizedProps;if(a=a.compare,a=a!==null?a:oi,a(o,l)&&e.ref===t.ref)return ea(e,t,i)}return t.flags|=1,e=Qt(n,l),e.ref=t.ref,e.return=t,t.child=e}function z0(e,t,a,l,i){if(e!==null){var n=e.memoizedProps;if(oi(n,l)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=l=n,Ws(e,i))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,ea(e,t,i)}return Ps(e,t,a,l,i)}function U0(e,t,a,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,t.child=null;return O0(e,t,n,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sn(t,n!==null?n.cachePool:null),n!==null?Do(t,n):xs(),ko(t);else return l=t.lanes=536870912,O0(e,t,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(Sn(t,n.cachePool),Do(t,n),Ea(),t.memoizedState=null):(e!==null&&Sn(t,null),xs(),Ea());return it(e,t,i,a),t.child}function wi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function O0(e,t,a,l,i){var n=ms();return n=n===null?null:{parent:Ie._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Sn(t,null),xs(),ko(t),e!==null&&Ml(e,t,l,!0),t.childLanes=i,null}function Bn(e,t){return t=Gn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function L0(e,t,a){return $a(t,e.child,null,a),e=Bn(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function p2(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Bn(t,l),t.lanes=536870912,wi(null,e);if(Ts(t),(e=ke)?(e=Xf(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:qt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=go(e),a.return=t,t.child=a,at=t,ke=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return Bn(t,l)}var n=e.memoizedState;if(n!==null){var o=n.dehydrated;if(Ts(t),i)if(t.flags&256)t.flags&=-257,t=L0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Fe||Ml(e,t,a,!1),i=(a&e.childLanes)!==0,Fe||i){if(l=Oe,l!==null&&(o=Tc(l,a),o!==0&&o!==n.retryLane))throw n.retryLane=o,Ya(e,o),pt(l,e,o),js;Qn(),t=L0(e,t,a)}else e=n.treeContext,ke=Dt(o.nextSibling),at=t,ge=!0,ga=null,Ot=!1,e!==null&&yo(t,e),t=Bn(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hn(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ps(e,t,a,l,i){return Fa(t),a=Ms(e,t,a,l,void 0,i),l=ws(),e!==null&&!Fe?(As(e,t,i),ea(e,t,i)):(ge&&l&&ns(t),t.flags|=1,it(e,t,a,i),t.child)}function D0(e,t,a,l,i,n){return Fa(t),t.updateQueue=null,a=Bo(t,l,a,i),No(e),l=ws(),e!==null&&!Fe?(As(e,t,n),ea(e,t,n)):(ge&&l&&ns(t),t.flags|=1,it(e,t,a,n),t.child)}function k0(e,t,a,l,i){if(Fa(t),t.stateNode===null){var n=xl,o=a.contextType;typeof o=="object"&&o!==null&&(n=lt(o)),n=new a(l,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Vs,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=l,n.state=t.memoizedState,n.refs={},gs(t),o=a.contextType,n.context=typeof o=="object"&&o!==null?lt(o):xl,n.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(qs(t,a,o,l),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Vs.enqueueReplaceState(n,n.state,null),xi(t,l,n,i),yi(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){n=t.stateNode;var h=t.memoizedProps,y=tl(a,h);n.props=y;var R=n.context,N=a.contextType;o=xl,typeof N=="object"&&N!==null&&(o=lt(N));var q=a.getDerivedStateFromProps;N=typeof q=="function"||typeof n.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,N||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(h||R!==o)&&S0(t,n,l,o),ya=!1;var U=t.memoizedState;n.state=U,xi(t,l,n,i),yi(),R=t.memoizedState,h||U!==R||ya?(typeof q=="function"&&(qs(t,a,q,l),R=t.memoizedState),(y=ya||x0(t,a,y,l,U,R,o))?(N||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),n.props=l,n.state=R,n.context=o,l=y):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{n=t.stateNode,vs(e,t),o=t.memoizedProps,N=tl(a,o),n.props=N,q=t.pendingProps,U=n.context,R=a.contextType,y=xl,typeof R=="object"&&R!==null&&(y=lt(R)),h=a.getDerivedStateFromProps,(R=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==q||U!==y)&&S0(t,n,l,y),ya=!1,U=t.memoizedState,n.state=U,xi(t,l,n,i),yi();var L=t.memoizedState;o!==q||U!==L||ya||e!==null&&e.dependencies!==null&&yn(e.dependencies)?(typeof h=="function"&&(qs(t,a,h,l),L=t.memoizedState),(N=ya||x0(t,a,N,l,U,L,y)||e!==null&&e.dependencies!==null&&yn(e.dependencies))?(R||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,L,y),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,L,y)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=L),n.props=l,n.state=L,n.context=y,l=N):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),l=!1)}return n=l,Hn(e,t),l=(t.flags&128)!==0,n||l?(n=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&l?(t.child=$a(t,e.child,null,i),t.child=$a(t,null,a,i)):it(e,t,a,i),t.memoizedState=n.state,e=t.child):e=ea(e,t,i),e}function N0(e,t,a,l){return Ia(),t.flags|=256,it(e,t,a,l),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xs(e){return{baseLanes:e,cachePool:wo()}}function Is(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Et),e}function B0(e,t,a){var l=t.pendingProps,i=!1,n=(t.flags&128)!==0,o;if((o=n)||(o=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Ta(t):Ea(),(e=ke)?(e=Xf(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:qt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=go(e),a.return=t,t.child=a,at=t,ke=null)):e=null,e===null)throw va(t);return Ru(e)?t.lanes=32:t.lanes=536870912,null}var h=l.children;return l=l.fallback,i?(Ea(),i=t.mode,h=Gn({mode:"hidden",children:h},i),l=Xa(l,i,a,null),h.return=t,l.return=t,h.sibling=l,t.child=h,l=t.child,l.memoizedState=Xs(a),l.childLanes=Is(e,o,a),t.memoizedState=Ys,wi(null,l)):(Ta(t),Qs(t,h))}var y=e.memoizedState;if(y!==null&&(h=y.dehydrated,h!==null)){if(n)t.flags&256?(Ta(t),t.flags&=-257,t=Fs(e,t,a)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),h=l.fallback,i=t.mode,l=Gn({mode:"visible",children:l.children},i),h=Xa(h,i,a,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,$a(t,e.child,null,a),l=t.child,l.memoizedState=Xs(a),l.childLanes=Is(e,o,a),t.memoizedState=Ys,t=wi(null,l));else if(Ta(t),Ru(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var R=o.dgst;o=R,l=Error(s(419)),l.stack="",l.digest=o,hi({value:l,source:null,stack:null}),t=Fs(e,t,a)}else if(Fe||Ml(e,t,a,!1),o=(a&e.childLanes)!==0,Fe||o){if(o=Oe,o!==null&&(l=Tc(o,a),l!==0&&l!==y.retryLane))throw y.retryLane=l,Ya(e,l),pt(o,e,l),js;_u(h)||Qn(),t=Fs(e,t,a)}else _u(h)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,ke=Dt(h.nextSibling),at=t,ge=!0,ga=null,Ot=!1,e!==null&&yo(t,e),t=Qs(t,l.children),t.flags|=4096);return t}return i?(Ea(),h=l.fallback,i=t.mode,y=e.child,R=y.sibling,l=Qt(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,R!==null?h=Qt(R,h):(h=Xa(h,i,a,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,wi(null,l),l=t.child,h=e.child.memoizedState,h===null?h=Xs(a):(i=h.cachePool,i!==null?(y=Ie._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=wo(),h={baseLanes:h.baseLanes|a,cachePool:i}),l.memoizedState=h,l.childLanes=Is(e,o,a),t.memoizedState=Ys,wi(e.child,l)):(Ta(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Qs(e,t){return t=Gn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gn(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function Fs(e,t,a){return $a(t,e.child,null,a),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H0(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),os(e.return,t,a)}function Ks(e,t,a,l,i,n){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=i,o.treeForkCount=n)}function G0(e,t,a){var l=t.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var o=je.current,h=(o&2)!==0;if(h?(o=o&1|2,t.flags|=128):o&=1,I(je,o),it(e,t,l,a),l=ge?di:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&H0(e,a,t);else if(e.tag===19)H0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Cn(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Ks(t,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cn(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Ks(t,!0,a,null,n,l);break;case"together":Ks(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Aa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ml(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ws(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yn(e)))}function g2(e,t,a){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),ba(t,Ie,e.memoizedState.cache),Ia();break;case 27:case 5:st(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ts(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ta(t),t.flags|=128,null):(a&t.child.childLanes)!==0?B0(e,t,a):(Ta(t),e=ea(e,t,a),e!==null?e.sibling:null);Ta(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Ml(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return G0(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(je,je.current),l)break;return null;case 22:return t.lanes=0,U0(e,t,a,t.pendingProps);case 24:ba(t,Ie,e.memoizedState.cache)}return ea(e,t,a)}function q0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Ws(e,a)&&(t.flags&128)===0)return Fe=!1,g2(e,t,a);Fe=(e.flags&131072)!==0}else Fe=!1,ge&&(t.flags&1048576)!==0&&bo(t,di,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Wa(t.elementType),t.type=e,typeof e=="function")as(e)?(l=tl(e,l),t.tag=1,t=k0(null,t,e,l,a)):(t.tag=0,t=Ps(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===V){t.tag=11,t=_0(null,t,e,l,a);break e}else if(i===j){t.tag=14,t=R0(null,t,e,l,a);break e}}throw t=be(e)||e,Error(s(306,t,""))}}return t;case 0:return Ps(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=tl(l,t.pendingProps),k0(e,t,l,i,a);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var n=t.memoizedState;i=n.element,vs(e,t),xi(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ba(t,Ie,l),l!==n.cache&&fs(t,[Ie],a,!0),yi(),l=o.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=N0(e,t,l,a);break e}else if(l!==i){i=Rt(Error(s(424)),t),hi(i),t=N0(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ke=Dt(e.firstChild),at=t,ge=!0,ga=null,Ot=!0,a=Uo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ia(),l===i){t=ea(e,t,a);break e}it(e,t,l,a)}t=t.child}return t;case 26:return Hn(e,t),e===null?(a=Jf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=tr(ce.current).createElement(a),l[tt]=t,l[ct]=e,nt(l,a,e),$e(l),t.stateNode=l):t.memoizedState=Jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return st(t),e===null&&ge&&(l=t.stateNode=Ff(t.type,t.pendingProps,ce.current),at=t,Ot=!0,i=ke,Ua(t.type)?(zu=i,ke=Dt(l.firstChild)):ke=i),it(e,t,t.pendingProps.children,a),Hn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=ke)&&(l=X2(l,t.type,t.pendingProps,Ot),l!==null?(t.stateNode=l,at=t,ke=Dt(l.firstChild),Ot=!1,i=!0):i=!1),i||va(t)),st(t),i=t.type,n=t.pendingProps,o=e!==null?e.memoizedProps:null,l=n.children,wu(i,n)?l=null:o!==null&&wu(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Ms(e,t,s2,null,null,a),qi._currentValue=i),Hn(e,t),it(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=ke)&&(a=I2(a,t.pendingProps,Ot),a!==null?(t.stateNode=a,at=t,ke=null,e=!0):e=!1),e||va(t)),null;case 13:return B0(e,t,a);case 4:return Je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=$a(t,null,l,a):it(e,t,l,a),t.child;case 11:return _0(e,t,t.type,t.pendingProps,a);case 7:return it(e,t,t.pendingProps,a),t.child;case 8:return it(e,t,t.pendingProps.children,a),t.child;case 12:return it(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ba(t,t.type,l.value),it(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Fa(t),i=lt(i),l=l(i),t.flags|=1,it(e,t,l,a),t.child;case 14:return R0(e,t,t.type,t.pendingProps,a);case 15:return z0(e,t,t.type,t.pendingProps,a);case 19:return G0(e,t,a);case 31:return p2(e,t,a);case 22:return U0(e,t,a,t.pendingProps);case 24:return Fa(t),l=lt(Ie),e===null?(i=ms(),i===null&&(i=Oe,n=ds(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),t.memoizedState={parent:l,cache:i},gs(t),ba(t,Ie,i)):((e.lanes&a)!==0&&(vs(e,t),xi(t,null,null,a),yi()),i=e.memoizedState,n=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ba(t,Ie,l)):(l=n.cache,ba(t,Ie,l),l!==i.cache&&fs(t,[Ie],a,!0))),it(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ta(e){e.flags|=4}function Js(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(mf())e.flags|=8192;else throw Ja=En,ps}else e.flags&=-16777217}function V0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l1(t))if(mf())e.flags|=8192;else throw Ja=En,ps}function qn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yc():536870912,e.lanes|=t,Nl|=t)}function Ai(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function v2(e,t,a){var l=t.pendingProps;switch(rs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wt(Ie),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(El(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,us())),Ne(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(ta(t),n!==null?(Ne(t),V0(t,n)):(Ne(t),Js(t,i,null,l,a))):n?n!==e.memoizedState?(ta(t),Ne(t),V0(t,n)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Ne(t),Js(t,i,e,l,a)),null;case 27:if(Pt(t),a=ce.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ne(t),null}e=K.current,El(t)?xo(t):(e=Ff(i,l,a),t.stateNode=e,ta(t))}return Ne(t),null;case 5:if(Pt(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ne(t),null}if(n=K.current,El(t))xo(t);else{var o=tr(ce.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?o.createElement(i,{is:l.is}):o.createElement(i)}}n[tt]=t,n[ct]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=n;e:switch(nt(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Ne(t),Js(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=ce.current,El(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=at,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[tt]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Hf(e.nodeValue,a)),e||va(t,!0)}else e=tr(e).createTextNode(l),e[tt]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=El(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tt]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=El(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[tt]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else i=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),qn(t,t.updateQueue),Ne(t),null);case 4:return De(),e===null&&xu(t.stateNode.containerInfo),Ne(t),null;case 10:return Wt(t.type),Ne(t),null;case 19:if(B(je),l=t.memoizedState,l===null)return Ne(t),null;if(i=(t.flags&128)!==0,n=l.rendering,n===null)if(i)Ai(l,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Cn(e),n!==null){for(t.flags|=128,Ai(l,!1),e=n.updateQueue,t.updateQueue=e,qn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)po(a,e),a=a.sibling;return I(je,je.current&1|2),ge&&Ft(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&we()>Yn&&(t.flags|=128,i=!0,Ai(l,!1),t.lanes=4194304)}else{if(!i)if(e=Cn(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,qn(t,e),Ai(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!ge)return Ne(t),null}else 2*we()-l.renderingStartTime>Yn&&a!==536870912&&(t.flags|=128,i=!0,Ai(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=we(),e.sibling=null,a=je.current,I(je,i?a&1|2:a&1),ge&&Ft(t,l.treeForkCount),e):(Ne(t),null);case 22:case 23:return St(t),Ss(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&qn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&B(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Ie),Ne(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function b2(e,t){switch(rs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ie),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pt(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(s(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(je),null;case 4:return De(),null;case 10:return Wt(t.type),null;case 22:case 23:return St(t),Ss(),e!==null&&B(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ie),null;case 25:return null;default:return null}}function Z0(e,t){switch(rs(t),t.tag){case 3:Wt(Ie),De();break;case 26:case 27:case 5:Pt(t);break;case 4:De();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:B(je);break;case 10:Wt(t.type);break;case 22:case 23:St(t),Ss(),e!==null&&B(Ka);break;case 24:Wt(Ie)}}function Ci(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var n=a.create,o=a.inst;l=n(),o.destroy=l}a=a.next}while(a!==i)}}catch(h){Ce(t,t.return,h)}}function Ma(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var o=l.inst,h=o.destroy;if(h!==void 0){o.destroy=void 0,i=t;var y=a,R=h;try{R()}catch(N){Ce(i,y,N)}}}l=l.next}while(l!==n)}}catch(N){Ce(t,t.return,N)}}function j0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Lo(t,a)}catch(l){Ce(e,e.return,l)}}}function P0(e,t,a){a.props=tl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ce(e,t,l)}}function _i(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Ce(e,t,i)}}function Zt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ce(e,t,i)}else a.current=null}function Y0(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Ce(e,e.return,i)}}function $s(e,t,a){try{var l=e.stateNode;q2(l,e.type,a,t),l[ct]=t}catch(i){Ce(e,e.return,i)}}function X0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xt));else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(tu(e,t,a),e=e.sibling;e!==null;)tu(e,t,a),e=e.sibling}function Vn(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vn(e,t,a),e=e.sibling;e!==null;)Vn(e,t,a),e=e.sibling}function I0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);nt(t,l,a),t[tt]=e,t[ct]=a}catch(n){Ce(e,e.return,n)}}var aa=!1,Ke=!1,au=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,et=null;function y2(e,t){if(e=e.containerInfo,Eu=ur,e=no(e),Fr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var o=0,h=-1,y=-1,R=0,N=0,q=e,U=null;t:for(;;){for(var L;q!==a||i!==0&&q.nodeType!==3||(h=o+i),q!==n||l!==0&&q.nodeType!==3||(y=o+l),q.nodeType===3&&(o+=q.nodeValue.length),(L=q.firstChild)!==null;)U=q,q=L;for(;;){if(q===e)break t;if(U===a&&++R===i&&(h=o),U===n&&++N===l&&(y=o),(L=q.nextSibling)!==null)break;q=U,U=q.parentNode}q=L}a=h===-1||y===-1?null:{start:h,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mu={focusedElem:e,selectionRange:a},ur=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=t,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var W=tl(a.type,i);e=l.getSnapshotBeforeUpdate(W,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(le){Ce(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function F0(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),l&4&&Ci(5,a);break;case 1:if(ia(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ce(a,a.return,o)}else{var i=tl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ce(a,a.return,o)}}l&64&&j0(a),l&512&&_i(a,a.return);break;case 3:if(ia(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Lo(e,t)}catch(o){Ce(a,a.return,o)}}break;case 27:t===null&&l&4&&I0(a);case 26:case 5:ia(e,a),t===null&&l&4&&Y0(a),l&512&&_i(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),l&4&&J0(e,a);break;case 13:ia(e,a),l&4&&$0(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_2.bind(null,a),Q2(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Ke,i=aa;var n=Ke;aa=l,(Ke=t)&&!n?na(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),aa=i,Ke=n}break;case 30:break;default:ia(e,a)}}function K0(e){var t=e.alternate;t!==null&&(e.alternate=null,K0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Or(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,ft=!1;function la(e,t,a){for(a=a.child;a!==null;)W0(e,t,a),a=a.sibling}function W0(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:Ke||Zt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||Zt(a,t);var l=He,i=ft;Ua(a.type)&&(He=a.stateNode,ft=!1),la(e,t,a),Bi(a.stateNode),He=l,ft=i;break;case 5:Ke||Zt(a,t);case 6:if(l=He,i=ft,He=null,la(e,t,a),He=l,ft=i,He!==null)if(ft)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(n){Ce(a,t,n)}else try{He.removeChild(a.stateNode)}catch(n){Ce(a,t,n)}break;case 18:He!==null&&(ft?(e=He,Pf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Pl(e)):Pf(He,a.stateNode));break;case 4:l=He,i=ft,He=a.stateNode.containerInfo,ft=!0,la(e,t,a),He=l,ft=i;break;case 0:case 11:case 14:case 15:Ma(2,a,t),Ke||Ma(4,a,t),la(e,t,a);break;case 1:Ke||(Zt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&P0(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Ke=(l=Ke)||a.memoizedState!==null,la(e,t,a),Ke=l;break;default:la(e,t,a)}}function J0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pl(e)}catch(a){Ce(t,t.return,a)}}}function $0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pl(e)}catch(a){Ce(t,t.return,a)}}function x2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Q0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Q0),t;default:throw Error(s(435,e.tag))}}function Zn(e,t){var a=x2(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=R2.bind(null,e,l);l.then(i,i)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=e,o=t,h=o;e:for(;h!==null;){switch(h.tag){case 27:if(Ua(h.type)){He=h.stateNode,ft=!1;break e}break;case 5:He=h.stateNode,ft=!1;break e;case 3:case 4:He=h.stateNode.containerInfo,ft=!0;break e}h=h.return}if(He===null)throw Error(s(160));W0(n,o,i),He=null,ft=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ef(t,e),t=t.sibling}var Ht=null;function ef(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),ht(e),l&4&&(Ma(3,e,e.return),Ci(3,e),Ma(5,e,e.return));break;case 1:dt(t,e),ht(e),l&512&&(Ke||a===null||Zt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Ht;if(dt(t,e),ht(e),l&512&&(Ke||a===null||Zt(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ti]||n[tt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),nt(n,l,a),n[tt]=e,$e(n),l=n;break e;case"link":var o=t1("link","href",i).get(l+(a.href||""));if(o){for(var h=0;h<o.length;h++)if(n=o[h],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(h,1);break t}}n=i.createElement(l),nt(n,l,a),i.head.appendChild(n);break;case"meta":if(o=t1("meta","content",i).get(l+(a.content||""))){for(h=0;h<o.length;h++)if(n=o[h],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(h,1);break t}}n=i.createElement(l),nt(n,l,a),i.head.appendChild(n);break;default:throw Error(s(468,l))}n[tt]=e,$e(n),l=n}e.stateNode=l}else a1(i,e.type,e.stateNode);else e.stateNode=e1(i,l,e.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?a1(i,e.type,e.stateNode):e1(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$s(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),ht(e),l&512&&(Ke||a===null||Zt(a,a.return)),a!==null&&l&4&&$s(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),ht(e),l&512&&(Ke||a===null||Zt(a,a.return)),e.flags&32){i=e.stateNode;try{hl(i,"")}catch(W){Ce(e,e.return,W)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,$s(e,i,a!==null?a.memoizedProps:i)),l&1024&&(au=!0);break;case 6:if(dt(t,e),ht(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(W){Ce(e,e.return,W)}}break;case 3:if(ir=null,i=Ht,Ht=ar(t.containerInfo),dt(t,e),Ht=i,ht(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Pl(t.containerInfo)}catch(W){Ce(e,e.return,W)}au&&(au=!1,tf(e));break;case 4:l=Ht,Ht=ar(e.stateNode.containerInfo),dt(t,e),ht(e),Ht=l;break;case 12:dt(t,e),ht(e);break;case 31:dt(t,e),ht(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zn(e,l)));break;case 13:dt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pn=we()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zn(e,l)));break;case 22:i=e.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,R=aa,N=Ke;if(aa=R||i,Ke=N||y,dt(t,e),Ke=N,aa=R,ht(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||y||aa||Ke||al(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){y=a=t;try{if(n=y.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{h=y.stateNode;var q=y.memoizedProps.style,U=q!=null&&q.hasOwnProperty("display")?q.display:null;h.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(W){Ce(y,y.return,W)}}}else if(t.tag===6){if(a===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(W){Ce(y,y.return,W)}}}else if(t.tag===18){if(a===null){y=t;try{var L=y.stateNode;i?Yf(L,!0):Yf(y.stateNode,!1)}catch(W){Ce(y,y.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zn(e,a))));break;case 19:dt(t,e),ht(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zn(e,l)));break;case 30:break;case 21:break;default:dt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(X0(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var i=a.stateNode,n=eu(e);Vn(e,n,i);break;case 5:var o=a.stateNode;a.flags&32&&(hl(o,""),a.flags&=-33);var h=eu(e);Vn(e,h,o);break;case 3:case 4:var y=a.stateNode.containerInfo,R=eu(e);tu(e,R,y);break;default:throw Error(s(161))}}catch(N){Ce(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;tf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)F0(e,t.alternate,t),t=t.sibling}function al(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ma(4,t,t.return),al(t);break;case 1:Zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&P0(t,t.return,a),al(t);break;case 27:Bi(t.stateNode);case 26:case 5:Zt(t,t.return),al(t);break;case 22:t.memoizedState===null&&al(t);break;case 30:al(t);break;default:al(t)}e=e.sibling}}function na(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,n=t,o=n.flags;switch(n.tag){case 0:case 11:case 15:na(i,n,a),Ci(4,n);break;case 1:if(na(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Ce(l,l.return,R)}if(l=n,i=l.updateQueue,i!==null){var h=l.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Oo(y[i],h)}catch(R){Ce(l,l.return,R)}}a&&o&64&&j0(n),_i(n,n.return);break;case 27:I0(n);case 26:case 5:na(i,n,a),a&&l===null&&o&4&&Y0(n),_i(n,n.return);break;case 12:na(i,n,a);break;case 31:na(i,n,a),a&&o&4&&J0(i,n);break;case 13:na(i,n,a),a&&o&4&&$0(i,n);break;case 22:n.memoizedState===null&&na(i,n,a),_i(n,n.return);break;case 30:break;default:na(i,n,a)}t=t.sibling}}function lu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mi(a))}function iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mi(e))}function Gt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)af(e,t,a,l),t=t.sibling}function af(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,a,l),i&2048&&Ci(9,t);break;case 1:Gt(e,t,a,l);break;case 3:Gt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mi(e)));break;case 12:if(i&2048){Gt(e,t,a,l),e=t.stateNode;try{var n=t.memoizedProps,o=n.id,h=n.onPostCommit;typeof h=="function"&&h(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ce(t,t.return,y)}}else Gt(e,t,a,l);break;case 31:Gt(e,t,a,l);break;case 13:Gt(e,t,a,l);break;case 23:break;case 22:n=t.stateNode,o=t.alternate,t.memoizedState!==null?n._visibility&2?Gt(e,t,a,l):Ri(e,t):n._visibility&2?Gt(e,t,a,l):(n._visibility|=2,Ll(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&lu(o,t);break;case 24:Gt(e,t,a,l),i&2048&&iu(t.alternate,t);break;default:Gt(e,t,a,l)}}function Ll(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,o=t,h=a,y=l,R=o.flags;switch(o.tag){case 0:case 11:case 15:Ll(n,o,h,y,i),Ci(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?Ll(n,o,h,y,i):Ri(n,o):(N._visibility|=2,Ll(n,o,h,y,i)),i&&R&2048&&lu(o.alternate,o);break;case 24:Ll(n,o,h,y,i),i&&R&2048&&iu(o.alternate,o);break;default:Ll(n,o,h,y,i)}t=t.sibling}}function Ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:Ri(a,l),i&2048&&lu(l.alternate,l);break;case 24:Ri(a,l),i&2048&&iu(l.alternate,l);break;default:Ri(a,l)}t=t.sibling}}var zi=8192;function Dl(e,t,a){if(e.subtreeFlags&zi)for(e=e.child;e!==null;)lf(e,t,a),e=e.sibling}function lf(e,t,a){switch(e.tag){case 26:Dl(e,t,a),e.flags&zi&&e.memoizedState!==null&&rm(a,Ht,e.memoizedState,e.memoizedProps);break;case 5:Dl(e,t,a);break;case 3:case 4:var l=Ht;Ht=ar(e.stateNode.containerInfo),Dl(e,t,a),Ht=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zi,zi=16777216,Dl(e,t,a),zi=l):Dl(e,t,a));break;default:Dl(e,t,a)}}function nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];et=l,sf(l,e)}nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rf(e),e=e.sibling}function rf(e){switch(e.tag){case 0:case 11:case 15:Ui(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Ui(e);break;case 12:Ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jn(e)):Ui(e);break;default:Ui(e)}}function jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];et=l,sf(l,e)}nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ma(8,t,t.return),jn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,jn(t));break;default:jn(t)}e=e.sibling}}function sf(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:Ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:mi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,et=l;else e:for(a=e;et!==null;){l=et;var i=l.sibling,n=l.return;if(K0(l),l===a){et=null;break e}if(i!==null){i.return=n,et=i;break e}et=n}}}var S2={getCacheForType:function(e){var t=lt(Ie),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return lt(Ie).controller.signal}},T2=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Oe=null,fe=null,he=0,Ae=0,Tt=null,wa=!1,kl=!1,nu=!1,ra=0,qe=0,Aa=0,ll=0,ru=0,Et=0,Nl=0,Oi=null,mt=null,su=!1,Pn=0,uf=0,Yn=1/0,Xn=null,Ca=null,We=0,_a=null,Bl=null,sa=0,uu=0,cu=null,cf=null,Li=0,ou=null;function Mt(){return(Ee&2)!==0&&he!==0?he&-he:z.T!==null?gu():Ec()}function of(){if(Et===0)if((he&536870912)===0||ge){var e=$i;$i<<=1,($i&3932160)===0&&($i=262144),Et=e}else Et=536870912;return e=xt.current,e!==null&&(e.flags|=32),Et}function pt(e,t,a){(e===Oe&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Hl(e,0),Ra(e,he,Et,!1)),ei(e,a),((Ee&2)===0||e!==Oe)&&(e===Oe&&((Ee&2)===0&&(ll|=a),qe===4&&Ra(e,he,Et,!1)),jt(e))}function ff(e,t,a){if((Ee&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||$l(e,t),i=l?w2(e,t):du(e,t,!0),n=l;do{if(i===0){kl&&!l&&Ra(e,t,0,!1);break}else{if(a=e.current.alternate,n&&!E2(a)){i=du(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var h=e;i=Oi;var y=h.current.memoizedState.isDehydrated;if(y&&(Hl(h,o).flags|=256),o=du(h,o,!1),o!==2){if(nu&&!y){h.errorRecoveryDisabledLanes|=n,ll|=n,i=4;break e}n=mt,mt=i,n!==null&&(mt===null?mt=n:mt.push.apply(mt,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){Hl(e,0),Ra(e,t,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ra(l,t,Et,!wa);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Pn+300-we(),10<i)){if(Ra(l,t,Et,!wa),tn(l,0,!0)!==0)break e;sa=t,l.timeoutHandle=Zf(df.bind(null,l,a,mt,Xn,su,t,Et,ll,Nl,wa,n,"Throttled",-0,0),i);break e}df(l,a,mt,Xn,su,t,Et,ll,Nl,wa,n,null,-0,0)}}break}while(!0);jt(e)}function df(e,t,a,l,i,n,o,h,y,R,N,q,U,L){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},lf(t,n,q);var W=(n&62914560)===n?Pn-we():(n&4194048)===n?uf-we():0;if(W=sm(q,W),W!==null){sa=n,e.cancelPendingCommit=W(xf.bind(null,e,t,n,a,l,i,o,h,y,N,q,null,U,L)),Ra(e,n,o,!R);return}}xf(e,t,n,a,l,i,o,h,y)}function E2(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!bt(n(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ra(e,t,a,l){t&=~ru,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var n=31-vt(i),o=1<<n;l[n]=-1,i&=~o}a!==0&&xc(e,a,t)}function In(){return(Ee&6)===0?(Di(0),!1):!0}function fu(){if(fe!==null){if(Ae===0)var e=fe.return;else e=fe,Kt=Qa=null,Cs(e),_l=null,gi=0,e=fe;for(;e!==null;)Z0(e.alternate,e),e=e.return;fe=null}}function Hl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,j2(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,fu(),Oe=e,fe=a=Qt(e.current,null),he=t,Ae=0,Tt=null,wa=!1,kl=$l(e,t),nu=!1,Nl=Et=ru=ll=Aa=qe=0,mt=Oi=null,su=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-vt(l),n=1<<i;t|=e[i],l&=~n}return ra=t,mn(),a}function hf(e,t){re=null,z.H=Mi,t===Cl||t===Tn?(t=_o(),Ae=3):t===ps?(t=_o(),Ae=4):Ae=t===js?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,fe===null&&(qe=1,Nn(e,Rt(t,e.current)))}function mf(){var e=xt.current;return e===null?!0:(he&4194048)===he?Lt===null:(he&62914560)===he||(he&536870912)!==0?e===Lt:!1}function pf(){var e=z.H;return z.H=Mi,e===null?Mi:e}function gf(){var e=z.A;return z.A=S2,e}function Qn(){qe=4,wa||(he&4194048)!==he&&xt.current!==null||(kl=!0),(Aa&134217727)===0&&(ll&134217727)===0||Oe===null||Ra(Oe,he,Et,!1)}function du(e,t,a){var l=Ee;Ee|=2;var i=pf(),n=gf();(Oe!==e||he!==t)&&(Xn=null,Hl(e,t)),t=!1;var o=qe;e:do try{if(Ae!==0&&fe!==null){var h=fe,y=Tt;switch(Ae){case 8:fu(),o=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var R=Ae;if(Ae=0,Tt=null,Gl(e,h,y,R),a&&kl){o=0;break e}break;default:R=Ae,Ae=0,Tt=null,Gl(e,h,y,R)}}M2(),o=qe;break}catch(N){hf(e,N)}while(!0);return t&&e.shellSuspendCounter++,Kt=Qa=null,Ee=l,z.H=i,z.A=n,fe===null&&(Oe=null,he=0,mn()),o}function M2(){for(;fe!==null;)vf(fe)}function w2(e,t){var a=Ee;Ee|=2;var l=pf(),i=gf();Oe!==e||he!==t?(Xn=null,Yn=we()+500,Hl(e,t)):kl=$l(e,t);e:do try{if(Ae!==0&&fe!==null){t=fe;var n=Tt;t:switch(Ae){case 1:Ae=0,Tt=null,Gl(e,t,n,1);break;case 2:case 9:if(Ao(n)){Ae=0,Tt=null,bf(t);break}t=function(){Ae!==2&&Ae!==9||Oe!==e||(Ae=7),jt(e)},n.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Ao(n)?(Ae=0,Tt=null,bf(t)):(Ae=0,Tt=null,Gl(e,t,n,7));break;case 5:var o=null;switch(fe.tag){case 26:o=fe.memoizedState;case 5:case 27:var h=fe;if(o?l1(o):h.stateNode.complete){Ae=0,Tt=null;var y=h.sibling;if(y!==null)fe=y;else{var R=h.return;R!==null?(fe=R,Fn(R)):fe=null}break t}}Ae=0,Tt=null,Gl(e,t,n,5);break;case 6:Ae=0,Tt=null,Gl(e,t,n,6);break;case 8:fu(),qe=6;break e;default:throw Error(s(462))}}A2();break}catch(N){hf(e,N)}while(!0);return Kt=Qa=null,z.H=l,z.A=i,Ee=a,fe!==null?0:(Oe=null,he=0,mn(),qe)}function A2(){for(;fe!==null&&!rl();)vf(fe)}function vf(e){var t=q0(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Fn(e):fe=t}function bf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=D0(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=D0(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Cs(t);default:Z0(a,t),t=fe=po(t,ra),t=q0(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Fn(e):fe=t}function Gl(e,t,a,l){Kt=Qa=null,Cs(t),_l=null,gi=0;var i=t.return;try{if(m2(e,i,t,a,he)){qe=1,Nn(e,Rt(a,e.current)),fe=null;return}}catch(n){if(i!==null)throw fe=i,n;qe=1,Nn(e,Rt(a,e.current)),fe=null;return}t.flags&32768?(ge||l===1?e=!0:kl||(he&536870912)!==0?e=!1:(wa=e=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),yf(t,e)):Fn(t)}function Fn(e){var t=e;do{if((t.flags&32768)!==0){yf(t,wa);return}e=t.return;var a=v2(t.alternate,t,ra);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);qe===0&&(qe=5)}function yf(e,t){do{var a=b2(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);qe=6,fe=null}function xf(e,t,a,l,i,n,o,h,y){e.cancelPendingCommit=null;do Kn();while(We!==0);if((Ee&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(n=t.lanes|t.childLanes,n|=es,nh(e,a,n,o,h,y),e===Oe&&(fe=Oe=null,he=0),Bl=t,_a=e,sa=a,uu=n,cu=i,cf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,z2(Wi,function(){return wf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,i=P.p,P.p=2,o=Ee,Ee|=4;try{y2(e,t,a)}finally{Ee=o,P.p=i,z.T=l}}We=1,Sf(),Tf(),Ef()}}function Sf(){if(We===1){We=0;var e=_a,t=Bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=P.p;P.p=2;var i=Ee;Ee|=4;try{ef(t,e);var n=Mu,o=no(e.containerInfo),h=n.focusedElem,y=n.selectionRange;if(o!==h&&h&&h.ownerDocument&&io(h.ownerDocument.documentElement,h)){if(y!==null&&Fr(h)){var R=y.start,N=y.end;if(N===void 0&&(N=R),"selectionStart"in h)h.selectionStart=R,h.selectionEnd=Math.min(N,h.value.length);else{var q=h.ownerDocument||document,U=q&&q.defaultView||window;if(U.getSelection){var L=U.getSelection(),W=h.textContent.length,le=Math.min(y.start,W),Ue=y.end===void 0?le:Math.min(y.end,W);!L.extend&&le>Ue&&(o=Ue,Ue=le,le=o);var M=lo(h,le),T=lo(h,Ue);if(M&&T&&(L.rangeCount!==1||L.anchorNode!==M.node||L.anchorOffset!==M.offset||L.focusNode!==T.node||L.focusOffset!==T.offset)){var _=q.createRange();_.setStart(M.node,M.offset),L.removeAllRanges(),le>Ue?(L.addRange(_),L.extend(T.node,T.offset)):(_.setEnd(T.node,T.offset),L.addRange(_))}}}}for(q=[],L=h;L=L.parentNode;)L.nodeType===1&&q.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<q.length;h++){var H=q[h];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}ur=!!Eu,Mu=Eu=null}finally{Ee=i,P.p=l,z.T=a}}e.current=t,We=2}}function Tf(){if(We===2){We=0;var e=_a,t=Bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=P.p;P.p=2;var i=Ee;Ee|=4;try{F0(e,t.alternate,t)}finally{Ee=i,P.p=l,z.T=a}}We=3}}function Ef(){if(We===4||We===3){We=0,Ze();var e=_a,t=Bl,a=sa,l=cf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Bl=_a=null,Mf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ca=null),zr(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=z.T,i=P.p,P.p=2,z.T=null;try{for(var n=e.onRecoverableError,o=0;o<l.length;o++){var h=l[o];n(h.value,{componentStack:h.stack})}}finally{z.T=t,P.p=i}}(sa&3)!==0&&Kn(),jt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===ou?Li++:(Li=0,ou=e):Li=0,Di(0)}}function Mf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mi(t)))}function Kn(){return Sf(),Tf(),Ef(),wf()}function wf(){if(We!==5)return!1;var e=_a,t=uu;uu=0;var a=zr(sa),l=z.T,i=P.p;try{P.p=32>a?32:a,z.T=null,a=cu,cu=null;var n=_a,o=sa;if(We=0,Bl=_a=null,sa=0,(Ee&6)!==0)throw Error(s(331));var h=Ee;if(Ee|=4,rf(n.current),af(n,n.current,o,a),Ee=h,Di(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Jl,n)}catch{}return!0}finally{P.p=i,z.T=l,Mf(e,t)}}function Af(e,t,a){t=Rt(a,t),t=Zs(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&(ei(e,2),jt(e))}function Ce(e,t,a){if(e.tag===3)Af(e,e,a);else for(;t!==null;){if(t.tag===3){Af(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ca===null||!Ca.has(l))){e=Rt(a,e),a=A0(2),l=Sa(t,a,2),l!==null&&(C0(a,l,t,e),ei(l,2),jt(l));break}}t=t.return}}function hu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new T2;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(nu=!0,i.add(a),e=C2.bind(null,e,t,a),t.then(e,e))}function C2(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(he&a)===a&&(qe===4||qe===3&&(he&62914560)===he&&300>we()-Pn?(Ee&2)===0&&Hl(e,0):ru|=a,Nl===he&&(Nl=0)),jt(e)}function Cf(e,t){t===0&&(t=yc()),e=Ya(e,t),e!==null&&(ei(e,t),jt(e))}function _2(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cf(e,a)}function R2(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Cf(e,a)}function z2(e,t){return Kl(e,t)}var Wn=null,ql=null,mu=!1,Jn=!1,pu=!1,za=0;function jt(e){e!==ql&&e.next===null&&(ql===null?Wn=ql=e:ql=ql.next=e),Jn=!0,mu||(mu=!0,O2())}function Di(e,t){if(!pu&&Jn){pu=!0;do for(var a=!1,l=Wn;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var o=l.suspendedLanes,h=l.pingedLanes;n=(1<<31-vt(42|e)+1)-1,n&=i&~(o&~h),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,Uf(l,n))}else n=he,n=tn(l,l===Oe?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||$l(l,n)||(a=!0,Uf(l,n));l=l.next}while(a);pu=!1}}function U2(){_f()}function _f(){Jn=mu=!1;var e=0;za!==0&&Z2()&&(e=za);for(var t=we(),a=null,l=Wn;l!==null;){var i=l.next,n=Rf(l,t);n===0?(l.next=null,a===null?Wn=i:a.next=i,i===null&&(ql=a)):(a=l,(e!==0||(n&3)!==0)&&(Jn=!0)),l=i}We!==0&&We!==5||Di(e),za!==0&&(za=0)}function Rf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var o=31-vt(n),h=1<<o,y=i[o];y===-1?((h&a)===0||(h&l)!==0)&&(i[o]=ih(h,t)):y<=t&&(e.expiredLanes|=h),n&=~h}if(t=Oe,a=he,a=tn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Wl(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$l(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Wl(l),zr(a)){case 2:case 8:a=vc;break;case 32:a=Wi;break;case 268435456:a=bc;break;default:a=Wi}return l=zf.bind(null,e),a=Kl(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Wl(l),e.callbackPriority=2,e.callbackNode=null,2}function zf(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kn()&&e.callbackNode!==a)return null;var l=he;return l=tn(e,e===Oe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ff(e,l,t),Rf(e,we()),e.callbackNode!=null&&e.callbackNode===a?zf.bind(null,e):null)}function Uf(e,t){if(Kn())return null;ff(e,t,!0)}function O2(){P2(function(){(Ee&6)!==0?Kl(gc,U2):_f()})}function gu(){if(za===0){var e=wl;e===0&&(e=Ji,Ji<<=1,(Ji&261888)===0&&(Ji=256)),za=e}return za}function Of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rn(""+e)}function Lf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function L2(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var n=Of((i[ct]||null).action),o=l.submitter;o&&(t=(t=o[ct]||null)?Of(t.formAction):o.getAttribute("formAction"),t!==null&&(n=t,o=null));var h=new on("action","action",null,l,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(za!==0){var y=o?Lf(i,o):new FormData(i);Ns(a,{pending:!0,data:y,method:i.method,action:n},null,y)}}else typeof n=="function"&&(h.preventDefault(),y=o?Lf(i,o):new FormData(i),Ns(a,{pending:!0,data:y,method:i.method,action:n},n,y))},currentTarget:i}]})}}for(var vu=0;vu<$r.length;vu++){var bu=$r[vu],D2=bu.toLowerCase(),k2=bu[0].toUpperCase()+bu.slice(1);Bt(D2,"on"+k2)}Bt(uo,"onAnimationEnd"),Bt(co,"onAnimationIteration"),Bt(oo,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Wh,"onTransitionRun"),Bt(Jh,"onTransitionStart"),Bt($h,"onTransitionCancel"),Bt(fo,"onTransitionEnd"),fl("onMouseEnter",["mouseout","mouseover"]),fl("onMouseLeave",["mouseout","mouseover"]),fl("onPointerEnter",["pointerout","pointerover"]),fl("onPointerLeave",["pointerout","pointerover"]),Va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Va("onBeforeInput",["compositionend","keypress","textInput","paste"]),Va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ki));function Df(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var n=void 0;if(t)for(var o=l.length-1;0<=o;o--){var h=l[o],y=h.instance,R=h.currentTarget;if(h=h.listener,y!==n&&i.isPropagationStopped())break e;n=h,i.currentTarget=R;try{n(i)}catch(N){hn(N)}i.currentTarget=null,n=y}else for(o=0;o<l.length;o++){if(h=l[o],y=h.instance,R=h.currentTarget,h=h.listener,y!==n&&i.isPropagationStopped())break e;n=h,i.currentTarget=R;try{n(i)}catch(N){hn(N)}i.currentTarget=null,n=y}}}}function de(e,t){var a=t[Ur];a===void 0&&(a=t[Ur]=new Set);var l=e+"__bubble";a.has(l)||(kf(t,e,2,!1),a.add(l))}function yu(e,t,a){var l=0;t&&(l|=4),kf(a,e,l,t)}var $n="_reactListening"+Math.random().toString(36).slice(2);function xu(e){if(!e[$n]){e[$n]=!0,Ac.forEach(function(a){a!=="selectionchange"&&(N2.has(a)||yu(a,!1,e),yu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$n]||(t[$n]=!0,yu("selectionchange",!1,t))}}function kf(e,t,a,l){switch(o1(t)){case 2:var i=om;break;case 8:i=fm;break;default:i=ku}a=i.bind(null,t,a,e),i=void 0,!qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Su(e,t,a,l,i){var n=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var h=l.stateNode.containerInfo;if(h===i)break;if(o===4)for(o=l.return;o!==null;){var y=o.tag;if((y===3||y===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;h!==null;){if(o=ul(h),o===null)return;if(y=o.tag,y===5||y===6||y===26||y===27){l=n=o;continue e}h=h.parentNode}}l=l.return}Hc(function(){var R=n,N=Hr(a),q=[];e:{var U=ho.get(e);if(U!==void 0){var L=on,W=e;switch(e){case"keypress":if(un(a)===0)break e;case"keydown":case"keyup":L=Rh;break;case"focusin":W="focus",L=Pr;break;case"focusout":W="blur",L=Pr;break;case"beforeblur":case"afterblur":L=Pr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Oh;break;case uo:case co:case oo:L=xh;break;case fo:L=Dh;break;case"scroll":case"scrollend":L=ph;break;case"wheel":L=Nh;break;case"copy":case"cut":case"paste":L=Th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=jc;break;case"toggle":case"beforetoggle":L=Hh}var le=(t&4)!==0,Ue=!le&&(e==="scroll"||e==="scrollend"),M=le?U!==null?U+"Capture":null:U;le=[];for(var T=R,_;T!==null;){var H=T;if(_=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||_===null||M===null||(H=li(T,M),H!=null&&le.push(Ni(T,H,_))),Ue)break;T=T.return}0<le.length&&(U=new L(U,W,null,a,N),q.push({event:U,listeners:le}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",U&&a!==Br&&(W=a.relatedTarget||a.fromElement)&&(ul(W)||W[sl]))break e;if((L||U)&&(U=N.window===N?N:(U=N.ownerDocument)?U.defaultView||U.parentWindow:window,L?(W=a.relatedTarget||a.toElement,L=R,W=W?ul(W):null,W!==null&&(Ue=d(W),le=W.tag,W!==Ue||le!==5&&le!==27&&le!==6)&&(W=null)):(L=null,W=R),L!==W)){if(le=Vc,H="onMouseLeave",M="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(le=jc,H="onPointerLeave",M="onPointerEnter",T="pointer"),Ue=L==null?U:ai(L),_=W==null?U:ai(W),U=new le(H,T+"leave",L,a,N),U.target=Ue,U.relatedTarget=_,H=null,ul(N)===R&&(le=new le(M,T+"enter",W,a,N),le.target=_,le.relatedTarget=Ue,H=le),Ue=H,L&&W)t:{for(le=B2,M=L,T=W,_=0,H=M;H;H=le(H))_++;H=0;for(var ee=T;ee;ee=le(ee))H++;for(;0<_-H;)M=le(M),_--;for(;0<H-_;)T=le(T),H--;for(;_--;){if(M===T||T!==null&&M===T.alternate){le=M;break t}M=le(M),T=le(T)}le=null}else le=null;L!==null&&Nf(q,U,L,le,!1),W!==null&&Ue!==null&&Nf(q,Ue,W,le,!0)}}e:{if(U=R?ai(R):window,L=U.nodeName&&U.nodeName.toLowerCase(),L==="select"||L==="input"&&U.type==="file")var ye=Wc;else if(Fc(U))if(Jc)ye=Qh;else{ye=Xh;var J=Yh}else L=U.nodeName,!L||L.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?R&&Nr(R.elementType)&&(ye=Wc):ye=Ih;if(ye&&(ye=ye(e,R))){Kc(q,ye,a,N);break e}J&&J(e,U,R),e==="focusout"&&R&&U.type==="number"&&R.memoizedProps.value!=null&&kr(U,"number",U.value)}switch(J=R?ai(R):window,e){case"focusin":(Fc(J)||J.contentEditable==="true")&&(vl=J,Kr=R,fi=null);break;case"focusout":fi=Kr=vl=null;break;case"mousedown":Wr=!0;break;case"contextmenu":case"mouseup":case"dragend":Wr=!1,ro(q,a,N);break;case"selectionchange":if(Kh)break;case"keydown":case"keyup":ro(q,a,N)}var se;if(Xr)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else gl?Ic(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Pc&&a.locale!=="ko"&&(gl||me!=="onCompositionStart"?me==="onCompositionEnd"&&gl&&(se=Gc()):(ma=N,Vr="value"in ma?ma.value:ma.textContent,gl=!0)),J=er(R,me),0<J.length&&(me=new Zc(me,e,null,a,N),q.push({event:me,listeners:J}),se?me.data=se:(se=Qc(a),se!==null&&(me.data=se)))),(se=qh?Vh(e,a):Zh(e,a))&&(me=er(R,"onBeforeInput"),0<me.length&&(J=new Zc("onBeforeInput","beforeinput",null,a,N),q.push({event:J,listeners:me}),J.data=se)),L2(q,e,R,a,N)}Df(q,t)})}function Ni(e,t,a){return{instance:e,listener:t,currentTarget:a}}function er(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=li(e,a),i!=null&&l.unshift(Ni(e,i,n)),i=li(e,t),i!=null&&l.push(Ni(e,i,n))),e.tag===3)return l;e=e.return}return[]}function B2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nf(e,t,a,l,i){for(var n=t._reactName,o=[];a!==null&&a!==l;){var h=a,y=h.alternate,R=h.stateNode;if(h=h.tag,y!==null&&y===l)break;h!==5&&h!==26&&h!==27||R===null||(y=R,i?(R=li(a,n),R!=null&&o.unshift(Ni(a,R,y))):i||(R=li(a,n),R!=null&&o.push(Ni(a,R,y)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var H2=/\r\n?/g,G2=/\u0000|\uFFFD/g;function Bf(e){return(typeof e=="string"?e:""+e).replace(H2,`
`).replace(G2,"")}function Hf(e,t){return t=Bf(t),Bf(e)===t}function ze(e,t,a,l,i,n){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||hl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&hl(e,""+l);break;case"className":ln(e,"class",l);break;case"tabIndex":ln(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ln(e,a,l);break;case"style":Nc(e,l,n);break;case"data":if(t!=="object"){ln(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=rn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",i.name,i,null),ze(e,t,"formEncType",i.formEncType,i,null),ze(e,t,"formMethod",i.formMethod,i,null),ze(e,t,"formTarget",i.formTarget,i,null)):(ze(e,t,"encType",i.encType,i,null),ze(e,t,"method",i.method,i,null),ze(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=rn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=rn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":de("beforetoggle",e),de("toggle",e),an(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":an(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hh.get(a)||a,an(e,a,l))}}function Tu(e,t,a,l,i,n){switch(a){case"style":Nc(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?hl(e,l):(typeof l=="number"||typeof l=="bigint")&&hl(e,""+l);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),n=e[ct]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):an(e,a,l)}}}function nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var o=a[n];if(o!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,n,o,a,null)}}i&&ze(e,t,"srcSet",a.srcSet,a,null),l&&ze(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var h=n=o=i=null,y=null,R=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":i=N;break;case"type":o=N;break;case"checked":y=N;break;case"defaultChecked":R=N;break;case"value":n=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:ze(e,t,l,N,a,null)}}Oc(e,n,h,y,R,o,i,!1);return;case"select":de("invalid",e),l=o=n=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":n=h;break;case"defaultValue":o=h;break;case"multiple":l=h;default:ze(e,t,i,h,a,null)}t=n,a=o,e.multiple=!!l,t!=null?dl(e,!!l,t,!1):a!=null&&dl(e,!!l,a,!0);return;case"textarea":de("invalid",e),n=i=l=null;for(o in a)if(a.hasOwnProperty(o)&&(h=a[o],h!=null))switch(o){case"value":l=h;break;case"defaultValue":i=h;break;case"children":n=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:ze(e,t,o,h,a,null)}Dc(e,l,i,n);return;case"option":for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!=null)&&(y==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ze(e,t,y,l,a,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(l=0;l<ki.length;l++)de(ki[l],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,R,l,a,null)}return;default:if(Nr(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&Tu(e,t,N,l,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null&&ze(e,t,h,l,a,null))}function q2(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,h=null,y=null,R=null,N=null;for(L in a){var q=a[L];if(a.hasOwnProperty(L)&&q!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":y=q;default:l.hasOwnProperty(L)||ze(e,t,L,null,l,q)}}for(var U in l){var L=l[U];if(q=a[U],l.hasOwnProperty(U)&&(L!=null||q!=null))switch(U){case"type":n=L;break;case"name":i=L;break;case"checked":R=L;break;case"defaultChecked":N=L;break;case"value":o=L;break;case"defaultValue":h=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:L!==q&&ze(e,t,U,L,l,q)}}Dr(e,o,h,y,R,N,n,i);return;case"select":L=o=h=U=null;for(n in a)if(y=a[n],a.hasOwnProperty(n)&&y!=null)switch(n){case"value":break;case"multiple":L=y;default:l.hasOwnProperty(n)||ze(e,t,n,null,l,y)}for(i in l)if(n=l[i],y=a[i],l.hasOwnProperty(i)&&(n!=null||y!=null))switch(i){case"value":U=n;break;case"defaultValue":h=n;break;case"multiple":o=n;default:n!==y&&ze(e,t,i,n,l,y)}t=h,a=o,l=L,U!=null?dl(e,!!a,U,!1):!!l!=!!a&&(t!=null?dl(e,!!a,t,!0):dl(e,!!a,a?[]:"",!1));return;case"textarea":L=U=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:ze(e,t,h,null,l,i)}for(o in l)if(i=l[o],n=a[o],l.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":U=i;break;case"defaultValue":L=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==n&&ze(e,t,o,i,l,n)}Lc(e,U,L);return;case"option":for(var W in a)U=a[W],a.hasOwnProperty(W)&&U!=null&&!l.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:ze(e,t,W,null,l,U));for(y in l)U=l[y],L=a[y],l.hasOwnProperty(y)&&U!==L&&(U!=null||L!=null)&&(y==="selected"?e.selected=U&&typeof U!="function"&&typeof U!="symbol":ze(e,t,y,U,l,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)U=a[le],a.hasOwnProperty(le)&&U!=null&&!l.hasOwnProperty(le)&&ze(e,t,le,null,l,U);for(R in l)if(U=l[R],L=a[R],l.hasOwnProperty(R)&&U!==L&&(U!=null||L!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:ze(e,t,R,U,l,L)}return;default:if(Nr(t)){for(var Ue in a)U=a[Ue],a.hasOwnProperty(Ue)&&U!==void 0&&!l.hasOwnProperty(Ue)&&Tu(e,t,Ue,void 0,l,U);for(N in l)U=l[N],L=a[N],!l.hasOwnProperty(N)||U===L||U===void 0&&L===void 0||Tu(e,t,N,U,l,L);return}}for(var M in a)U=a[M],a.hasOwnProperty(M)&&U!=null&&!l.hasOwnProperty(M)&&ze(e,t,M,null,l,U);for(q in l)U=l[q],L=a[q],!l.hasOwnProperty(q)||U===L||U==null&&L==null||ze(e,t,q,U,l,L)}function Gf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function V2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,o=i.initiatorType,h=i.duration;if(n&&h&&Gf(o)){for(o=0,h=i.responseEnd,l+=1;l<a.length;l++){var y=a[l],R=y.startTime;if(R>h)break;var N=y.transferSize,q=y.initiatorType;N&&Gf(q)&&(y=y.responseEnd,o+=N*(y<h?1:(h-R)/(y-R)))}if(--l,t+=8*(n+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eu=null,Mu=null;function tr(e){return e.nodeType===9?e:e.ownerDocument}function qf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Au=null;function Z2(){var e=window.event;return e&&e.type==="popstate"?e===Au?!1:(Au=e,!0):(Au=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,j2=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,P2=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Y2)}:Zf;function Y2(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Pf(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),Pl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Bi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bi(a);for(var n=a.firstChild;n;){var o=n.nextSibling,h=n.nodeName;n[ti]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=o}}else a==="body"&&Bi(e.ownerDocument.body);a=i}while(a);Pl(t)}function Yf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Cu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cu(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function X2(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ti])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function I2(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Dt(e.nextSibling),e===null))return null;return e}function Xf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Dt(e.nextSibling),e===null))return null;return e}function _u(e){return e.data==="$?"||e.data==="$~"}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q2(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zu=null;function If(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Dt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ff(e,t,a){switch(t=tr(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Or(e)}var kt=new Map,Kf=new Set;function ar(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=P.d;P.d={f:F2,r:K2,D:W2,C:J2,L:$2,m:em,X:am,S:tm,M:lm};function F2(){var e=ua.f(),t=In();return e||t}function K2(e){var t=cl(e);t!==null&&t.tag===5&&t.type==="form"?d0(t):ua.r(e)}var Vl=typeof document>"u"?null:document;function Wf(e,t,a){var l=Vl;if(l&&typeof t=="string"&&t){var i=Ct(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Kf.has(i)||(Kf.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),nt(t,"link",e),$e(t),l.head.appendChild(t)))}}function W2(e){ua.D(e),Wf("dns-prefetch",e,null)}function J2(e,t){ua.C(e,t),Wf("preconnect",e,t)}function $2(e,t,a){ua.L(e,t,a);var l=Vl;if(l&&e&&t){var i='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ct(a.imageSizes)+'"]')):i+='[href="'+Ct(e)+'"]';var n=i;switch(t){case"style":n=Zl(e);break;case"script":n=jl(e)}kt.has(n)||(e=g({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),kt.set(n,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Hi(n))||t==="script"&&l.querySelector(Gi(n))||(t=l.createElement("link"),nt(t,"link",e),$e(t),l.head.appendChild(t)))}}function em(e,t){ua.m(e,t);var a=Vl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ct(l)+'"][href="'+Ct(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=jl(e)}if(!kt.has(n)&&(e=g({rel:"modulepreload",href:e},t),kt.set(n,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Gi(n)))return}l=a.createElement("link"),nt(l,"link",e),$e(l),a.head.appendChild(l)}}}function tm(e,t,a){ua.S(e,t,a);var l=Vl;if(l&&e){var i=ol(l).hoistableStyles,n=Zl(e);t=t||"default";var o=i.get(n);if(!o){var h={loading:0,preload:null};if(o=l.querySelector(Hi(n)))h.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},a),(a=kt.get(n))&&Uu(e,a);var y=o=l.createElement("link");$e(y),nt(y,"link",e),y._p=new Promise(function(R,N){y.onload=R,y.onerror=N}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,lr(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:h},i.set(n,o)}}}function am(e,t){ua.X(e,t);var a=Vl;if(a&&e){var l=ol(a).hoistableScripts,i=jl(e),n=l.get(i);n||(n=a.querySelector(Gi(i)),n||(e=g({src:e,async:!0},t),(t=kt.get(i))&&Ou(e,t),n=a.createElement("script"),$e(n),nt(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function lm(e,t){ua.M(e,t);var a=Vl;if(a&&e){var l=ol(a).hoistableScripts,i=jl(e),n=l.get(i);n||(n=a.querySelector(Gi(i)),n||(e=g({src:e,async:!0,type:"module"},t),(t=kt.get(i))&&Ou(e,t),n=a.createElement("script"),$e(n),nt(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Jf(e,t,a,l){var i=(i=ce.current)?ar(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Zl(a.href),a=ol(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zl(a.href);var n=ol(i).hoistableStyles,o=n.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,o),(n=i.querySelector(Hi(e)))&&!n._p&&(o.instance=n,o.state.loading=5),kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kt.set(e,a),n||im(i,e,a,o.state))),t&&l===null)throw Error(s(528,""));return o}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jl(a),a=ol(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Zl(e){return'href="'+Ct(e)+'"'}function Hi(e){return'link[rel="stylesheet"]['+e+"]"}function $f(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function im(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),nt(t,"link",a),$e(t),e.head.appendChild(t))}function jl(e){return'[src="'+Ct(e)+'"]'}function Gi(e){return"script[async]"+e}function e1(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ct(a.href)+'"]');if(l)return t.instance=l,$e(l),l;var i=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),nt(l,"style",i),lr(l,a.precedence,e),t.instance=l;case"stylesheet":i=Zl(a.href);var n=e.querySelector(Hi(i));if(n)return t.state.loading|=4,t.instance=n,$e(n),n;l=$f(a),(i=kt.get(i))&&Uu(l,i),n=(e.ownerDocument||e).createElement("link"),$e(n);var o=n;return o._p=new Promise(function(h,y){o.onload=h,o.onerror=y}),nt(n,"link",l),t.state.loading|=4,lr(n,a.precedence,e),t.instance=n;case"script":return n=jl(a.src),(i=e.querySelector(Gi(n)))?(t.instance=i,$e(i),i):(l=a,(i=kt.get(n))&&(l=g({},a),Ou(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),$e(i),nt(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,lr(l,a.precedence,e));return t.instance}function lr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,o=0;o<l.length;o++){var h=l[o];if(h.dataset.precedence===t)n=h;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ou(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ir=null;function t1(e,t,a){if(ir===null){var l=new Map,i=ir=new Map;i.set(a,l)}else i=ir,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var n=a[i];if(!(n[ti]||n[tt]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(t)||"";o=e+o;var h=l.get(o);h?h.push(n):l.set(o,[n])}}return l}function a1(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function nm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function l1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rm(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Zl(l.href),n=t.querySelector(Hi(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=n,$e(n);return}n=t.ownerDocument||t,l=$f(l),(i=kt.get(i))&&Uu(l,i),n=n.createElement("link"),$e(n);var o=n;o._p=new Promise(function(h,y){o.onload=h,o.onerror=y}),nt(n,"link",l),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Lu=0;function sm(e,t){return e.stylesheets&&e.count===0&&sr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&sr(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&Lu===0&&(Lu=62500*V2());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sr(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Lu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function nr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rr=null;function sr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rr=new Map,t.forEach(um,e),rr=null,nr.call(e))}function um(e,t){if(!(t.state.loading&4)){var a=rr.get(e);if(a)var l=a.get(null);else{a=new Map,rr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}i=t.instance,o=i.getAttribute("data-precedence"),n=a.get(o)||l,n===l&&a.set(null,i),a.set(o,i),this.count++,l=nr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var qi={$$typeof:Z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function cm(e,t,a,l,i,n,o,h,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_r(0),this.hiddenUpdates=_r(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function i1(e,t,a,l,i,n,o,h,y,R,N,q){return e=new cm(e,t,a,o,y,R,N,q,h),t=1,n===!0&&(t|=24),n=yt(3,null,null,t),e.current=n,n.stateNode=e,t=ds(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:t},gs(n),e}function n1(e){return e?(e=xl,e):xl}function r1(e,t,a,l,i,n){i=n1(i),l.context===null?l.context=i:l.pendingContext=i,l=xa(t),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=Sa(e,l,t),a!==null&&(pt(a,e,t),bi(a,e,t))}function s1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Du(e,t){s1(e,t),(e=e.alternate)&&s1(e,t)}function u1(e){if(e.tag===13||e.tag===31){var t=Ya(e,67108864);t!==null&&pt(t,e,67108864),Du(e,67108864)}}function c1(e){if(e.tag===13||e.tag===31){var t=Mt();t=Rr(t);var a=Ya(e,t);a!==null&&pt(a,e,t),Du(e,t)}}var ur=!0;function om(e,t,a,l){var i=z.T;z.T=null;var n=P.p;try{P.p=2,ku(e,t,a,l)}finally{P.p=n,z.T=i}}function fm(e,t,a,l){var i=z.T;z.T=null;var n=P.p;try{P.p=8,ku(e,t,a,l)}finally{P.p=n,z.T=i}}function ku(e,t,a,l){if(ur){var i=Nu(l);if(i===null)Su(e,t,l,cr,a),f1(e,l);else if(hm(i,e,t,a,l))l.stopPropagation();else if(f1(e,l),t&4&&-1<dm.indexOf(e)){for(;i!==null;){var n=cl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=qa(n.pendingLanes);if(o!==0){var h=n;for(h.pendingLanes|=2,h.entangledLanes|=2;o;){var y=1<<31-vt(o);h.entanglements[1]|=y,o&=~y}jt(n),(Ee&6)===0&&(Yn=we()+500,Di(0))}}break;case 31:case 13:h=Ya(n,2),h!==null&&pt(h,n,2),In(),Du(n,2)}if(n=Nu(l),n===null&&Su(e,t,l,cr,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else Su(e,t,l,null,a)}}function Nu(e){return e=Hr(e),Bu(e)}var cr=null;function Bu(e){if(cr=null,e=ul(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cr=e,null}function o1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wd()){case gc:return 2;case vc:return 8;case Wi:case Jd:return 32;case bc:return 268435456;default:return 32}default:return 32}}var Hu=!1,Oa=null,La=null,Da=null,Vi=new Map,Zi=new Map,ka=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f1(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(t.pointerId)}}function ji(e,t,a,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},t!==null&&(t=cl(t),t!==null&&u1(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hm(e,t,a,l,i){switch(t){case"focusin":return Oa=ji(Oa,e,t,a,l,i),!0;case"dragenter":return La=ji(La,e,t,a,l,i),!0;case"mouseover":return Da=ji(Da,e,t,a,l,i),!0;case"pointerover":var n=i.pointerId;return Vi.set(n,ji(Vi.get(n)||null,e,t,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,Zi.set(n,ji(Zi.get(n)||null,e,t,a,l,i)),!0}return!1}function d1(e){var t=ul(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Mc(e.priority,function(){c1(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,Mc(e.priority,function(){c1(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Nu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Br=l,a.target.dispatchEvent(l),Br=null}else return t=cl(a),t!==null&&u1(t),e.blockedOn=a,!1;t.shift()}return!0}function h1(e,t,a){or(e)&&a.delete(t)}function mm(){Hu=!1,Oa!==null&&or(Oa)&&(Oa=null),La!==null&&or(La)&&(La=null),Da!==null&&or(Da)&&(Da=null),Vi.forEach(h1),Zi.forEach(h1)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Hu||(Hu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,mm)))}var dr=null;function m1(e){dr!==e&&(dr=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){dr===e&&(dr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(Bu(l||a)===null)continue;break}var n=cl(a);n!==null&&(e.splice(t,3),t-=3,Ns(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Pl(e){function t(y){return fr(y,e)}Oa!==null&&fr(Oa,e),La!==null&&fr(La,e),Da!==null&&fr(Da,e),Vi.forEach(t),Zi.forEach(t);for(var a=0;a<ka.length;a++){var l=ka[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)d1(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],o=i[ct]||null;if(typeof n=="function")o||m1(a);else if(o){var h=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[ct]||null)h=o.formAction;else if(Bu(i)!==null)continue}else h=o.action;typeof h=="function"?a[l+1]=h:(a.splice(l,3),l-=3),m1(a)}}}function p1(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Gu(e){this._internalRoot=e}hr.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=Mt();r1(a,l,e,t,null,null)},hr.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;r1(e.current,2,null,e,null,null),In(),t[sl]=null}};function hr(e){this._internalRoot=e}hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ec();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ka.length&&t!==0&&t<ka[a].priority;a++);ka.splice(a,0,e),a===0&&d1(e)}};var g1=r.version;if(g1!=="19.2.7")throw Error(s(527,g1,"19.2.7"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var pm={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mr.isDisabled&&mr.supportsFiber)try{Jl=mr.inject(pm),gt=mr}catch{}}return Yi.createRoot=function(e,t){if(!f(e))throw Error(s(299));var a=!1,l="",i=T0,n=E0,o=M0;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=i1(e,1,!1,null,null,a,l,null,i,n,o,p1),e[sl]=t.current,xu(e),new Gu(t)},Yi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(s(299));var l=!1,i="",n=T0,o=E0,h=M0,y=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(y=a.formState)),t=i1(e,1,!0,t,a??null,l,i,y,n,o,h,p1),t.context=n1(null),a=t.current,l=Mt(),l=Rr(l),i=xa(l),i.callback=null,Sa(a,i,l),a=l,t.current.lanes=a,ei(t,a),jt(t),e[sl]=t.current,xu(e),new hr(t)},Yi.version="19.2.7",Yi}var A1;function Am(){if(A1)return Vu.exports;A1=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),Vu.exports=wm(),Vu.exports}var Cm=Am(),m=uc();const Xi=bm(m),td=vm({__proto__:null,default:Xi},[m]),_m=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M204.41,51.63a108,108,0,1,0,0,152.74A107.38,107.38,0,0,0,204.41,51.63Zm-17,17A83.85,83.85,0,0,1,196.26,79L169,111.09l-23.3-65.21A83.52,83.52,0,0,1,187.43,68.6Zm-118.85,0a83.44,83.44,0,0,1,51.11-24.2l14.16,39.65L65.71,71.61C66.64,70.59,67.59,69.59,68.58,68.6ZM48,153.7a84.48,84.48,0,0,1,3.4-60.3L92.84,101Zm20.55,33.7A83.94,83.94,0,0,1,59.74,177L87,144.91l23.3,65.21A83.53,83.53,0,0,1,68.58,187.4Zm36.36-63.61,15.18-17.85,23.06,4.21,7.88,22.06-15.17,17.85-23.06-4.21Zm82.49,63.61a83.49,83.49,0,0,1-51.11,24.2L122.15,172l68.14,12.44C189.36,185.41,188.41,186.41,187.43,187.4ZM163.16,155,208,102.3a84.43,84.43,0,0,1-3.41,60.3Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M195.88,60.12a96,96,0,1,0,0,135.76A96,96,0,0,0,195.88,60.12Zm-55.34,103h0l-36.68-6.69h0L91.32,121.3l24.14-28.41h0l36.68,6.69,12.54,35.12Z",opacity:"0.2"}),m.createElement("path",{d:"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,65.78a88.18,88.18,0,0,1,11,13.48L167.55,119,139.63,40.78A87.34,87.34,0,0,1,190.23,65.78ZM155.59,133l-18.16,21.37-27.59-5L100.41,123l18.16-21.37,27.59,5ZM65.77,65.78a87.34,87.34,0,0,1,56.66-25.59l17.51,49L58.3,74.32A88,88,0,0,1,65.77,65.78ZM46.65,161.54a88.41,88.41,0,0,1,2.53-72.62l51.21,9.35Zm19.12,28.68a88.18,88.18,0,0,1-11-13.48L88.45,137l27.92,78.18A87.34,87.34,0,0,1,65.77,190.22Zm124.46,0a87.34,87.34,0,0,1-56.66,25.59l-17.51-49,81.64,14.91A88,88,0,0,1,190.23,190.22Zm-34.62-32.49,53.74-63.27a88.41,88.41,0,0,1-2.53,72.62Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M232,128A104,104,0,0,0,54.46,54.46,104,104,0,0,0,128,232h.09A104,104,0,0,0,232,128ZM49.18,88.92l51.21,9.35L46.65,161.53A88.39,88.39,0,0,1,49.18,88.92Zm160.17,5.54a88.41,88.41,0,0,1-2.53,72.62l-51.21-9.35Zm-8.08-15.2L167.55,119,139.63,40.78a87.38,87.38,0,0,1,50.6,25A88.74,88.74,0,0,1,201.27,79.26ZM122.43,40.19l17.51,49L58.3,74.32a89.28,89.28,0,0,1,7.47-8.55A87.37,87.37,0,0,1,122.43,40.19ZM54.73,176.74,88.45,137l27.92,78.18a88,88,0,0,1-61.64-38.48Zm78.84,39.06-17.51-49L139.14,171h0l58.52,10.69a87.5,87.5,0,0,1-64.13,34.12Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M200.12,55.88A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.88Zm-102,66.67,19.65-23.14,29.86,5.46,10.21,28.58-19.65,23.14-29.86-5.46ZM209.93,90.69a90.24,90.24,0,0,1-2,78.63l-56.14-10.24Zm-6.16-11.28-36.94,43.48L136.66,38.42a89.31,89.31,0,0,1,55,25.94A91.33,91.33,0,0,1,203.77,79.41Zm-139.41-15A89.37,89.37,0,0,1,123.81,38.1L143,91.82,54.75,75.71A91.2,91.2,0,0,1,64.36,64.36ZM48,86.68l56.14,10.24L46.07,165.31a90.24,90.24,0,0,1,2-78.63Zm4.21,89.91,36.94-43.48,30.17,84.47a89.31,89.31,0,0,1-55-25.94A91.33,91.33,0,0,1,52.23,176.59Zm139.41,15a89.32,89.32,0,0,1-59.45,26.26L113,164.18l88.24,16.11A91.2,91.2,0,0,1,191.64,191.64Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,65.78a88.18,88.18,0,0,1,11,13.48L167.55,119,139.63,40.78A87.34,87.34,0,0,1,190.23,65.78ZM155.59,133l-18.16,21.37-27.59-5L100.41,123l18.16-21.37,27.59,5ZM65.77,65.78a87.34,87.34,0,0,1,56.66-25.59l17.51,49L58.3,74.32A88,88,0,0,1,65.77,65.78ZM46.65,161.54a88.41,88.41,0,0,1,2.53-72.62l51.21,9.35Zm19.12,28.68a88.18,88.18,0,0,1-11-13.48L88.45,137l27.92,78.18A87.34,87.34,0,0,1,65.77,190.22Zm124.46,0a87.34,87.34,0,0,1-56.66,25.59l-17.51-49,81.64,14.91A88,88,0,0,1,190.23,190.22Zm-34.62-32.49,53.74-63.27a88.41,88.41,0,0,1-2.53,72.62Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm10.37,114.27-61-11.14L210.4,87a92.26,92.26,0,0,1-1.32,84.52ZM95.87,122.13,117,97.24l32.14,5.86,11,30.77L139,158.76l-32.14-5.86ZM206.24,79.58l-40.13,47.25L133.75,36.2a92.09,92.09,0,0,1,72.49,43.38ZM63,63a91.31,91.31,0,0,1,62.26-26.88L146,94.41,51.32,77.11A92.94,92.94,0,0,1,63,63Zm-16,21.49,61,11.14L45.6,169a92.26,92.26,0,0,1,1.32-84.52Zm2.84,92,40.13-47.25,32.36,90.63a92.09,92.09,0,0,1-72.49-43.38Zm143.29,16.63a91.31,91.31,0,0,1-62.26,26.88L110,161.59l94.72,17.3A92.94,92.94,0,0,1,193.05,193.05Z"}))]]),Rm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",opacity:"0.2"}),m.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40,40,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,128,164Z"}))]]),zm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),m.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),Um=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M148,96V48a12,12,0,0,1,24,0V84h36a12,12,0,0,1,0,24H160A12,12,0,0,1,148,96ZM96,148H48a12,12,0,0,0,0,24H84v36a12,12,0,0,0,24,0V160A12,12,0,0,0,96,148Zm112,0H160a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V172h36a12,12,0,0,0,0-24ZM96,36A12,12,0,0,0,84,48V84H48a12,12,0,0,0,0,24H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,64V192a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192A16,16,0,0,1,208,64Z",opacity:"0.2"}),m.createElement("path",{d:"M152,96V48a8,8,0,0,1,16,0V88h40a8,8,0,0,1,0,16H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0,0,16H88v40a8,8,0,0,0,16,0V160A8,8,0,0,0,96,152Zm112,0H160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168h40a8,8,0,0,0,0-16ZM96,40a8,8,0,0,0-8,8V88H48a8,8,0,0,0,0,16H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M152,96V48a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,208,104H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0-5.66,13.66l48,48A8,8,0,0,0,104,208V160A8,8,0,0,0,96,152ZM99.06,40.61a8,8,0,0,0-8.72,1.73l-48,48A8,8,0,0,0,48,104H96a8,8,0,0,0,8-8V48A8,8,0,0,0,99.06,40.61ZM208,152H160a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,208,152Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M154,96V48a6,6,0,0,1,12,0V90h42a6,6,0,0,1,0,12H160A6,6,0,0,1,154,96ZM96,154H48a6,6,0,0,0,0,12H90v42a6,6,0,0,0,12,0V160A6,6,0,0,0,96,154Zm112,0H160a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V166h42a6,6,0,0,0,0-12ZM96,42a6,6,0,0,0-6,6V90H48a6,6,0,0,0,0,12H96a6,6,0,0,0,6-6V48A6,6,0,0,0,96,42Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M152,96V48a8,8,0,0,1,16,0V88h40a8,8,0,0,1,0,16H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0,0,16H88v40a8,8,0,0,0,16,0V160A8,8,0,0,0,96,152Zm112,0H160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168h40a8,8,0,0,0,0-16ZM96,40a8,8,0,0,0-8,8V88H48a8,8,0,0,0,0,16H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M156,96V48a4,4,0,0,1,8,0V92h44a4,4,0,0,1,0,8H160A4,4,0,0,1,156,96ZM96,156H48a4,4,0,0,0,0,8H92v44a4,4,0,0,0,8,0V160A4,4,0,0,0,96,156Zm112,0H160a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V164h44a4,4,0,0,0,0-8ZM96,44a4,4,0,0,0-4,4V92H48a4,4,0,0,0,0,8H96a4,4,0,0,0,4-4V48A4,4,0,0,0,96,44Z"}))]]),Om=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M220,48V88a12,12,0,0,1-24,0V60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM88,196H60V168a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H88a12,12,0,0,0,0-24Zm120-40a12,12,0,0,0-12,12v28H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM88,36H48A12,12,0,0,0,36,48V88a12,12,0,0,0,24,0V60H88a12,12,0,0,0,0-24Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,48V208H48V48Z",opacity:"0.2"}),m.createElement("path",{d:"M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M93.66,202.34A8,8,0,0,1,88,216H48a8,8,0,0,1-8-8V168a8,8,0,0,1,13.66-5.66ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,88,40ZM211.06,160.61a8,8,0,0,0-8.72,1.73l-40,40A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM208,40H168a8,8,0,0,0-5.66,13.66l40,40A8,8,0,0,0,216,88V48A8,8,0,0,0,208,40Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M214,48V88a6,6,0,0,1-12,0V54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48ZM88,202H54V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H88a6,6,0,0,0,0-12Zm120-40a6,6,0,0,0-6,6v34H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM88,42H48a6,6,0,0,0-6,6V88a6,6,0,0,0,12,0V54H88a6,6,0,0,0,0-12Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M212,48V88a4,4,0,0,1-8,0V52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48ZM88,204H52V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H88a4,4,0,0,0,0-8Zm120-40a4,4,0,0,0-4,4v36H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM88,44H48a4,4,0,0,0-4,4V88a4,4,0,0,0,8,0V52H88a4,4,0,0,0,0-8Z"}))]]),Lm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V184a12,12,0,0,0-24,0v27.13A84.18,84.18,0,0,1,44.87,140H72a12,12,0,0,0,0-24H44.87A84.18,84.18,0,0,1,116,44.87V72a12,12,0,0,0,24,0V44.87A84.18,84.18,0,0,1,211.13,116H184a12,12,0,0,0,0,24h27.13A84.18,84.18,0,0,1,140,211.13Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),m.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M176,136h23.54A72.11,72.11,0,0,1,136,199.54V176a8,8,0,0,0-16,0v23.54A72.11,72.11,0,0,1,56.46,136H80a8,8,0,0,0,0-16H56.46A72.11,72.11,0,0,1,120,56.46V80a8,8,0,0,0,16,0V56.46A72.11,72.11,0,0,1,199.54,120H176a8,8,0,0,0,0,16Zm56-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V184a6,6,0,0,0-12,0v33.8A90.15,90.15,0,0,1,38.2,134H72a6,6,0,0,0,0-12H38.2A90.15,90.15,0,0,1,122,38.2V72a6,6,0,0,0,12,0V38.2A90.15,90.15,0,0,1,217.8,122H184a6,6,0,0,0,0,12h33.8A90.15,90.15,0,0,1,134,217.8Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V184a4,4,0,0,0-8,0v35.91A92.13,92.13,0,0,1,36.09,132H72a4,4,0,0,0,0-8H36.09A92.13,92.13,0,0,1,124,36.09V72a4,4,0,0,0,8,0V36.09A92.13,92.13,0,0,1,219.91,124H184a4,4,0,0,0,0,8h35.91A92.13,92.13,0,0,1,132,219.91Z"}))]]),Dm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,100H132.92l78.14-20.63a12,12,0,0,0,8.52-14.75l-8.16-30a19.94,19.94,0,0,0-24.3-13.95L34.79,60.87a19.74,19.74,0,0,0-12.14,9.27,19.48,19.48,0,0,0-1.95,15L28,112v88a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V112A12,12,0,0,0,216,100ZM124.89,61.91l18.29,10.56-25.95,6.85L98.94,68.76Zm64.45-17,3.91,14.35-17.13,4.52L157.83,53.21ZM66,77.46,84.29,88l-35.4,9.35L45,83ZM204,196H52V124H204Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M67.71,64.59l47.79,27.6L40.43,112,32.27,82a7.76,7.76,0,0,1,5.58-9.52ZM199.84,37.76a7.9,7.9,0,0,0-9.66-5.49L126.61,49.05,174.4,76.64,208,67.77Z",opacity:"0.2"}),m.createElement("path",{d:"M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07L164.57,71,136.44,54.72ZM77.55,70.27l28.12,16.24-59.6,15.73-6-22.08Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,106H86.68L209.53,73.57a6,6,0,0,0,4.26-7.38l-8.16-30a13.94,13.94,0,0,0-17-9.72L36.32,66.67a13.77,13.77,0,0,0-8.48,6.47,13.57,13.57,0,0,0-1.36,10.42L34,111.34c0,.22,0,.44,0,.66v88a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V112A6,6,0,0,0,216,106ZM125.75,55.48l33,19.07-42.43,11.2-33-19.07Zm66-17.41a1.92,1.92,0,0,1,2.34,1.26l6.57,24.18L175.26,70.2l-33-19.07ZM38.23,79.14a1.85,1.85,0,0,1,1.15-.87L66.86,71l33,19.08L44.66,104.68l-6.6-24.27A1.63,1.63,0,0,1,38.23,79.14ZM210,200a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V118H210Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,108H71.26L209,71.64a4,4,0,0,0,2.84-4.92l-8.16-30a11.92,11.92,0,0,0-14.54-8.31L36.83,68.61a11.78,11.78,0,0,0-7.26,5.53A11.59,11.59,0,0,0,28.41,83l7.67,28.19A3.87,3.87,0,0,0,36,112v88a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V112A4,4,0,0,0,216,108ZM126,53.33l38,21.92L116.08,87.9,78.12,66Zm65.16-17.2a4,4,0,0,1,1-.13A3.88,3.88,0,0,1,196,38.81l7.1,26.12L175,72.35,137,50.43Zm-154.7,42a3.86,3.86,0,0,1,2.37-1.8l28.27-7.46,38,21.91L43.25,107.12,36.13,80.94A3.66,3.66,0,0,1,36.5,78.14ZM212,200a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V116H212Z"}))]]),km=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),m.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.85-16.16-58.5-8.66A96,96,0,0,0,32.81,140.3C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4,96,96,0,0,0,153.78-88.25c12.51-13,20.83-25.35,23.66-35.92C248.83,72.51,248.24,66.07,245.11,60.68Zm-13.69,15c-6.11,22.78-48.65,57.31-87.52,79.64-67.81,39-113.62,41.52-119.16,32-1.46-2.51-.65-7.24,2.22-13a80.06,80.06,0,0,1,10.28-15.05,95.53,95.53,0,0,0,6.23,14.18,4,4,0,0,0,4,2.12,122.14,122.14,0,0,0,16.95-3.32c21.23-5.55,46.63-16.48,71.52-30.78s47-30.66,62.45-46.15A122.74,122.74,0,0,0,209.7,82.45a4,4,0,0,0,.17-4.52,96.26,96.26,0,0,0-9.1-12.46c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M243.39,61.68c-7.24-12.48-27-15-57.24-7.49A93.92,93.92,0,0,0,34.05,128a94.5,94.5,0,0,0,.9,13c-21.86,22.38-29.56,40.78-22.29,53.32,4.5,7.76,14,11.69,27.86,11.69a116.38,116.38,0,0,0,25-3.16c1.45-.32,2.92-.68,4.41-1a93.95,93.95,0,0,0,151.19-86.89c12.65-13,21.11-25.32,23.86-35.6C246.76,72.53,246.24,66.59,243.39,61.68ZM128,46a82.12,82.12,0,0,1,80.19,64.94c-16,15.3-38.14,31.67-63.3,46.12C117.49,172.82,92.79,183,72.85,188.6A82,82,0,0,1,128,46ZM23,188.3c-3.52-6.07,2.31-18.56,15-33a94,94,0,0,0,21.07,36.62C39.42,195.74,26.39,194.08,23,188.3ZM128,210a81.41,81.41,0,0,1-43.35-12.45c20.68-6.71,43.56-17.06,66.22-30.08,22.83-13.12,43.13-27.67,59.05-41.91,0,.81.06,1.62.06,2.44A82.08,82.08,0,0,1,128,210ZM233.35,76.21c-1.88,7-7.28,15.49-15.36,24.61a93.92,93.92,0,0,0-21.1-36.7c15.82-3.05,32-3.49,36.12,3.58C234.2,69.75,234.31,72.62,233.35,76.21Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M241.66,62.68c-6.73-11.58-26.58-13.8-56-6.3A92,92,0,0,0,37,141.7c-21.38,21.69-29.44,40-22.68,51.62,4.13,7.11,13,10.71,26,10.71A115.25,115.25,0,0,0,65,200.9c1.74-.39,3.52-.82,5.32-1.28A92,92,0,0,0,220,128a92.84,92.84,0,0,0-1-13.73c12.77-13,21.31-25.28,24-35.47C244.69,72.54,244.23,67.12,241.66,62.68ZM128,44a84.13,84.13,0,0,1,82.38,67.56c-16.17,15.69-38.8,32.48-64.49,47.24-27.31,15.69-52.81,26.25-73.61,32A84,84,0,0,1,128,44ZM21.25,189.3C17,182,23.75,167.7,39,151.24A92,92,0,0,0,63,193.09C40.86,198,25.47,196.58,21.25,189.3ZM128,212a83.58,83.58,0,0,1-48-15.1c21.58-6.58,45.83-17.37,69.85-31.16,24.25-13.94,45.61-29.46,61.83-44.44.18,2.21.3,4.44.3,6.7A84.1,84.1,0,0,1,128,212ZM235.28,76.73c-2.13,8-8.58,17.65-18.25,28.06a92.07,92.07,0,0,0-24.12-41.92c21.85-4.82,37.59-3.46,41.83,3.83C236.2,69.23,236.39,72.6,235.28,76.73Z"}))]]),Nm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M243.16,68.85a17.4,17.4,0,0,0-15.26-12l-34.52-2.72L180.12,22.66a17.52,17.52,0,0,0-32.24,0L134.62,54.09l-34.51,2.72a17.39,17.39,0,0,0-9.93,30.62l26.17,22.1-8,33a17.46,17.46,0,0,0,26,19L164,143.66l29.59,17.81a17.46,17.46,0,0,0,26-19l-8-33,26.17-22.1A17.3,17.3,0,0,0,243.16,68.85ZM190.5,96a12,12,0,0,0-3.92,12l6,24.91-22.41-13.5a12.06,12.06,0,0,0-12.38,0l-22.41,13.5,6-24.91a12,12,0,0,0-3.93-12L118,79.48l25.83-2a12,12,0,0,0,10.11-7.3L164,46.2l10.11,23.94a12,12,0,0,0,10.11,7.3l25.82,2Zm-158,88.52a12,12,0,0,1-17-17l51.76-51.75a12,12,0,0,1,17,17Zm63.59-8.57a12,12,0,0,1,0,17l-47.59,47.6a12,12,0,0,1-17-17l47.6-47.59A12,12,0,0,1,96.08,175.92Zm62.44,9.56a12,12,0,0,1,0,17l-38,38a12,12,0,0,1-17-17l38-38A12,12,0,0,1,158.52,185.48Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M230.08,78.26l-31.84,26.88L208,145.33a5.46,5.46,0,0,1-8.19,5.86L164,129.66l-35.78,21.53a5.46,5.46,0,0,1-8.19-5.86l9.73-40.19L97.92,78.26a5.38,5.38,0,0,1,3.13-9.48l41.79-3.31,16.1-38.14a5.51,5.51,0,0,1,10.12,0l16.1,38.14L227,68.78A5.38,5.38,0,0,1,230.08,78.26Z",opacity:"0.2"}),m.createElement("path",{d:"M239.35,70.08a13.41,13.41,0,0,0-11.77-9.28l-36.94-2.92L176.43,24.22a13.51,13.51,0,0,0-24.86,0L137.36,57.88,100.42,60.8a13.39,13.39,0,0,0-7.66,23.58l28.06,23.68-8.56,35.39a13.32,13.32,0,0,0,5.1,13.91,13.51,13.51,0,0,0,15,.69L164,139l31.65,19.06a13.54,13.54,0,0,0,15-.69,13.34,13.34,0,0,0,5.09-13.91l-8.56-35.39,28.06-23.68A13.32,13.32,0,0,0,239.35,70.08ZM193.08,99a8,8,0,0,0-2.61,8l8.28,34.21L168.13,122.8a8,8,0,0,0-8.25,0l-30.62,18.43L137.54,107a8,8,0,0,0-2.62-8L108,76.26l35.52-2.81a8,8,0,0,0,6.74-4.87L164,35.91l13.79,32.67a8,8,0,0,0,6.74,4.87l35.53,2.81Zm-105,24.18L29.66,181.66a8,8,0,0,1-11.32-11.32l58.45-58.45a8,8,0,0,1,11.32,11.32Zm10.81,49.87a8,8,0,0,1,0,11.31L45.66,237.66a8,8,0,0,1-11.32-11.32l53.27-53.26A8,8,0,0,1,98.92,173.08Zm73-1a8,8,0,0,1,0,11.32l-54.28,54.28a8,8,0,0,1-11.32-11.32l54.29-54.28A8,8,0,0,1,171.94,172.06Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M235.24,84.38l-28.06,23.68,8.56,35.39a13.34,13.34,0,0,1-5.09,13.91,13.54,13.54,0,0,1-15,.69L164,139l-31.65,19.06a13.51,13.51,0,0,1-15-.69,13.32,13.32,0,0,1-5.1-13.91l8.56-35.39L92.76,84.38a13.39,13.39,0,0,1,7.66-23.58l36.94-2.92,14.21-33.66a13.51,13.51,0,0,1,24.86,0l14.21,33.66,36.94,2.92a13.39,13.39,0,0,1,7.66,23.58ZM88.11,111.89a8,8,0,0,0-11.32,0L18.34,170.34a8,8,0,0,0,11.32,11.32l58.45-58.45A8,8,0,0,0,88.11,111.89Zm-.5,61.19L34.34,226.34a8,8,0,0,0,11.32,11.32l53.26-53.27a8,8,0,0,0-11.31-11.31Zm73-1-54.29,54.28a8,8,0,0,0,11.32,11.32l54.28-54.28a8,8,0,0,0-11.31-11.32Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M237.45,70.69a11.42,11.42,0,0,0-10-7.9l-38.16-3L174.59,25a11.51,11.51,0,0,0-21.18,0L138.73,59.78l-38.15,3a11.39,11.39,0,0,0-6.53,20.06l29,24.48-8.86,36.59a11.35,11.35,0,0,0,4.34,11.83,11.51,11.51,0,0,0,12.78.58L164,136.66l32.69,19.67a11.5,11.5,0,0,0,12.77-.58,11.33,11.33,0,0,0,4.34-11.83L205,107.33l29-24.48A11.32,11.32,0,0,0,237.45,70.69Zm-43.08,29.87a6,6,0,0,0-2,6l9.41,38.86L167.1,124.52a6,6,0,0,0-6.19,0l-34.72,20.89,9.41-38.86a6,6,0,0,0-2-6L102.94,74.65l40.37-3.19a6,6,0,0,0,5.06-3.65l15.63-37,15.63,37a6,6,0,0,0,5.06,3.65l40.37,3.19ZM86.69,121.79,28.24,180.24a6,6,0,0,1-8.48-8.48l58.45-58.45a6,6,0,0,1,8.48,8.48Zm10.82,52.7a6,6,0,0,1,0,8.49L44.24,236.24a6,6,0,0,1-8.48-8.48L89,174.49A6,6,0,0,1,97.51,174.49Zm73-1a6,6,0,0,1,0,8.48l-54.29,54.28a6,6,0,0,1-8.48-8.48L162,173.48A6,6,0,0,1,170.53,173.48Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M239.35,70.08a13.41,13.41,0,0,0-11.77-9.28l-36.94-2.92L176.43,24.22a13.51,13.51,0,0,0-24.86,0L137.36,57.88,100.42,60.8a13.39,13.39,0,0,0-7.66,23.58l28.06,23.68-8.56,35.39a13.32,13.32,0,0,0,5.1,13.91,13.51,13.51,0,0,0,15,.69L164,139l31.65,19.06a13.54,13.54,0,0,0,15-.69,13.34,13.34,0,0,0,5.09-13.91l-8.56-35.39,28.06-23.68A13.32,13.32,0,0,0,239.35,70.08ZM193.08,99a8,8,0,0,0-2.61,8l8.28,34.21L168.13,122.8a8,8,0,0,0-8.25,0l-30.62,18.43L137.54,107a8,8,0,0,0-2.62-8L108,76.26l35.52-2.81a8,8,0,0,0,6.74-4.87L164,35.91l13.79,32.67a8,8,0,0,0,6.74,4.87l35.53,2.81Zm-105,24.18L29.66,181.66a8,8,0,0,1-11.32-11.32l58.45-58.45a8,8,0,0,1,11.32,11.32Zm10.81,49.87a8,8,0,0,1,0,11.31L45.66,237.66a8,8,0,0,1-11.32-11.32l53.27-53.26A8,8,0,0,1,98.92,173.08Zm73-1a8,8,0,0,1,0,11.32l-54.28,54.28a8,8,0,0,1-11.32-11.32l54.29-54.28A8,8,0,0,1,171.94,172.06Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M235.55,71.3a9.44,9.44,0,0,0-8.28-6.51L187.9,61.68,172.75,25.77a9.51,9.51,0,0,0-17.49,0L140.1,61.68l-39.36,3.11a9.39,9.39,0,0,0-5.4,16.53l30,25.28-9.14,37.79a9.24,9.24,0,0,0,3.58,9.75,9.52,9.52,0,0,0,10.56.48L164,134.32l33.72,20.3a9.52,9.52,0,0,0,10.56-.48,9.24,9.24,0,0,0,3.58-9.75l-9.15-37.79,29.95-25.28A9.34,9.34,0,0,0,235.55,71.3Zm-8.05,3.91-31.84,26.87a4,4,0,0,0-1.31,4l9.73,40.19a1.28,1.28,0,0,1-.53,1.42,1.5,1.5,0,0,1-1.71.07l-35.77-21.53a4,4,0,0,0-4.13,0l-35.78,21.53a1.48,1.48,0,0,1-1.7-.07,1.3,1.3,0,0,1-.54-1.42l9.73-40.19a4,4,0,0,0-1.31-4L100.51,75.21a1.29,1.29,0,0,1-.44-1.46,1.4,1.4,0,0,1,1.3-1l41.79-3.3A4,4,0,0,0,146.53,67l16.1-38.15a1.51,1.51,0,0,1,2.75,0L181.48,67a4,4,0,0,0,3.37,2.43l41.79,3.3a1.39,1.39,0,0,1,1.29,1A1.27,1.27,0,0,1,227.5,75.21ZM85.28,120.38,26.83,178.83a4,4,0,0,1-5.66-5.66l58.45-58.45a4,4,0,0,1,5.66,5.66Zm10.81,55.53a4,4,0,0,1,0,5.65L42.83,234.83a4,4,0,0,1-5.66-5.66l53.27-53.26A4,4,0,0,1,96.09,175.91Zm73-1a4,4,0,0,1,0,5.66l-54.28,54.28a4,4,0,0,1-5.66-5.66l54.29-54.28A4,4,0,0,1,169.11,174.89Z"}))]]),Bm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",opacity:"0.2"}),m.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z"}))]]),Hm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M250,138a12,12,0,0,1-24,0,94.11,94.11,0,0,0-94-94,84.09,84.09,0,0,0-84,84,74.09,74.09,0,0,0,74,74,64.07,64.07,0,0,0,64-64,54.06,54.06,0,0,0-54-54,44.05,44.05,0,0,0-44,44,34,34,0,0,0,34,34,24,24,0,0,0,24-24,14,14,0,0,0-14-14,4,4,0,0,0-2.82,1.17A12,12,0,0,1,124,148a20,20,0,0,1-20-20,28,28,0,0,1,28-28,38,38,0,0,1,38,38,48.05,48.05,0,0,1-48,48,58.07,58.07,0,0,1-58-58,68.07,68.07,0,0,1,68-68,78.09,78.09,0,0,1,78,78,88.1,88.1,0,0,1-88,88,98.11,98.11,0,0,1-98-98A108.12,108.12,0,0,1,132,20,118.13,118.13,0,0,1,250,138Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M240,144H208a80,80,0,0,1-80,80,88,88,0,0,1-88-88,96,96,0,0,1,96-96A104,104,0,0,1,240,144Z",opacity:"0.2"}),m.createElement("path",{d:"M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96,88.1,88.1,0,0,0-88,88,80.09,80.09,0,0,0,80,80,72.08,72.08,0,0,0,72-72,64.07,64.07,0,0,0-64-64,56.06,56.06,0,0,0-56,56,48.05,48.05,0,0,0,48,48,40,40,0,0,0,40-40,32,32,0,0,0-32-32,24,24,0,0,0-24,24,16,16,0,0,0,16,16,8,8,0,0,0,8-8,8,8,0,0,1,0-16,16,16,0,0,1,16,16,24,24,0,0,1-24,24,32,32,0,0,1-32-32,40,40,0,0,1,40-40,48.05,48.05,0,0,1,48,48,56.06,56.06,0,0,1-56,56,64.07,64.07,0,0,1-64-64,72.08,72.08,0,0,1,72-72,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96c-1.4,0-2.8,0-4.18.1A80.06,80.06,0,0,0,56,128a64.07,64.07,0,0,0,64,64,44.05,44.05,0,0,0,44-44,32,32,0,0,0-32-32,8,8,0,0,0,0,16,16,16,0,0,1,16,16,28,28,0,0,1-28,28,48.05,48.05,0,0,1-48-48,64.07,64.07,0,0,1,64-64,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M246,144a6,6,0,0,1-12,0,98.11,98.11,0,0,0-98-98,90.1,90.1,0,0,0-90,90,82.1,82.1,0,0,0,82,82,74.09,74.09,0,0,0,74-74,66.08,66.08,0,0,0-66-66,58.07,58.07,0,0,0-58,58,50.06,50.06,0,0,0,50,50,42,42,0,0,0,42-42,34,34,0,0,0-34-34,26,26,0,0,0-26,26,18,18,0,0,0,18,18,10,10,0,0,0,10-10,2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14,22,22,0,0,1-22,22,30,30,0,0,1-30-30,38,38,0,0,1,38-38,46.06,46.06,0,0,1,46,46,54.06,54.06,0,0,1-54,54,62.07,62.07,0,0,1-62-62,70.08,70.08,0,0,1,70-70,78.09,78.09,0,0,1,78,78,86.1,86.1,0,0,1-86,86,94.11,94.11,0,0,1-94-94A102.12,102.12,0,0,1,136,34,110.13,110.13,0,0,1,246,144Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96,88.1,88.1,0,0,0-88,88,80.09,80.09,0,0,0,80,80,72.08,72.08,0,0,0,72-72,64.07,64.07,0,0,0-64-64,56.06,56.06,0,0,0-56,56,48.05,48.05,0,0,0,48,48,40,40,0,0,0,40-40,32,32,0,0,0-32-32,24,24,0,0,0-24,24,16,16,0,0,0,16,16,8,8,0,0,0,8-8,8,8,0,0,1,0-16,16,16,0,0,1,16,16,24,24,0,0,1-24,24,32,32,0,0,1-32-32,40,40,0,0,1,40-40,48.05,48.05,0,0,1,48,48,56.06,56.06,0,0,1-56,56,64.07,64.07,0,0,1-64-64,72.08,72.08,0,0,1,72-72,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M244,144a4,4,0,0,1-8,0A100.11,100.11,0,0,0,136,44a92.1,92.1,0,0,0-92,92,84.09,84.09,0,0,0,84,84,76.08,76.08,0,0,0,76-76,68.07,68.07,0,0,0-68-68,60.07,60.07,0,0,0-60,60,52.06,52.06,0,0,0,52,52,44.05,44.05,0,0,0,44-44,36,36,0,0,0-36-36,28,28,0,0,0-28,28,20,20,0,0,0,20,20,12,12,0,0,0,12-12,4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12,20,20,0,0,1-20,20,28,28,0,0,1-28-28,36,36,0,0,1,36-36,44.05,44.05,0,0,1,44,44,52.06,52.06,0,0,1-52,52,60.07,60.07,0,0,1-60-60,68.07,68.07,0,0,1,68-68,76.08,76.08,0,0,1,76,76,84.09,84.09,0,0,1-84,84,92.1,92.1,0,0,1-92-92A100.11,100.11,0,0,1,136,36,108.12,108.12,0,0,1,244,144Z"}))]]),Gm=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),m.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),qm=m.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),wt=m.forwardRef((u,r)=>{const{alt:c,color:s,size:f,weight:d,mirrored:p,children:b,weights:x,...v}=u,{color:E="currentColor",size:g,weight:A="regular",mirrored:O=!1,...k}=m.useContext(qm);return m.createElement("svg",{ref:r,xmlns:"http://www.w3.org/2000/svg",width:f??g,height:f??g,fill:s??E,viewBox:"0 0 256 256",transform:p||O?"scale(-1, 1)":void 0,...k,...v},!!c&&m.createElement("title",null,c),b,x.get(d??A))});wt.displayName="IconBase";const ad=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:_m}));ad.displayName="ApertureIcon";const Vm=ad,ld=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Rm}));ld.displayName="CameraIcon";const C1=ld,id=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:zm}));id.displayName="CaretDownIcon";const Zm=id,nd=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Um}));nd.displayName="CornersInIcon";const jm=nd,rd=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Om}));rd.displayName="CornersOutIcon";const Pm=rd,sd=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Lm}));sd.displayName="CrosshairSimpleIcon";const Ym=sd,ud=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Dm}));ud.displayName="FilmSlateIcon";const Xm=ud,cd=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:km}));cd.displayName="PlanetIcon";const Im=cd,od=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Nm}));od.displayName="ShootingStarIcon";const Qm=od,fd=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Bm}));fd.displayName="SlidersHorizontalIcon";const Fm=fd,dd=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Hm}));dd.displayName="SpiralIcon";const Km=dd,hd=m.forwardRef((u,r)=>m.createElement(wt,{ref:r,...u,weights:Gm}));hd.displayName="XIcon";const md=hd,Wm="modulepreload",Jm=function(u,r){return new URL(u,r).href},_1={},$m=function(r,c,s){let f=Promise.resolve();if(c&&c.length>0){let v=function(E){return Promise.all(E.map(g=>Promise.resolve(g).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};const p=document.getElementsByTagName("link"),b=document.querySelector("meta[property=csp-nonce]"),x=b?.nonce||b?.getAttribute("nonce");f=v(c.map(E=>{if(E=Jm(E,s),E in _1)return;_1[E]=!0;const g=E.endsWith(".css"),A=g?'[rel="stylesheet"]':"";if(s)for(let k=p.length-1;k>=0;k--){const C=p[k];if(C.href===E&&(!g||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${E}"]${A}`))return;const O=document.createElement("link");if(O.rel=g?"stylesheet":Wm,g||(O.as="script"),O.crossOrigin="",O.href=E,x&&O.setAttribute("nonce",x),document.head.appendChild(O),g)return new Promise((k,C)=>{O.addEventListener("load",k),O.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${E}`)))})}))}function d(p){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=p,window.dispatchEvent(b),!b.defaultPrevented)throw p}return f.then(p=>{for(const b of p||[])b.status==="rejected"&&d(b.reason);return r().catch(d)})};class ep{yaw=-.5;pitch=.082;dist=13;lookYaw=0;lookPitch=0;velYaw=0;velPitch=0;homing=!1;fov=55;onInteract=null;looking=!1;lastInputAt=-1/0;ptrs=new Map;ac=new AbortController;attach(r){const{signal:c}=this.ac;r.style.touchAction="none",r.style.cursor="grab",r.addEventListener("pointerdown",f=>{try{r.setPointerCapture(f.pointerId)}catch{}this.ptrs.set(f.pointerId,{x:f.clientX,y:f.clientY}),r.style.cursor="grabbing",f.shiftKey||(this.velYaw=this.velPitch=0),this.lastInputAt=performance.now(),this.onInteract?.()},{signal:c}),r.addEventListener("pointermove",f=>{const d=this.ptrs.get(f.pointerId);if(d){if(this.lastInputAt=performance.now(),this.ptrs.size===2){const p=[...this.ptrs.entries()].find(([b])=>b!==f.pointerId);if(p){const b=Math.hypot(d.x-p[1].x,d.y-p[1].y),x=Math.hypot(f.clientX-p[1].x,f.clientY-p[1].y);b>0&&(this.dist=Math.max(3.4,Math.min(70,this.dist*b/x)));const v=this.fov*5e-5;this.lookYaw-=(f.clientX-d.x)*.5*v,this.lookPitch+=(f.clientY-d.y)*.5*v,this.lookPitch=Math.max(-1.5,Math.min(1.5,this.lookPitch)),this.homing=!1,this.looking=!0}}else if(f.shiftKey){const p=this.fov*5e-5;this.lookYaw-=(f.clientX-d.x)*p,this.lookPitch+=(f.clientY-d.y)*p,this.lookPitch=Math.max(-1.5,Math.min(1.5,this.lookPitch)),this.homing=!1,this.looking=!0}else{const p=f.clientX-d.x,b=f.clientY-d.y;this.orbitBy(-p*.005,b*.005),this.velYaw=-p*.005,this.velPitch=b*.005,this.looking=!1}this.ptrs.set(f.pointerId,{x:f.clientX,y:f.clientY})}},{signal:c});const s=f=>{this.ptrs.delete(f.pointerId),this.lastInputAt=performance.now(),this.ptrs.size===0&&(this.looking=!1),r.style.cursor="grab"};r.addEventListener("pointerup",s,{signal:c}),r.addEventListener("pointercancel",s,{signal:c}),r.addEventListener("wheel",f=>{f.preventDefault(),this.dist=Math.max(3.4,Math.min(70,this.dist*Math.exp(f.deltaY*.0012))),this.lastInputAt=performance.now(),this.onInteract?.()},{passive:!1,signal:c}),r.addEventListener("dblclick",()=>{this.lastInputAt=performance.now(),this.reset()},{signal:c})}detach(){this.ac.abort()}orbitBy(r,c){this.yaw+=r,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch+c))}setView(r){r.yawDeg!==void 0&&(this.yaw=r.yawDeg*Math.PI/180),r.pitchDeg!==void 0&&(this.pitch=r.pitchDeg*Math.PI/180),r.dist!==void 0&&(this.dist=r.dist),this.lookYaw=this.lookPitch=0,this.homing=!1,this.velYaw=this.velPitch=0}getState(){return{yaw:this.yaw,pitch:this.pitch,dist:this.dist,lookYaw:this.lookYaw,lookPitch:this.lookPitch}}setState(r){this.yaw=r.yaw,this.pitch=Math.max(-1.45,Math.min(1.45,r.pitch)),this.dist=Math.max(3.4,Math.min(70,r.dist)),this.lookYaw=r.lookYaw,this.lookPitch=Math.max(-1.5,Math.min(1.5,r.lookPitch)),this.velYaw=this.velPitch=0,this.homing=!1,this.looking=!1,this.ptrs.clear(),this.lastInputAt=-1/0}reset(){this.setView({yawDeg:-29,pitchDeg:4.7,dist:13})}rehome(){this.homing=!0}get offCenter(){return Math.abs(this.lookYaw)+Math.abs(this.lookPitch)>.02}isUserActive(r=performance.now(),c=400){return this.ptrs.size>0||r-this.lastInputAt<c}update(r,c){const s=this.ptrs.size>0&&!this.looking;if(c&&!s&&(this.yaw+=r*.03),this.velYaw||this.velPitch){(this.ptrs.size===0||this.looking)&&this.orbitBy(this.velYaw*r*60,this.velPitch*r*60);const f=Math.pow(.9,r*60);this.velYaw*=f,this.velPitch*=f,Math.abs(this.velYaw)<1e-5&&Math.abs(this.velPitch)<1e-5&&(this.velYaw=this.velPitch=0)}this.homing&&(this.lookYaw*=.82,this.lookPitch*=.82,Math.abs(this.lookYaw)<8e-4&&Math.abs(this.lookPitch)<8e-4&&(this.lookYaw=this.lookPitch=0,this.homing=!1))}poseKey(){return this.yaw.toFixed(5)+","+this.pitch.toFixed(5)+","+this.dist.toFixed(4)+","+this.lookYaw.toFixed(5)+","+this.lookPitch.toFixed(5)}axisymmetryKey(){return this.pitch.toFixed(5)+","+this.dist.toFixed(4)+","+this.lookYaw.toFixed(5)+","+this.lookPitch.toFixed(5)}}const tp=.33,$u=1,Xu=1e3/240,ap=2,lp=100,ip=48,np=6,rp=.94,sp=220,up=900,cp=800,op=12e3,fp=(u,r,c)=>Math.max(r,Math.min(c,u)),Iu=u=>Math.round(fp(u,tp,$u)*100)/100;class dp{displayPeriodMs=1e3/60;rafWindow=[];slowerCadenceRun=[];slowerCadenceEvidence=[];lastCap=Number.NaN;lastScaleChange=-1/0;lastUnhealthyAt=-1/0;lastDownAt=-1/0;failedScale;growthBlockedUntil=0;wasInteractive=!1;constructor(r){}observeRaf(r,c){if(!(r>=ap&&r<=lp))return;if(this.rafWindow.push(r),this.rafWindow.length>ip&&this.rafWindow.shift(),r>this.displayPeriodMs*1.12){const d=this.slowerCadenceRun.length?this.slowerCadenceRun.reduce((x,v)=>x+v,0)/this.slowerCadenceRun.length:r;Math.abs(r-d)>Math.max(.8,d*.09)?(this.slowerCadenceRun=[r],this.slowerCadenceEvidence=[c]):(this.slowerCadenceRun.push(r),this.slowerCadenceEvidence.push(c),this.slowerCadenceRun.length>20&&(this.slowerCadenceRun.shift(),this.slowerCadenceEvidence.shift()));const p=this.slowerCadenceEvidence.slice(-3),b=c&&p.filter(Boolean).length>=2;if(this.slowerCadenceRun.length>=5&&b){const x=[...this.slowerCadenceRun].sort((v,E)=>v-E);this.displayPeriodMs=Math.max(Xu,x[Math.floor(x.length/2)]),this.rafWindow=[...this.slowerCadenceRun],this.slowerCadenceRun=[],this.slowerCadenceEvidence=[]}return}if(this.slowerCadenceRun=[],this.slowerCadenceEvidence=[],this.rafWindow.length<6)return;const s=[...this.rafWindow].sort((d,p)=>d-p),f=s[s.length>>1];f<this.displayPeriodMs*.92&&(this.displayPeriodMs=Math.max(Xu,f))}targetFrameMs(r){const c=r>0&&r<240?1e3/r:0;return Math.max(Xu,this.displayPeriodMs,c)}reset(r){this.lastScaleChange=r,this.lastUnhealthyAt=r,this.growthBlockedUntil=r+350,this.failedScale=void 0}tick(r){const c=this.targetFrameMs(r.fpsCap),s=()=>({changed:!1,scale:r.scale,reason:"none",targetMs:c});if(r.fpsCap!==this.lastCap){const E=Number.isFinite(this.lastCap);this.lastCap=r.fpsCap,E&&this.reset(r.now)}if(this.wasInteractive&&!r.interactive&&(this.failedScale=void 0),this.wasInteractive=r.interactive,!r.enabled||!r.allowChanges||!r.streaming||r.completedCount<8)return s();const f=1e3/c,d=r.completedFps+r.skipsPerSec,p=Math.min(f,Math.max(d,1)),b=1e3/p;if(r.skipsPerSec>=np&&r.gpuFrameMs>b*1.02&&r.now-this.lastScaleChange>=sp){const E=r.scale*Math.sqrt(b*.85/r.gpuFrameMs),g=Iu(Math.max(E,r.scale*.66));if(g<r.scale-.005)return this.failedScale=r.scale,this.lastDownAt=r.now,this.lastScaleChange=r.now,this.growthBlockedUntil=r.now+(r.interactive?500:900),{changed:!0,scale:g,reason:"deadline-miss",targetMs:c}}if(!(r.completedFps>=p*rp))return this.lastUnhealthyAt=r.now,s();if(r.interactive||r.scale>=$u-.005||r.now<this.growthBlockedUntil||r.now-this.lastUnhealthyAt<cp||r.now-this.lastScaleChange<up)return s();this.failedScale!==void 0&&r.now-this.lastDownAt>op&&(this.failedScale=void 0);let v;if(this.failedScale===void 0)v=Iu(Math.min($u,r.scale*2));else{if(this.failedScale<=r.scale+.015)return s();v=Iu(Math.min(r.scale*2,(r.scale+this.failedScale)/2))}return v<=r.scale+.005?s():(this.lastScaleChange=r.now,{changed:!0,scale:v,reason:"probe",targetMs:c})}}function hp(u){const r=1+Math.cbrt(1-u*u)*(Math.cbrt(1+u)+Math.cbrt(1-u)),c=Math.sqrt(3*u*u+r*r);return 3+c-Math.sqrt((3-r)*(3+r+2*c))}const mp=u=>hp(u),pp=u=>1+Math.sqrt(Math.max(1-u*u,0)),gp=u=>u===0?3:2*(1+Math.cos(2/3*Math.acos(-u))),vp=u=>{const r=Math.abs(u),c=pp(r),s=gp(r);return c+.9*(s-c)},bp={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","-":"⁻"},yp=u=>String(u).split("").map(r=>bp[r]??r).join("");function R1(u,r){if(!isFinite(u))return"—";const c=Math.floor(Math.log10(Math.abs(u)));return c>=-1&&c<4?u.toFixed(r):(u/Math.pow(10,c)).toFixed(1)+"×10"+yp(c)}const pd=(u,r)=>u[0]*r[0]+u[1]*r[1]+u[2]*r[2],xp=(u,r)=>[u[1]*r[2]-u[2]*r[1],u[2]*r[0]-u[0]*r[2],u[0]*r[1]-u[1]*r[0]],gd=(u,r)=>{const[c,s,f]=u,d=r*r,p=c*c+s*s+f*f-d,b=.5*(p+Math.sqrt(p*p+4*d*f*f));return Math.sqrt(Math.max(b,Number.MIN_VALUE))},z1=(u,r)=>{const[c,s,f]=u,d=gd(u,r),p=d*d,b=r*r,x=p+b,v=[1,(d*c+r*s)/x,(d*s-r*c)/x,f/d],E=2*d*p/(p*p+b*f*f),g=new Float64Array(16);for(let A=0;A<4;A++)for(let O=0;O<4;O++){const k=A*4+O;g[k]=(A===O?A===0?-1:1:0)+E*v[A]*v[O]}return g},Sp=(u,r)=>{const[c,s,f]=u,d=gd(u,r),p=d*d,b=r*r,x=p+b,v=[-1,(d*c+r*s)/x,(d*s-r*c)/x,f/d],E=2*d*p/(p*p+b*f*f),g=new Float64Array(16);for(let A=0;A<4;A++)for(let O=0;O<4;O++){const k=A*4+O;g[k]=(A===O?A===0?-1:1:0)-E*v[A]*v[O]}return g},Xl=(u,r,c)=>{let s=0;for(let f=0;f<4;f++)for(let d=0;d<4;d++)s+=r[f]*u[f*4+d]*c[d];return s},pr=(u,r)=>{const c=[0,0,0,0];for(let s=0;s<4;s++)for(let f=0;f<4;f++)c[s]+=u[s*4+f]*r[f];return c},gr=(u,r)=>{const c=[0,0,0,0];for(let s=0;s<4;s++)for(let f=0;f<4;f++)c[s]+=u[s*4+f]*r[f];return c},U1=(u,r,c)=>{for(let s=0;s<4;s++)u[s]+=c*r[s]},Tp=u=>[0,u[0],u[1],u[2]],Qu=(u,r,c,s)=>{const f=Tp(c);for(let x=0;x<2;x++){U1(f,r,Xl(u,r,f));for(const v of s)U1(f,v,-Xl(u,v,f))}const d=Xl(u,f,f);if(!(d>1e-24)||!Number.isFinite(d))throw new Error("Camera seed is degenerate in the static observer rest space.");const p=1/Math.sqrt(d);for(let x=0;x<4;x++)f[x]*=p;const b=[f[1],f[2],f[3]];if(pd(b,c)<0)for(let x=0;x<4;x++)f[x]*=-1;return f},O1=(u,r,c)=>{const s=Math.abs(Xl(u,r,r)+1);let f=0,d=0;for(let p=0;p<c.length;p++){f=Math.max(f,Math.abs(Xl(u,r,c[p])));for(let b=0;b<c.length;b++)d=Math.max(d,Math.abs(Xl(u,c[p],c[b])-(p===b?1:0)))}return{timelike:s,restOrthogonality:f,spatialOrthonormality:d,max:Math.max(s,f,d)}},vr=u=>[Math.fround(u[0]),Math.fround(u[1]),Math.fround(u[2]),Math.fround(u[3])],Ep=(u,r,c)=>{const s=z1(u,r),f=-s[0];if(!(f>0)||!Number.isFinite(f))throw new Error("A coordinate-static camera is undefined inside the Kerr ergoregion.");const d=Math.sqrt(f),p=[1/d,0,0,0],b=Qu(s,p,c.right,[]),x=Qu(s,p,c.up,[b]);let v=Qu(s,p,c.forward,[b,x]);pd(xp([b[1],b[2],b[3]],[x[1],x[2],x[3]]),[v[1],v[2],v[3]])>0&&(v=v.map(V=>-V));const g={observer:pr(s,p),right:pr(s,b),up:pr(s,x),forward:pr(s,v)},A=O1(s,p,[b,x,v]),O=[Math.fround(u[0]),Math.fround(u[1]),Math.fround(u[2])],k=Math.fround(r),C=z1(O,k),G=Sp(O,k),Y=[vr(g.observer),vr(g.right),vr(g.up),vr(g.forward)],X=gr(G,Y[0]),Z=[gr(G,Y[1]),gr(G,Y[2]),gr(G,Y[3])];return{lapse:d,contravariant:{observer:p,right:b,up:x,forward:v},covariant:g,residuals:A,uploadedF32Residuals:O1(C,X,Z)}},Fu=2048,br=64,vd=`
fn h13(p0: vec3f) -> f32 { var p = fract(p0*0.1031); p += dot(p, p.zyx+vec3f(31.32)); return fract((p.x+p.y)*p.z); }
fn h33(p0: vec3f) -> vec3f { var p = fract(p0*vec3f(0.1031,0.1030,0.0973)); p += dot(p, p.yxz+vec3f(33.33)); return fract((p.xxy+p.yxx)*p.zyx); }
fn vno(p0: vec3f) -> f32 {
  let i = floor(p0); var f = fract(p0); f = f*f*(3.0-2.0*f);
  let a = h13(i); let b = h13(i+vec3f(1.0,0.0,0.0)); let c = h13(i+vec3f(0.0,1.0,0.0)); let d = h13(i+vec3f(1.0,1.0,0.0));
  let e = h13(i+vec3f(0.0,0.0,1.0)); let g = h13(i+vec3f(1.0,0.0,1.0)); let hh = h13(i+vec3f(0.0,1.0,1.0)); let j = h13(i+vec3f(1.0,1.0,1.0));
  return mix(mix(mix(a,b,f.x),mix(c,d,f.x),f.y),mix(mix(e,g,f.x),mix(hh,j,f.x),f.y),f.z);
}
fn fbm(p0: vec3f) -> f32 { var s = 0.0; var a = 0.5; var p = p0; for (var i = 0; i < 4; i++) { s += a*vno(p); p = p*2.03+vec3f(11.7); a *= 0.5; } return s; }
fn bb(T0: f32) -> vec3f {
  let T = clamp(T0, 1200.0, 22000.0); let t = T*0.01; var c: vec3f;
  c.r = select(clamp(1.29293618*pow(max(t-60.0,0.001),-0.13320476),0.0,1.0), 1.0, t <= 66.0);
  c.g = select(clamp(1.12989086*pow(max(t-60.0,0.001),-0.07551485),0.0,1.0), clamp(0.39008158*log(t)-0.63184144,0.0,1.0), t <= 66.0);
  c.b = select(select(clamp(0.54320679*log(max(t-10.0,0.001))-1.19625408,0.0,1.0), 0.0, t <= 19.0), 1.0, t >= 66.0);
  return c*c;
}`,Mp=`
fn signNZ2(v: vec2f) -> vec2f { return vec2f(select(-1.0, 1.0, v.x >= 0.0), select(-1.0, 1.0, v.y >= 0.0)); }
fn octEncode(d: vec3f) -> vec2f {
  let p = d.xy / (abs(d.x)+abs(d.y)+abs(d.z));
  return select(p, (vec2f(1.0)-abs(p.yx))*signNZ2(p), d.z < 0.0);
}
fn octDecodeRaw(e: vec2f) -> vec3f {
  var v = vec3f(e, 1.0-abs(e.x)-abs(e.y));
  if (v.z < 0.0) { let t = (vec2f(1.0)-abs(v.yx))*signNZ2(v.xy); v = vec3f(t, v.z); }
  return v;
}
fn octDecode(e: vec2f) -> vec3f { return normalize(octDecodeRaw(e)); }
fn octCandidateScore(q: vec2i, referenceDir: vec3f) -> f32 {
  let v = octDecodeRaw(vec2f(q)*(1.0/32767.0));
  let alignment = max(dot(v,referenceDir),0.0);
  return alignment*alignment/max(dot(v,v),1e-12);
}
fn packOct16Precise(encoded0: vec2f) -> u32 {
  // Ordered comparison is also false for NaN, so this rejects both NaN and
  // infinities without relying on optional classification builtins.
  if (!all(abs(encoded0) <= vec2f(1e20))) { return 0u; }
  let encoded = clamp(encoded0,vec2f(-1.0),vec2f(1.0));
  // referenceDir need not be normalized: its constant squared length cancels
  // when the two cosine scores are compared, avoiding inverse square roots.
  let referenceDir = octDecodeRaw(encoded);
  let scaled = encoded*32767.0;
  let lo = vec2i(floor(scaled));
  let hi = vec2i(ceil(scaled));
  let fraction = scaled-vec2f(lo);
  let nearest = select(lo,hi,fraction >= vec2f(0.5));
  let residual = abs(scaled-vec2f(nearest));
  var alternate = nearest;
  if (residual.x >= residual.y) {
    alternate.x = select(lo.x,hi.x,nearest.x == lo.x);
  } else {
    alternate.y = select(lo.y,hi.y,nearest.y == lo.y);
  }
  let nearestScore = octCandidateScore(nearest,referenceDir);
  let alternateScore = octCandidateScore(alternate,referenceDir);
  // Stable tie rule: keep the ordinary nearest code.
  let best = select(nearest,alternate,alternateScore > nearestScore);
  return (bitcast<u32>(best.x)&0xffffu)
       | ((bitcast<u32>(best.y)&0xffffu)<<16u);
}`,wp=`
const CROSS_PI = 3.141592653589793;
const CROSS_Z_LIMIT = 1.35;
const CROSS_PHI_DELTA_LIMIT = 64.0;
const CROSS_TAU_SCALE = 0.005;
const CROSS_TAU_LOG_RANGE = 7.3783837; // log(1 + 8/.005)
const CROSS_G_LOG_LIMIT = 5.0;
const CROSS_SPAN_LOG_RANGE = 4.1743873; // log(65)
const CROSS_COMPLEXITY_SINGLE = 0u;
const CROSS_COMPLEXITY_TRIPLE = 1u;
const CROSS_COMPLEXITY_QUINT = 2u;
const CROSS_COMPLEXITY_REFINE = 3u;
const RAY_SLOT_OVERFLOW_BIT = 64u;
const RAY_REFINEMENT_BIT = 128u;
struct PackedCross { a: vec4u, b: vec2u }
struct DecodedCross {
  c0: vec4f, c1: vec4f, c2: vec4f,
  tau: f32, span: f32, complexity: u32,
}
fn crossUnorm(x: f32, m: f32) -> u32 { return u32(round(clamp(x,0.0,1.0)*m)); }
fn crossRPack(r: f32, rIn: f32, rOut: f32) -> u32 {
  return crossUnorm((r-rIn)/max(rOut-rIn,1e-6),65535.0);
}
fn crossRUnpack(q: u32, rIn: f32, rOut: f32) -> f32 {
  return mix(rIn,rOut,f32(q)*(1.0/65535.0));
}
fn crossPhiWrap(phi: f32) -> f32 { return atan2(sin(phi),cos(phi)); }
fn crossPhiPack(phi: f32) -> u32 {
  return crossUnorm(crossPhiWrap(phi)/(2.0*CROSS_PI)+0.5,65535.0);
}
fn crossPhiUnpack(q: u32) -> f32 {
  return (f32(q)*(1.0/65535.0)*2.0-1.0)*CROSS_PI;
}
fn crossDPhiPack(d: f32) -> u32 {
  return crossUnorm(d/CROSS_PHI_DELTA_LIMIT*0.5+0.5,65535.0);
}
fn crossDPhiUnpack(q: u32) -> f32 {
  return (f32(q)*(1.0/65535.0)*2.0-1.0)*CROSS_PHI_DELTA_LIMIT;
}
fn crossZPack(z: f32) -> u32 { return crossUnorm(z/CROSS_Z_LIMIT*0.5+0.5,255.0); }
fn crossZUnpack(q: u32) -> f32 { return (f32(q)*(1.0/255.0)*2.0-1.0)*CROSS_Z_LIMIT; }
fn crossTauPack(tau: f32) -> u32 {
  return crossUnorm(log(1.0+clamp(tau,0.0,8.0)/CROSS_TAU_SCALE)/CROSS_TAU_LOG_RANGE,65535.0);
}
fn crossTauUnpack(q: u32) -> f32 {
  return CROSS_TAU_SCALE*(exp(f32(q)*(CROSS_TAU_LOG_RANGE/65535.0))-1.0);
}
fn crossGPack(g: f32) -> u32 {
  return crossUnorm(log2(clamp(g,exp2(-CROSS_G_LOG_LIMIT),exp2(CROSS_G_LOG_LIMIT)))
                    /(2.0*CROSS_G_LOG_LIMIT)+0.5,4095.0);
}
fn crossGUnpack(q: u32) -> f32 {
  return exp2((f32(q)*(1.0/4095.0)*2.0-1.0)*CROSS_G_LOG_LIMIT);
}
fn crossSpanPack(span: f32) -> u32 {
  return crossUnorm(log(1.0+clamp(span,0.0,64.0))/CROSS_SPAN_LOG_RANGE,1023.0);
}
fn crossSpanUnpack(q: u32) -> f32 {
  return exp(f32(q)*(CROSS_SPAN_LOG_RANGE/1023.0))-1.0;
}
fn packCross(c0: vec4f, c1: vec4f, c2: vec4f, tau: f32, span: f32,
             complexity0: u32, rIn: f32, rOut: f32) -> PackedCross {
  var complexity = min(complexity0,3u);
  let d1 = c1.y-c0.y; let d2 = c2.y-c0.y;
  if (min(c0.x,min(c1.x,c2.x)) < rIn || max(c0.x,max(c1.x,c2.x)) > rOut
      || max(abs(d1),abs(d2)) > CROSS_PHI_DELTA_LIMIT
      || max(abs(c0.z),max(abs(c1.z),abs(c2.z))) > CROSS_Z_LIMIT
      || tau < 0.0 || tau > 8.0 || span < 0.0 || span > 64.0
      || min(c0.w,min(c1.w,c2.w)) < exp2(-CROSS_G_LOG_LIMIT)
      || max(c0.w,max(c1.w,c2.w)) > exp2(CROSS_G_LOG_LIMIT)) { complexity = 3u; }
  var out: PackedCross;
  out.a.x = crossRPack(c0.x,rIn,rOut) | (crossRPack(c1.x,rIn,rOut) << 16u);
  out.a.y = crossRPack(c2.x,rIn,rOut) | (crossTauPack(tau) << 16u);
  out.a.z = crossPhiPack(c0.y) | (crossDPhiPack(d1) << 16u);
  out.a.w = crossDPhiPack(d2) | (crossZPack(c0.z) << 16u) | (crossZPack(c1.z) << 24u);
  out.b.x = crossZPack(c2.z) | (crossGPack(c0.w) << 8u) | (crossGPack(c1.w) << 20u);
  out.b.y = crossGPack(c2.w) | (complexity << 12u) | (crossSpanPack(span) << 14u);
  return out;
}
fn unpackCross(a: vec4u, b: vec2u, rIn: f32, rOut: f32) -> DecodedCross {
  var out: DecodedCross;
  let p0 = crossPhiUnpack(a.z & 65535u);
  out.c0 = vec4f(crossRUnpack(a.x & 65535u,rIn,rOut),p0,
                 crossZUnpack((a.w >> 16u)&255u),crossGUnpack((b.x>>8u)&4095u));
  out.c1 = vec4f(crossRUnpack((a.x>>16u)&65535u,rIn,rOut),
                 p0+crossDPhiUnpack((a.z>>16u)&65535u),
                 crossZUnpack((a.w>>24u)&255u),crossGUnpack((b.x>>20u)&4095u));
  out.c2 = vec4f(crossRUnpack(a.y&65535u,rIn,rOut),
                 p0+crossDPhiUnpack(a.w&65535u),crossZUnpack(b.x&255u),
                 crossGUnpack(b.y&4095u));
  out.tau = crossTauUnpack((a.y>>16u)&65535u);
  out.span = crossSpanUnpack((b.y>>14u)&1023u);
  out.complexity = (b.y>>12u)&3u;
  return out;
}
fn rayCount(rayFlags: u32) -> u32 { return rayFlags&3u; }
fn rayCid(rayFlags: u32, slot: u32) -> u32 { return (rayFlags>>(8u+8u*slot))&255u; }
fn crossNodeCount(complexity: u32) -> u32 {
  if (complexity <= CROSS_COMPLEXITY_SINGLE) { return 1u; }
  if (complexity == CROSS_COMPLEXITY_TRIPLE) { return 3u; }
  return 5u;
}
fn crossNeedsRefinement(complexity: u32) -> bool {
  return complexity >= CROSS_COMPLEXITY_REFINE;
}
fn raySlotOverflow(rayFlags: u32) -> bool {
  return (rayFlags&RAY_SLOT_OVERFLOW_BIT) != 0u;
}
fn rayNeedsRefinement(rayFlags: u32) -> bool {
  return (rayFlags&(RAY_SLOT_OVERFLOW_BIT|RAY_REFINEMENT_BIT)) != 0u;
}
fn footPack(v: f32) -> u32 {
  let q = clamp((log2(max(v,0.012))-log2(0.012))/(log2(32.0)-log2(0.012)),0.0,1.0);
  return u32(round(q*255.0));
}
fn footUnpack(q: u32) -> f32 {
  let t = f32(q&255u)*(1.0/255.0);
  return exp2(mix(log2(0.012),log2(32.0),t));
}
`,Ap=24,Cp=20,_p=64,L1=u=>Ap+Math.max(1,u)*Uint32Array.BYTES_PER_ELEMENT,Rp=`
struct WorkQueueWrite {
  count: atomic<u32>,
  overflow: atomic<u32>,
  dispatchX: u32,
  dispatchY: u32,
  dispatchZ: u32,
  capacity: u32,
  items: array<u32>,
}
struct WorkQueueRead {
  count: u32,
  overflow: u32,
  dispatchX: u32,
  dispatchY: u32,
  dispatchZ: u32,
  capacity: u32,
  items: array<u32>,
}
`,zp=`
struct Uni {
  camPos: vec3f, tanHF: f32,
  observerCov: vec4f,
  camRCov: vec4f,
  camUCov: vec4f,
  camFCov: vec4f,
  a: f32, diskIn: f32, diskOut: f32, esc: f32,
  maxSteps: f32, traceMode: f32, hr: f32, fullWidth: f32,
  fullHeight: f32, jitterX: f32, jitterY: f32, captureRadius: f32,
}
@group(0) @binding(0) var<uniform> U: Uni;
${Rp}
@group(0) @binding(1) var<storage, read> workQueue: WorkQueueRead;
@group(0) @binding(2) var gCrossA: texture_storage_2d_array<rgba32uint, write>;
@group(0) @binding(3) var gCrossB: texture_storage_2d_array<rg32uint, write>;
@group(0) @binding(4) var gRay: texture_storage_2d<rg32uint, write>;
@group(0) @binding(5) var<storage, read_write> sparseQueue: WorkQueueWrite;
/* Material B specializes the same geodesic program to retain the physical
   front/middle/back of a crossing. The default remains the established
   opacity-centroid cache, so A keeps its exact representation and cost. */
override FLOW_PATH_CACHE: bool = false;
${Mp}
${wp}
/* The public cache is append-only by physical crossing. THR0/THR1 partition
   one crossing into private base-opacity summaries; they never create public
   slots. Consequently the birth of a later image cannot repartition or merge
   an already-written record. */
struct Hits {
  n: u32, nextCid: u32, cidPack: u32, esc: u32,
  capture: u32, tauStop: u32, maxStep: u32, overflow: u32,
  needsRefine: u32,
  dir: vec2f,
  p0: PackedCross, p1: PackedCross, p2: PackedCross,
}
// diskShade's h=0 coefficient floor is
// 0.05 + 0.42*sqrt(0.045) = 0.139095... before the same radial fades.
// Keep >0.001 of f32 margin so this termination estimate never overstates
// surface opacity; changing the rendered alpha is neither needed nor desired.
const AL_MIN = 0.138;
const K_TAU = 1.87;        // grey optical-depth calibration knob
const VOL_EXTENT = 1.35;   // low-density corona beyond the dense |z| <= H core
const THR0 = 0.7;          // private first base-opacity bucket
const THR1 = 1.6;          // private second boundary: bucket width 0.9
const TAU_EPS = 0.005;     // sub-epsilon tail is < 0.5% opacity at unit density
const TAU_STOP = 8.0;      // production residual exp(-8*(0.30+0.27*sqrt(0.045))) ~ 0.0574
fn vProf(u: f32) -> f32 {
  let s = max(1.0-u*u, 0.0);
  let w = max(1.0-(u*u)/(VOL_EXTENT*VOL_EXTENT), 0.0);
  return s*sqrt(s) + 0.08*w*w;
}
fn vCoreInt(u: f32) -> f32 {
  let uc = clamp(u, -1.0, 1.0); let s = sqrt(max(1.0-uc*uc, 0.0));
  return (uc*(5.0-2.0*uc*uc)*s + 3.0*asin(uc))*0.125;
}
fn vInt(u: f32) -> f32 {   // exact core + polynomial-corona antiderivative
  let uw = clamp(u, -VOL_EXTENT, VOL_EXTENT);
  let L2 = VOL_EXTENT*VOL_EXTENT;
  // uw^5 via multiplies, NOT pow(uw,5.0): WGSL pow is exp2(e2*log2(e1)) and
  // indeterminate (NaN on Metal) for negative bases — the near-radial column
  // always evaluates this at uw = ±VOL_EXTENT, one of which is negative.
  let uw2 = uw*uw;
  let wing = 0.08*(uw - 2.0*uw*uw2/(3.0*L2) + uw*uw2*uw2/(5.0*L2*L2));
  return vCoreInt(u)+wing;
}
fn fades(r: f32) -> f32 {
  let fadeO = 1.0 - smoothstep(U.diskOut*0.62, U.diskOut, r);
  // fadeI must reach EXACTLY zero for r <= diskIn. A residual floor (an old
  // max(x, 1.0001) copied from the shade profile guard) kept cavity chords
  // producing dTau ~ 1e-6 > the 1e-7 cull, which marked them contributing and
  // blocked the exit hysteresis from ever closing a crossing whose ray
  // re-enters at the far inner wall — the two limbs then merged into one
  // segment with a mid-cavity mean and a corrupted Doppler state. Exact zero
  // both restores the intended crossing split and lets the dTau cull skip
  // all cavity microcell work.
  let fadeI = smoothstep(1.0, 1.05, r/U.diskIn);
  return fadeO*fadeI;
}
// Thin controls are radius-quantized before diskShade evaluates its fades.
// Use that same decoded radius for the termination bound: evaluating fades
// at the pre-pack hit can slightly overstate opacity on an upward fade ramp.
// diskShade's max(r/diskIn,1.0001) only increases its inner fade, so omitting
// that profile guard here remains conservative at the innermost code.
fn cachedSurfaceFades(r: f32) -> f32 {
  let q = crossRPack(r,U.diskIn,U.diskOut);
  return fades(crossRUnpack(q,U.diskIn,U.diskOut));
}
/* One active physical crossing. The current bucket stores base-opacity
   weighted moments only, so its controls are independent of animated density
   and emissivity. */
struct SegAcc {
  Sw: f32, Sr: f32, Su: f32, Sphi: f32,
  tauBucket: f32, tauX: f32, tauTot: f32, spanX: f32,
  gap: f32, phiFirst: f32, phiLast: f32, lastR: f32,
  controls: u32, cid: u32, radialTurns: u32, samples: u32,
  radialTrend: i32, inX: bool, flowMask: u32,
  flowFirst: vec4f, flowLast: vec4f,
  flowQ0: vec4f, flowQ1: vec4f, flowQ2: vec4f, flowQ3: vec4f, flowQ4: vec4f,
  c0: vec4f, c1: vec4f, c2: vec4f,
}
fn bucketReset(a: ptr<function, SegAcc>) {
  (*a).Sw = 0.0; (*a).Sr = 0.0; (*a).Su = 0.0; (*a).Sphi = 0.0;
  (*a).tauBucket = 0.0;
}
fn crossingReset(a: ptr<function, SegAcc>) {
  bucketReset(a);
  (*a).tauX = 0.0; (*a).spanX = 0.0; (*a).gap = 0.0;
  (*a).phiFirst = 0.0; (*a).phiLast = 0.0; (*a).lastR = 0.0;
  (*a).controls = 0u; (*a).radialTurns = 0u; (*a).samples = 0u;
  (*a).radialTrend = 0; (*a).inX = false; (*a).flowMask = 0u;
  (*a).flowFirst = vec4f(0.0); (*a).flowLast = vec4f(0.0);
  (*a).flowQ0 = vec4f(0.0); (*a).flowQ1 = vec4f(0.0);
  (*a).flowQ2 = vec4f(0.0); (*a).flowQ3 = vec4f(0.0);
  (*a).flowQ4 = vec4f(0.0);
  (*a).c0 = vec4f(0.0); (*a).c1 = vec4f(0.0); (*a).c2 = vec4f(0.0);
}
fn segInit(a: ptr<function, SegAcc>) {
  (*a).tauTot = 0.0; (*a).cid = 0u;
  crossingReset(a);
}
/* Exact inverse of one nonnegative linear half-cell. Rationalizing the
   positive quadratic root avoids cancellation; the alternate discriminant
   for a falling ramp stays accurate close to its back endpoint. */
fn inverseLinearHalf(q0: f32, a: f32, b: f32) -> f32 {
  let area = 0.25*(a+b);
  let q = clamp(q0,0.0,area);
  if (q <= 0.0) { return 0.0; }
  if (q >= area) { return 0.5; }
  var disc: f32;
  if (b >= a) {
    disc = a*a+4.0*(b-a)*q;
  } else {
    disc = b*b+4.0*(a-b)*(area-q);
  }
  let den = a+sqrt(max(disc,0.0));
  if (!(den > 0.0)) { return 0.0; }
  return clamp(2.0*q/den,0.0,0.5);
}
/* Invert the same positive piecewise-linear density used before, but
   analytically rather than with 3 calls × 7 divergent bisections per split.
   Normalization improves f32 scale invariance. Optical depth and threshold
   topology are unchanged; representative positions lose their 1/256-cell
   bisection quantization. */
fn profilePos(frac0: f32, v0: f32, vm: f32, v1: f32) -> f32 {
  let frac = clamp(frac0,0.0,1.0);
  if (frac <= 0.0) { return 0.0; }
  if (frac >= 1.0) { return 1.0; }
  let p0 = max(v0,0.0); let pm = max(vm,0.0); let p1 = max(v1,0.0);
  let scale = max(p0,max(pm,p1));
  if (!(scale > 0.0)) { return frac; }
  let a = p0/scale; let m = pm/scale; let b = p1/scale;
  let firstArea = 0.25*(a+m);
  let total = firstArea+0.25*(m+b);
  let goal = frac*total;
  if (goal <= firstArea) { return inverseLinearHalf(goal,a,m); }
  return 0.5+inverseLinearHalf(goal-firstArea,m,b);
}
/* Select a point that was genuinely visited near half of this crossing's
   optical depth. Fixed threshold captures avoid an unbounded per-ray array;
   the endpoint interpolation fallback is used only for very transparent
   crossings that never reached the first threshold. */
fn flowMiddle(a: ptr<function, SegAcc>) -> vec4f {
  let desiredTau = 0.5*(*a).tauX;
  var best = mix((*a).flowFirst,(*a).flowLast,0.5);
  var error = 1e9;
  if (((*a).flowMask&1u) != 0u && abs(0.25-desiredTau) < error) {
    best = (*a).flowQ0; error = abs(0.25-desiredTau);
  }
  if (((*a).flowMask&2u) != 0u && abs(0.75-desiredTau) < error) {
    best = (*a).flowQ1; error = abs(0.75-desiredTau);
  }
  if (((*a).flowMask&4u) != 0u && abs(1.5-desiredTau) < error) {
    best = (*a).flowQ2; error = abs(1.5-desiredTau);
  }
  if (((*a).flowMask&8u) != 0u && abs(2.5-desiredTau) < error) {
    best = (*a).flowQ3; error = abs(2.5-desiredTau);
  }
  if (((*a).flowMask&16u) != 0u && abs(4.0-desiredTau) < error) {
    best = (*a).flowQ4;
  }
  return best;
}
/* Clip a chord against |z| <= H(t), with H linearly interpolated from the
   endpoint cylindrical radii. This is a much closer event model than using a
   single midpoint height, while remaining branch-light and derivative-free. */
fn slabClip(z0: f32, z1: f32, H0: f32, H1: f32) -> vec2f {
  var lo = 0.0; var hi = 1.0;
  let q0 = z0 - H0; let q1 = z1 - H1;
  if (q0 > 0.0 && q1 > 0.0) { return vec2f(1.0, 0.0); }
  if (q0 > 0.0) { lo = max(lo, q0/(q0-q1)); }
  if (q1 > 0.0) { hi = min(hi, q0/(q0-q1)); }
  let b0 = -z0 - H0; let b1 = -z1 - H1;
  if (b0 > 0.0 && b1 > 0.0) { return vec2f(1.0, 0.0); }
  if (b0 > 0.0) { lo = max(lo, b0/(b0-b1)); }
  if (b1 > 0.0) { hi = min(hi, b0/(b0-b1)); }
  return vec2f(clamp(lo, 0.0, 1.0), clamp(hi, 0.0, 1.0));
}
fn controlDistance(a: vec4f, b: vec4f) -> f32 {
  let r = 0.5*(a.x+b.x);
  let eddy = 0.65+0.08*r;
  let dr = (b.x-a.x)/eddy;
  let arc = r*(b.y-a.y)/eddy;
  let dz = 1.25*(b.z-a.z);
  return length(vec3f(dr,arc,dz));
}
fn crossingComplexity(a: ptr<function, SegAcc>) -> u32 {
  let winding = abs((*a).phiLast-(*a).phiFirst);
  let d01 = select(0.0,controlDistance((*a).c0,(*a).c1),(*a).controls > 1u);
  let d12 = select(0.0,controlDistance((*a).c1,(*a).c2),(*a).controls > 2u);
  let pathDelta = max(d01,d12);
  let g01 = select(0.0,abs(log2(max((*a).c1.w,1e-6)/max((*a).c0.w,1e-6))),
                     (*a).controls > 1u);
  let g12 = select(0.0,abs(log2(max((*a).c2.w,1e-6)/max((*a).c1.w,1e-6))),
                     (*a).controls > 2u);
  let gSwing = max(g01,g12);
  /* Retain the geometric labels used by cache analysis and oracle calibration:
     0 is genuinely local, 1 is an ordinary multi-bucket curve, and 2 spans
     roughly two material eddies or has strong frequency/trajectory curvature.
     These labels no longer choose production compact material-node counts. */
  var c = select(0u,1u,(*a).controls > 1u || (*a).spanX > 4.0
                            || winding > 3.14159265 || (*a).radialTurns > 0u
                            || pathDelta > 0.55 || gSwing > 0.12);
  if ((*a).spanX > 12.0 || winding > 6.2831853 || (*a).radialTurns > 1u
      || pathDelta > 1.75 || gSwing > 0.45) { c = 2u; }
  /* Three controls cannot truthfully reconstruct an extreme winding chord.
     Mark it for the sparse full-f32 sidecar instead of silently presenting a
     five-node interpolation as additional traced path information. */
  if ((*a).spanX > 40.0 || winding > 12.566371 || (*a).radialTurns > 3u
      || pathDelta > 7.0 || gSwing > 1.8) { c = 3u; }
  return c;
}
fn recordPush(h: ptr<function, Hits>, cid: u32, p: PackedCross) {
  /* complexity==3 means either the fitted path exceeded the portable codec
     range or the crossing is too intricate for the three-control curve. It
     remains renderable through shade's all-complexity positive quint and is
     also exposed as a sparse-refinement request in the ray header. */
  if (((p.b.y>>12u)&3u) == CROSS_COMPLEXITY_REFINE) { (*h).needsRefine = 1u; }
  if ((*h).n >= 3u) {
    (*h).overflow = 1u;
    (*h).needsRefine = 1u;
    return;
  }
  (*h).cidPack |= (cid & 255u) << (8u*(*h).n);
  if ((*h).n == 0u) { (*h).p0 = p; }
  else if ((*h).n == 1u) { (*h).p1 = p; }
  else { (*h).p2 = p; }
  (*h).n += 1u;
}
fn pointPush(h: ptr<function, Hits>, point: vec4f, tau: f32, span: f32, complexity: u32) {
  let p = packCross(point,point,point,tau,span,complexity,U.diskIn,U.diskOut);
  recordPush(h,(*h).nextCid,p);
  (*h).nextCid = min((*h).nextCid+1u,255u);
}
fn columnU(u0: f32, u1: f32, opticalFrac: f32) -> f32 {
  let um = 0.5*(u0+u1);
  let t = profilePos(opticalFrac,vProf(u0),vProf(um),vProf(u1));
  return mix(u0,u1,t);
}
fn columnPush(h: ptr<function, Hits>, r: f32, phi: f32, g: f32,
              u0: f32, u1: f32, tau: f32, span: f32) {
  let invTau = 1.0/max(tau,1e-6);
  let f0 = 0.5*min(tau,THR0)*invTau;
  let f1 = select(f0,(THR0+0.5*min(THR1-THR0,tau-THR0))*invTau,tau > THR0);
  let f2 = select(f1,(THR1+0.5*(tau-THR1))*invTau,tau > THR1);
  var c0 = vec4f(r,phi,columnU(u0,u1,f0),g);
  var c1 = vec4f(r,phi,columnU(u0,u1,f1),g);
  var c2 = vec4f(r,phi,columnU(u0,u1,f2),g);
  if (FLOW_PATH_CACHE) {
    c0 = vec4f(r,phi,u0,g);
    c1 = vec4f(r,phi,0.5*(u0+u1),g);
    c2 = vec4f(r,phi,u1,g);
  }
  let du = abs(u1-u0);
  var complexity = select(0u,1u,tau > THR0 || span > 4.0 || du > 0.75);
  if (span > 12.0) { complexity = 2u; }
  if (span > 40.0) { complexity = 3u; }
  recordPush(h,(*h).nextCid,packCross(c0,c1,c2,tau,span,complexity,U.diskIn,U.diskOut));
  (*h).nextCid = min((*h).nextCid+1u,255u);
}
fn writeOut(gid: vec2u, h: Hits) {
  textureStore(gCrossA,gid,0,h.p0.a);
  textureStore(gCrossA,gid,1,h.p1.a);
  textureStore(gCrossA,gid,2,h.p2.a);
  textureStore(gCrossB,gid,0,vec4u(h.p0.b,0u,0u));
  textureStore(gCrossB,gid,1,vec4u(h.p1.b,0u,0u));
  textureStore(gCrossB,gid,2,vec4u(h.p2.b,0u,0u));
  let dv = select(vec2f(0.0),clamp(h.dir,vec2f(-1.0),vec2f(1.0)),h.esc == 1u);
  /* Bit 6 is the lossless fact that a fourth physical crossing did not fit.
     Bit 7 is the compact sparse-refinement mask consumed by the forthcoming
     queue builder. Max-step rays join that mask because their cache is also
     a bounded fallback rather than a converged answer. */
  let refineMask = h.needsRefine | h.overflow | h.maxStep;
  let packedMeta = (h.n&3u) | ((h.esc&1u)<<2u) | ((h.capture&1u)<<3u)
                   | ((h.tauStop&1u)<<4u) | ((h.maxStep&1u)<<5u)
                   | ((h.overflow&1u)<<6u) | ((refineMask&1u)<<7u)
                   | ((h.cidPack&0x00ffffffu)<<8u);
  var dirWord = 0u;
  if (h.esc == 1u) { dirWord = packOct16Precise(dv); }
  textureStore(gRay,gid,vec4u(dirWord,packedMeta,0u,0u));
}
fn rayDir(gid: vec2u, dims: vec2u) -> vec3f {
  let res = vec2f(dims);
  var ndc = vec2f((f32(gid.x)+0.5+U.jitterX)/res.x*2.0-1.0, 1.0-(f32(gid.y)+0.5+U.jitterY)/res.y*2.0);
  ndc.x *= res.x/res.y;
  return normalize(vec3f(U.tanHF*ndc.x,U.tanHF*ndc.y,1.0));
}
fn receivedPhotonCovector(localDir: vec3f) -> vec4f {
  // localDir points from the observer toward the source.  This is the one
  // future-directed received-photon state used by the path and invariants.
  return U.observerCov-localDir.x*U.camRCov-localDir.y*U.camUCov-localDir.z*U.camFCov;
}
fn observerKsr(x: vec3f, a: f32) -> f32 {
  let a2 = a*a;
  let b = dot(x,x)-a2;
  return sqrt(max(0.5*(b+sqrt(b*b+4.0*a2*x.z*x.z)),1e-8));
}
fn photonForwardSpatial(x: vec3f, p: vec3f, E: f32, a: f32) -> vec3f {
  let r = observerKsr(x,a); let r2 = r*r; let a2 = a*a;
  let f = 2.0*r*r2/(r2*r2+a2*x.z*x.z+1e-9);
  let k = vec3f((r*x.x+a*x.y)/(r2+a2),
                (r*x.y-a*x.x)/(r2+a2),x.z/max(r,1e-6));
  return p-f*(E+dot(k,p))*k;
}
fn kerrSchildPhi(x: vec3f, r: f32, a: f32) -> f32 {
  return atan2(r*x.y-a*x.x,r*x.x+a*x.y);
}
fn schwarzschildEscapeTail(x: vec3f, sourceward0: vec3f) -> vec3f {
  // First post-Minkowskian spatial tail from the finite outward state to
  // infinity.  With c = x.n/r, the stable angular remainder is
  // delta = M/b * (1-c)^2 * (2+c), M=1.  This is the difference between the
  // current Euclidean tangent angle and the asymptotic Schwarzschild orbit,
  // not the much larger full-lens 2M/b half-deflection.
  let n = normalize(sourceward0);
  let r = length(x);
  let z = dot(x,n);
  let c = clamp(z/max(r,1e-6),0.0,1.0);
  let impact = x-z*n;
  let b = length(impact);
  if (!(z > 0.0) || b < 1e-5 || r < 20.0) { return n; }
  let delta = (1.0-c)*(1.0-c)*(2.0+c)/b;
  return normalize(n-delta*impact/b);
}
fn enqueueSparsePixel(pixel: vec2u, dims: vec2u) {
  let index = atomicAdd(&sparseQueue.count,1u);
  if (index < sparseQueue.capacity) {
    sparseQueue.items[index] = pixel.y*dims.x+pixel.x;
  } else {
    atomicAdd(&sparseQueue.overflow,1u);
  }
}`,Up=`
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u,
        @builtin(workgroup_id) workgroupId: vec3u,
        @builtin(local_invocation_index) localIndex: u32,
        @builtin(num_workgroups) workgroupCount: vec3u) {
  let outDims = textureDimensions(gCrossA);
  var outPixel = gid.xy;
  var fullPixel = outPixel;
  var fullDims = outDims;
  /* mode 2 writes the exact even/even anchor lattice to a quarter-pixel
     cache. mode 3 consumes the compact GPU work queue. mode 0 remains the
     exact full-frame trace (the no-queue fallback). */
  if (U.traceMode > 1.5 && U.traceMode < 2.5) {
    if (outPixel.x >= outDims.x || outPixel.y >= outDims.y) { return; }
    fullDims = vec2u(u32(U.fullWidth),u32(U.fullHeight));
    fullPixel = outPixel*2u;
    if (fullPixel.x >= fullDims.x || fullPixel.y >= fullDims.y) { return; }
  } else if (U.traceMode > 2.5) {
    fullDims = vec2u(u32(U.fullWidth),u32(U.fullHeight));
    let groupIndex = workgroupId.y*workgroupCount.x+workgroupId.x;
    let queueIndex = groupIndex*${_p}u+localIndex;
    let accepted = min(workQueue.count,workQueue.capacity);
    if (queueIndex >= accepted) { return; }
    let packedPixel = workQueue.items[queueIndex];
    fullPixel = vec2u(packedPixel%fullDims.x,packedPixel/fullDims.x);
    outPixel = fullPixel;
  } else if (outPixel.x >= outDims.x || outPixel.y >= outDims.y) {
    return;
  }
  let h = trace(rayDir(fullPixel, fullDims));
  writeOut(outPixel, h);
  if (U.traceMode > 1.5 && (h.needsRefine|h.overflow|h.maxStep) != 0u) {
    enqueueSparsePixel(fullPixel,fullDims);
  }
}`,Op=`
${zp}
struct KerrRadius { r: f32, r2: f32 }
fn kerrRadiusState(x: vec3f, a2: f32) -> KerrRadius {
  // Keep this operation order identical to the former ksr()/deriv() radius
  // solve.  The state exists only to share that exact f32 result between a
  // capture guard and the derivative evaluated at the same position.
  let b = dot(x,x)-a2;
  let r2 = max(0.5*(b+sqrt(b*b+4.0*a2*x.z*x.z)), 1e-8);
  return KerrRadius(sqrt(r2),r2);
}
fn ksr(x: vec3f, a2: f32) -> f32 {
  // Keep the material sampler's established scalar helper byte-for-byte: the
  // state-returning form is used only where a derivative shares the result.
  let b = dot(x,x)-a2;
  let r2 = 0.5*(b+sqrt(b*b+4.0*a2*x.z*x.z));
  return sqrt(max(r2, 1e-8));
}
struct DXP { dx: vec3f, dp: vec3f }
fn derivAtRadius(x: vec3f, p: vec3f, E: f32, a: f32,
                 a2: f32, radius: KerrRadius) -> DXP {
  let r = radius.r; let r2 = radius.r2; let r3 = r*r2;
  let D = r2*r2+a2*x.z*x.z+1e-9;
  let gr = vec3f(r3*x.x, r3*x.y, r*(r2+a2)*x.z)/D;
  let f = 2.0*r3/D;
  let gD = 4.0*r3*gr+vec3f(0.0,0.0,2.0*a2*x.z);
  let gf = f*(3.0/r*gr-gD/D);
  let Q = r2+a2;
  let k = vec3f((r*x.x+a*x.y)/Q, (r*x.y-a*x.x)/Q, x.z/r);
  let s = E+dot(k,p);
  let tq = 2.0*r/Q;
  var pk: vec3f;
  pk.x = p.x*((gr.x*x.x+r)/Q-k.x*tq*gr.x)+p.y*((gr.x*x.y-a)/Q-k.y*tq*gr.x)+p.z*(-x.z*gr.x/r2);
  pk.y = p.x*((gr.y*x.x+a)/Q-k.x*tq*gr.y)+p.y*((gr.y*x.y+r)/Q-k.y*tq*gr.y)+p.z*(-x.z*gr.y/r2);
  pk.z = p.x*((gr.z*x.x)/Q-k.x*tq*gr.z)+p.y*((gr.z*x.y)/Q-k.y*tq*gr.z)+p.z*(1.0/r-x.z*gr.z/r2);
  var o: DXP;
  o.dx = p-f*s*k;
  o.dp = 0.5*s*s*gf+f*s*pk;
  return o;
}
fn derivBack(x: vec3f, p: vec3f, E: f32, a: f32,
             a2: f32, radius: KerrRadius) -> DXP {
  let forward = derivAtRadius(x,p,E,a,a2,radius);
  var backward: DXP;
  backward.dx = -forward.dx;
  backward.dp = -forward.dp;
  return backward;
}
fn compactKerrEscapeDirection(
  x0: vec3f, p0: vec3f, E: f32, a: f32, a2: f32,
  initialRadius: KerrRadius,
) -> vec3f {
  // Two compact Kutta RK3 continuations advance an escaped state beyond 100M
  // before the analytic mass tail.  A radius-scaled affine step (not a
  // radial-velocity-scaled one) remains well conditioned for nearly tangent
  // escape rays.  Binary64 comparison against a 400M reference plus the same
  // asymptotic tail bounds p99 below one tenth of a 35-degree/1260px pixel.
  var x = x0;
  var p = p0;
  var radius = initialRadius;
  for (var iteration = 0u; iteration < 2u; iteration++) {
    let ds = select(0.5,0.8,iteration == 1u)*radius.r;
    let k1 = derivBack(x,p,E,a,a2,radius);
    let xK2 = x+0.5*ds*k1.dx;
    let k2 = derivBack(xK2,p+0.5*ds*k1.dp,E,a,a2,
                       kerrRadiusState(xK2,a2));
    let xK3 = x+ds*(-k1.dx+2.0*k2.dx);
    let k3 = derivBack(xK3,p+ds*(-k1.dp+2.0*k2.dp),E,a,a2,
                       kerrRadiusState(xK3,a2));
    x += ds/6.0*(k1.dx+4.0*k2.dx+k3.dx);
    p += ds/6.0*(k1.dp+4.0*k2.dp+k3.dp);
    // Only the second step needs a refreshed radius; the caller already
    // carries the exact finite-boundary value and no third step consumes one.
    if (iteration == 0u) { radius = kerrRadiusState(x,a2); }
  }
  return schwarzschildEscapeTail(x,-photonForwardSpatial(x,p,E,a));
}
/* Kerr needs no phase-space bucket moments: its full frequency shift follows
   directly from the conserved received-photon E/Lz at the control radius. */
fn segAddK(a: ptr<function, SegAcc>, dTau: f32, r: f32, phi: f32, u: f32,
           span: f32,
           rFront: f32, phiFront: f32, uFront: f32,
           rBack: f32, phiBack: f32, uBack: f32) {
  let first = !(*a).inX;
  var pf = phiFront;
  if (!first) { pf += 6.2831853*round(((*a).phiLast-pf)*0.15915494); }
  var pb = phiBack+6.2831853*round((pf-phiBack)*0.15915494);
  let near = 0.5*(pf+pb);
  let pm = phi+6.2831853*round((near-phi)*0.15915494);
  if (first) {
    (*a).phiFirst = pf;
  } else {
    let dr = r-(*a).lastR;
    if (abs(dr) > max(0.002,0.002*r)) {
      let trend = select(-1,1,dr > 0.0);
      if ((*a).radialTrend != 0 && trend != (*a).radialTrend) {
        (*a).radialTurns += 1u;
      }
      (*a).radialTrend = trend;
    }
  }
  if (FLOW_PATH_CACHE) {
    let front = vec4f(rFront,pf,uFront,0.0);
    let back = vec4f(rBack,pb,uBack,0.0);
    if (first) { (*a).flowFirst = front; }
    (*a).flowLast = back;
    let tau0 = (*a).tauX;
    let tau1 = tau0+dTau;
    if (((*a).flowMask&1u) == 0u && tau0 <= 0.25 && tau1 >= 0.25) {
      (*a).flowQ0 = mix(front,back,clamp((0.25-tau0)/max(dTau,1e-7),0.0,1.0));
      (*a).flowMask |= 1u;
    }
    if (((*a).flowMask&2u) == 0u && tau0 <= 0.75 && tau1 >= 0.75) {
      (*a).flowQ1 = mix(front,back,clamp((0.75-tau0)/max(dTau,1e-7),0.0,1.0));
      (*a).flowMask |= 2u;
    }
    if (((*a).flowMask&4u) == 0u && tau0 <= 1.5 && tau1 >= 1.5) {
      (*a).flowQ2 = mix(front,back,clamp((1.5-tau0)/max(dTau,1e-7),0.0,1.0));
      (*a).flowMask |= 4u;
    }
    if (((*a).flowMask&8u) == 0u && tau0 <= 2.5 && tau1 >= 2.5) {
      (*a).flowQ3 = mix(front,back,clamp((2.5-tau0)/max(dTau,1e-7),0.0,1.0));
      (*a).flowMask |= 8u;
    }
    if (((*a).flowMask&16u) == 0u && tau0 <= 4.0 && tau1 >= 4.0) {
      (*a).flowQ4 = mix(front,back,clamp((4.0-tau0)/max(dTau,1e-7),0.0,1.0));
      (*a).flowMask |= 16u;
    }
  }
  (*a).phiLast = pb; (*a).lastR = r; (*a).samples += 1u;
  let w = dTau;
  (*a).Sw += w; (*a).Sr += w*r; (*a).Su += w*u; (*a).Sphi += w*pm;
  (*a).tauBucket += dTau; (*a).tauX += dTau; (*a).tauTot += dTau;
  (*a).spanX += span;
  (*a).inX = true;
}
fn kerrGAt(r0: f32, Er: f32, Lz: f32, lc: f32) -> f32 {
  let rB = max(r0,1e-3);
  let sq = sqrt(rB);
  // Circular-orbit existence is guarded; production disk radii stay outside
  // the corresponding ISCO.
  let denC = max(rB*sq-3.0*sq+2.0*U.a,1e-4);
  let om = 1.0/(rB*sq+U.a);
  let ut = (rB*sq+U.a)/(pow(rB,0.75)*sqrt(denC));
  let wem = max(ut*(Er-om*Lz),1e-4);
  return (Er/lc)/wem;
}
fn stashControlK(a: ptr<function, SegAcc>, Er: f32, Lz: f32, lc: f32) {
  if ((*a).tauBucket <= 1e-7 || (*a).Sw <= 0.0) { bucketReset(a); return; }
  let inv = 1.0/(*a).Sw;
  let rB = max((*a).Sr*inv, 1e-3);
  let gfull = kerrGAt(rB,Er,Lz,lc);
  let phiB = (*a).Sphi*inv;
  let c = vec4f(rB,phiB,(*a).Su*inv,gfull);
  if ((*a).controls == 0u) { (*a).c0 = c; }
  else if ((*a).controls == 1u) { (*a).c1 = c; }
  else { (*a).c2 = c; }
  (*a).controls = min((*a).controls+1u,3u);
  bucketReset(a);
}
fn closeCrossK(h: ptr<function, Hits>, a: ptr<function, SegAcc>,
               Er: f32, Lz: f32, lc: f32) {
  if (!(*a).inX) { return; }
  stashControlK(a,Er,Lz,lc);
  if ((*a).tauX >= TAU_EPS && (*a).controls > 0u) {
    let complexity = crossingComplexity(a);
    var c0 = (*a).c0;
    var c1 = select(c0,(*a).c1,(*a).controls > 1u);
    var c2 = select(c1,(*a).c2,(*a).controls > 2u);
    if (FLOW_PATH_CACHE) {
      let middle = flowMiddle(a);
      c0 = vec4f(clamp((*a).flowFirst.x,U.diskIn,U.diskOut),
                 (*a).flowFirst.y,clamp((*a).flowFirst.z,-VOL_EXTENT,VOL_EXTENT),
                 clamp(kerrGAt((*a).flowFirst.x,Er,Lz,lc),0.03125,32.0));
      c1 = vec4f(clamp(middle.x,U.diskIn,U.diskOut),
                 middle.y,clamp(middle.z,-VOL_EXTENT,VOL_EXTENT),
                 clamp(kerrGAt(middle.x,Er,Lz,lc),0.03125,32.0));
      c2 = vec4f(clamp((*a).flowLast.x,U.diskIn,U.diskOut),
                 (*a).flowLast.y,clamp((*a).flowLast.z,-VOL_EXTENT,VOL_EXTENT),
                 clamp(kerrGAt((*a).flowLast.x,Er,Lz,lc),0.03125,32.0));
    }
    let p = packCross(c0,c1,c2,(*a).tauX,(*a).spanX,complexity,
                      U.diskIn,U.diskOut);
    recordPush(h,(*a).cid,p);
  }
  (*a).cid = min((*a).cid+1u,255u);
  crossingReset(a);
}
fn trace(dir: vec3f) -> Hits {
  // One future-directed photon covector supplies both the Hamiltonian path and
  // every conserved quantity.  Negative affine flow follows it from the
  // observer toward the source in the physical +a spacetime.
  var h: Hits;
  let a2c = U.a*U.a;
  var x = U.camPos;
  let initialRadius = kerrRadiusState(x,a2c);
  let received = receivedPhotonCovector(dir);
  let E = max(-received.x,1e-6);
  var p = received.yzw;
  let Er = E;
  // Static-observer normalization gives -p.u_obs=1 and therefore E/lapse=1.
  let lc = E;
  let Lz = x.x*p.y-x.y*p.x;
  var escd = false;
  var zP = x.z;
  var acc: SegAcc;
  segInit(&acc);
  var lastDx = vec3f(0.0);
  var transUB = 1.0;
  let n = u32(clamp(U.maxSteps, 1.0, 640.0));
  // Each exact quartic result is carried only after all consumers of the old
  // state run.  This changes no capture/material ordering; it only prevents a
  // derivative at that same x from solving the quartic a second time.
  var radiusState = initialRadius;
  for (var i = 0u; i < n; i++) {
    let r = radiusState.r;
    let dlBase = clamp(0.055*r*(0.4+r/(r+3.0)), 0.03, select(1.5, 2.6, r > 20.0 && abs(x.z) > 3.0));
    let xP = x;
    let d1 = derivBack(x,p,E,U.a,a2c,radiusState); lastDx = d1.dx;
    let dl = min(dlBase,0.1*max(length(p),E)/max(length(d1.dp),1e-6));
    let rEuler = ksr(x+dl*d1.dx,a2c);
    if (r <= U.captureRadius || rEuler <= U.captureRadius) {
      if (U.hr >= 0.001) { closeCrossK(&h,&acc,Er,Lz,lc); }
      h.capture = 1u;
      return h;
    }
    if (r > 16.0) { // weak field: midpoint (RK2) — half the derivative cost
      let xK2 = x+0.5*dl*d1.dx;
      let d2 = derivBack(xK2,p+0.5*dl*d1.dp,E,U.a,a2c,
                         kerrRadiusState(xK2,a2c));
      x += dl*d2.dx; p += dl*d2.dp;
    } else {
      // Each RK trial is checked before its derivative for the same reason as
      // the completed chord: the past-horizon coordinate stiffness can turn
      // one invalid stage into a numerically huge, false outward escape.
      let xK2 = x+0.5*dl*d1.dx;
      let radiusK2 = kerrRadiusState(xK2,a2c);
      if (radiusK2.r <= U.captureRadius) {
        if (U.hr >= 0.001) { closeCrossK(&h,&acc,Er,Lz,lc); }
        h.capture = 1u;
        return h;
      }
      let d2 = derivBack(xK2,p+0.5*dl*d1.dp,E,U.a,a2c,radiusK2);
      let xK3 = x+0.5*dl*d2.dx;
      let radiusK3 = kerrRadiusState(xK3,a2c);
      if (radiusK3.r <= U.captureRadius) {
        if (U.hr >= 0.001) { closeCrossK(&h,&acc,Er,Lz,lc); }
        h.capture = 1u;
        return h;
      }
      let d3 = derivBack(xK3,p+0.5*dl*d2.dp,E,U.a,a2c,radiusK3);
      let xK4 = x+dl*d3.dx;
      let radiusK4 = kerrRadiusState(xK4,a2c);
      if (radiusK4.r <= U.captureRadius) {
        if (U.hr >= 0.001) { closeCrossK(&h,&acc,Er,Lz,lc); }
        h.capture = 1u;
        return h;
      }
      let d4 = derivBack(xK4,p+dl*d3.dp,E,U.a,a2c,radiusK4);
      x += dl/6.0*(d1.dx+2.0*d2.dx+2.0*d3.dx+d4.dx);
      p += dl/6.0*(d1.dp+2.0*d2.dp+2.0*d3.dp+d4.dp);
    }
    let nextRadius = kerrRadiusState(x,a2c);
    let rn = nextRadius.r;
    if (U.hr < 0.001) {
      // legacy razor-thin disk: single midplane crossing
      if (zP*x.z < 0.0) {
        let t = zP/(zP-x.z);
        let xh = mix(xP, x, t);
        let rho2 = xh.x*xh.x+xh.y*xh.y;
        let rb = sqrt(max(rho2-a2c, 0.0));
        if (rb >= U.diskIn && rb <= U.diskOut) {
          let sq = sqrt(rb);
          let den = rb*sq-3.0*sq+2.0*U.a;
          if (den > 1e-4) {
            let om = 1.0/(rb*sq+U.a);
            let ut = (rb*sq+U.a)/(pow(rb,0.75)*sqrt(den));
            let wem = max(ut*(Er-om*Lz), 1e-4);
            let gfull = (Er/lc)/wem;
            pointPush(&h,vec4f(rb,kerrSchildPhi(xh,rb,U.a),0.0,gfull),0.0,0.0,0u);
            transUB *= 1.0 - AL_MIN*cachedSurfaceFades(rb);
            if (transUB < 0.05) { h.tauStop = 1u; return h; }
          }
        }
      }
    } else if (h.tauStop == 0u) {
      // Medium quadrature over the completed Kerr RK chord. World-space
      // subdivision is cheap relative to deriv(), and local H/z/r sampling
      // prevents an oblique ray from collapsing a whole chord to one shell.
      let x0 = xP; let x1 = x;
      let chordLen = length(x1-x0);
      let H0 = VOL_EXTENT*U.hr*max(length(x0.xy), 1e-4);
      let H1 = VOL_EXTENT*U.hr*max(length(x1.xy), 1e-4);
      let clip = slabClip(x0.z, x1.z, H0, H1);
      var contrib = false;
      if (clip.y > clip.x && chordLen > 1e-7) {
        let xc = mix(x0, x1, 0.5*(clip.x+clip.y));
        let Hc = U.hr*max(length(xc.xy), 1e-4);
        let xa = mix(x0, x1, clip.x); let xb = mix(x0, x1, clip.y);
        let ua = clamp(xa.z/max(U.hr*max(length(xa.xy), 1e-4), 1e-6), -VOL_EXTENT, VOL_EXTENT);
        let ub = clamp(xb.z/max(U.hr*max(length(xb.xy), 1e-4), 1e-6), -VOL_EXTENT, VOL_EXTENT);
        let dsClip = (clip.y-clip.x)*chordLen;
        let uc = clamp(xc.z/max(Hc,1e-6),-VOL_EXTENT,VOL_EXTENT);
        let tauEst = K_TAU*fades(ksr(xc,a2c))*0.25*(vProf(ua)+2.0*vProf(uc)+vProf(ub))*dsClip/max(Hc,1e-6);
        let chordXY = xb.xy-xa.xy;
        let closestT = clamp(-dot(xa.xy,chordXY)/max(dot(chordXY,chordXY),1e-9),0.0,1.0);
        let rhoMin = length(xa.xy+closestT*chordXY);
        // Two PROOFS, no unsafe shortcuts: (outer) rho^2 <= r_BL^2+a^2, so
        // rho > sqrt(rOut^2+a^2) puts the whole segment outside. (inner)
        // r_BL <= |x| always (r^4 <= r^2|x|^2 - a^2 z^2 rearranges to
        // z^2 <= |x|^2) and |x| is convex along the linear chord, so
        // max(|xa|,|xb|) < diskIn keeps every point in the cavity, where
        // fades() is exactly zero — a thin-disk ray crossing the hole was
        // burning up to 64 microcells per chord for zero contribution.
        let radialActive = rhoMin <= sqrt(U.diskOut*U.diskOut+a2c)
                        && max(dot(xa,xa),dot(xb,xb)) >= U.diskIn*U.diskIn;
        let nWanted = u32(clamp(ceil(max(max(dsClip/max(0.32*Hc, 1e-5),
                                               abs(ub-ua)/0.30), tauEst/0.35)), 1.0, 64.0));
        let nSub = select(0u,nWanted,radialActive);
        for (var sj = 0u; sj < 64u; sj++) {
          if (h.tauStop != 0u) { break; }
          if (sj >= nSub) { break; }
          let fa = f32(sj)/f32(nSub); let fb = f32(sj+1u)/f32(nSub);
          let sa = mix(clip.x, clip.y, fa); let sb = mix(clip.x, clip.y, fb);
          let sm = 0.5*(sa+sb);
          let xsa = mix(x0, x1, sa); let xsm = mix(x0, x1, sm); let xsb = mix(x0, x1, sb);
          let Ha = max(U.hr*max(length(xsa.xy), 1e-4), 1e-6);
          let Hm = max(U.hr*max(length(xsm.xy), 1e-4), 1e-6);
          let Hb = max(U.hr*max(length(xsb.xy), 1e-4), 1e-6);
          let va = vProf(clamp(xsa.z/Ha, -VOL_EXTENT, VOL_EXTENT));
          let vm = vProf(clamp(xsm.z/Hm, -VOL_EXTENT, VOL_EXTENT));
          let vb = vProf(clamp(xsb.z/Hb, -VOL_EXTENT, VOL_EXTENT));
          let Iv = 0.25*(va+2.0*vm+vb);
          let dsSub = (sb-sa)*chordLen;
          let rMid = ksr(xsm, a2c);
          let rawTau = K_TAU*fades(rMid)*Iv*dsSub/Hm;
          let dTau = min(rawTau, max(TAU_STOP-acc.tauTot, 0.0));
          if (dTau <= 1e-7) { continue; }
          contrib = true; acc.gap = (1.0-clip.y)*chordLen;
          let spanSub = dsSub/Hm;
          var remain = dTau; var consumed = 0.0;
          for (var qi = 0u; qi < 4u; qi++) {
            if (remain <= 1e-7) { break; }
            var take = min(remain, max(TAU_STOP-acc.tauTot, 0.0));
            if (acc.controls < 2u) {
              let thr = select(THR0, THR1, acc.controls == 1u);
              let toThr = max(thr-acc.tauX, 0.0);
              if (toThr <= 1e-6) {
                stashControlK(&acc,Er,Lz,lc);
                continue;
              }
              take = min(take, toThr);
            }
            if (take <= 1e-7) { break; }
            let tf0 = profilePos(consumed/max(rawTau,1e-8), va,vm,vb);
            let tf = profilePos((consumed + 0.5*take)/max(rawTau,1e-8), va,vm,vb);
            let tf1 = profilePos((consumed+take)/max(rawTau,1e-8), va,vm,vb);
            let st = mix(sa, sb, tf);
            let xt = mix(x0, x1, st);
            let rt = ksr(xt, a2c);
            let sf0 = mix(sa, sb, tf0);
            let sf1 = mix(sa, sb, tf1);
            let xf0 = mix(x0,x1,sf0); let xf1 = mix(x0,x1,sf1);
            let rf0 = ksr(xf0,a2c); let rf1 = ksr(xf1,a2c);
            let Hf0 = max(U.hr*max(length(xf0.xy),1e-4),1e-6);
            let Hf1 = max(U.hr*max(length(xf1.xy),1e-4),1e-6);
            let uT = clamp(xt.z/max(U.hr*max(length(xt.xy),1e-4),1e-6),-VOL_EXTENT,VOL_EXTENT);
            let uF0 = clamp(xf0.z/Hf0,-VOL_EXTENT,VOL_EXTENT);
            let uF1 = clamp(xf1.z/Hf1,-VOL_EXTENT,VOL_EXTENT);
            segAddK(&acc,take,rt,kerrSchildPhi(xt,rt,U.a),uT,spanSub*(tf1-tf0),
                    rf0,kerrSchildPhi(xf0,rf0,U.a),uF0,
                    rf1,kerrSchildPhi(xf1,rf1,U.a),uF1);
            remain -= take; consumed += take;
            if (acc.controls < 2u) {
              let thr = select(THR0, THR1, acc.controls == 1u);
              if (acc.tauX >= thr-1e-5) {
                stashControlK(&acc,Er,Lz,lc);
              }
            }
            if (acc.tauTot >= TAU_STOP-1e-5) {
              closeCrossK(&h,&acc,Er,Lz,lc);
              h.tauStop = 1u;
              break;
            }
          }
        }
      }
      if (!contrib && acc.inX) {
        acc.gap += chordLen;
        if (acc.gap > max(0.6*H1, 0.025) || abs(x1.z) > 1.08*H1) {
          closeCrossK(&h,&acc,Er,Lz,lc);
        }
      }
    }
    zP = x.z;
    if (rn <= U.captureRadius || rn < 0.5) {
      if (U.hr >= 0.001) { closeCrossK(&h,&acc,Er,Lz,lc); }
      h.capture = 1u;
      return h;
    }
    radiusState = nextRadius;
    if (rn > U.esc && dot(x, lastDx) > 0.0) { escd = true; break; }
  }
  if (U.hr >= 0.001) { closeCrossK(&h,&acc,Er,Lz,lc); }
  if (escd) {
    h.esc = 1u;
    h.dir = octEncode(compactKerrEscapeDirection(x,p,E,U.a,a2c,radiusState));
  } else { h.maxStep = 1u; }
  return h;
}
${Up}`,Ba=(u,r,c,s)=>{const f=u.indexOf(r);if(f<0||u.indexOf(r,f+r.length)>=0)throw new Error(`Inline-volume transform could not uniquely locate ${s}.`);return u.slice(0,f)+c+u.slice(f+r.length)},D1=(u,r,c,s,f)=>{const d=u.indexOf(r),p=u.indexOf(c,d+r.length);if(d<0||p<0)throw new Error(`Inline-volume transform could not locate ${f}.`);return u.slice(0,d)+s+u.slice(p)},Lp=`
@group(0) @binding(6) var inlineSky: texture_cube<f32>;
@group(0) @binding(7) var inlineSkySampler: sampler;
@group(0) @binding(8) var inlineNoiseTex: texture_3d<f32>;
@group(0) @binding(9) var inlineNoiseSampler: sampler;
@group(0) @binding(10) var inlineOut: texture_storage_2d<rgba16float, write>;
struct InlineUni {
  tempK: f32, bright: f32, materialTime: f32, debrisPhase: f32,
  beam: f32, grav: f32, camLapse: f32, pivotOmega: f32,
  // checker: 0/1 disables checkerboarding, 2/3 encode enabled+parity,
  // 4..7 encode the quarter-rate phase. cameraStatic gates the EMPTY-tile
  // skip: pure-sky pixels cannot change while the pose holds.
  hazeKeep: f32, checker: f32, pixelAngle: f32, cameraStatic: f32,
  // exact: accumulation/capture frames bypass the content-classified tile
  // ladder entirely. Every accumulated sample must evaluate the SAME
  // estimator: a per-tile quadrature coarsening is a per-tile bias, and a
  // skipped tile freezes one jitter — both survive 64-sample averaging as
  // visible 8x8 seams precisely because averaging removes the noise that
  // masked them live.
  exact: f32, pad0: f32, pad1: f32, pad2: f32,
}
@group(0) @binding(11) var<uniform> I: InlineUni;
@group(0) @binding(12) var inlineDebrisColor: texture_2d<f32>;
@group(0) @binding(13) var inlineDebrisDist: texture_2d<f32>;
@group(0) @binding(14) var bakedOctavesLo: texture_3d<f32>;
@group(0) @binding(15) var bakedOctavesMid: texture_3d<f32>;
@group(0) @binding(16) var bakedOctavesHi: texture_3d<f32>;
@group(0) @binding(17) var inlineFront: texture_storage_2d<rgba16float, write>;
@group(0) @binding(18) var<storage, read> tileModes: array<u32>;
// Per-ray debris layer, fetched once in main before tracing. The march
// composites it at its mean distance along the bent ray so the medium in
// front veils the debris and the debris occludes the medium and stars behind.
var<private> granularRGB: vec3f = vec3f(0.0);
var<private> granularCov: f32 = 0.0;
var<private> granularDist: f32 = 1e30;
var<private> granularPending: bool = false;
// Front/back layer split for full-rate debris recomposition: the march
// stores radiance before the debris crossing, the scalar transmittance at
// it, and post-crossing radiance with the coverage factor divided out (the
// division is exact per channel because every post-crossing contribution
// carries (1-cov) through the spectral transmission powers). A cheap
// per-frame compose pass then rebuilds the image from the FRESH debris
// buffer, so rocks never inherit checkerboard staleness.
var<private> granularFrontRGB: vec3f = vec3f(0.0);
var<private> granularFrontScalar: f32 = -1.0;
var<private> granularCrossCov: f32 = 0.0;
// Accumulated path length spent near the photon sphere. Rays forming the
// granulated rim band LINGER there (half-wraps and full wraps at small
// radius) while rays imaging the arcs merely transit, so path-below-radius
// separates the beyond-Nyquist regime precisely where a minimum-radius
// test would blur the whole upper arc. Drives the material/sky LOD fades.
var<private> rayRingPath: f32 = 0.0;
// Broad stream field hoisted to one fetch per geodesic chord: its texel
// pitch is several times the material substep, so per-substep sampling was
// pure redundant bandwidth.
var<private> chordStreamWeight: f32 = 0.0;
var<private> chordStreamFine: f32 = 0.5;
// Relativistic transfer factors vary slowly across one RK chord; the
// granular path evaluates them once at the chord midpoint.
var<private> chordShift: f32 = 1.0;
var<private> chordTemperature: f32 = 1.0;
// Content-classified quadrature: smooth-haze tiles keep full ray
// resolution but stretch their material substeps; nothing is resampled, so
// no seam or checker artifact class exists for this path.
var<private> granularQuadratureScale: f32 = 1.0;
${vd}
`,Dp=`
const NPGS_PI = 3.141592653589793;
const NPGS_REFERENCE_OUTER = 25.0;
const NPGS_REFERENCE_THIN = 0.75;
const NPGS_REFERENCE_HOPPER = 0.40;
override GRANULAR_MATERIAL: bool = false;
// NPGS's custom display mapping suppresses low radiance more strongly than
// Astra's ACES path. These are display-pipeline unit conversions: they retain
// the reference density topology and opacity ordering rather than retuning the
// procedural field to compensate for the host tone mapper.
const NPGS_TO_ASTRA_RADIANCE = 0.24;
const NPGS_TO_ASTRA_OPACITY = 0.34;

fn npgsWrapAngle(a: f32) -> f32 {
  return atan2(sin(a),cos(a));
}
fn npgsSoftSaturate(x: f32) -> f32 {
  return 1.0-1.0/(max(x,0.0)+1.0);
}
fn granularComposite(h: ptr<function,Hits>) {
  // Mark the debris crossing along this ray. The debris radiance itself is
  // NOT added here — the per-frame compose pass injects the fresh raster
  // layer at this stored split, so rocks update at full frame rate even
  // when the march itself is checkerboard-amortized. The coverage still
  // cuts the transmittance for everything farther, keeping occlusion and
  // the early tau stop physical.
  granularPending = false;
  granularFrontRGB = (*h).inlineRadiance;
  let remaining = clamp((*h).inlineTrans.r,0.0,1.0);
  granularFrontScalar = remaining;
  granularCrossCov = min(granularCov,0.999);
  let left = remaining*(1.0-granularCov);
  (*h).inlineTrans = pow(vec3f(left),vec3f(1.0,1.6,2.5));
  if (left < 0.004) { (*h).tauStop = 1u; }
}
fn npgsShape(x0: f32, alpha: f32, beta: f32) -> f32 {
  let x = clamp(x0,0.0,1.0);
  let norm = pow(alpha+beta,alpha+beta)
    /max(pow(alpha,alpha)*pow(beta,beta),1e-8);
  return norm*pow(max(x,1e-8),alpha)*pow(max(1.0-x,1e-8),beta);
}
fn npgsLatticeValue(cell: vec3f) -> f32 {
  return 2.0*fract(sin(dot(cell,vec3f(12.9898,78.233,213.765)))
    *43758.5453)-1.0;
}
fn npgsValueNoise(position: vec3f) -> f32 {
  let cell = floor(position);
  let q0 = fract(position);
  let q = q0*q0*(3.0-2.0*q0);
  let a0 = mix(npgsLatticeValue(cell),
               npgsLatticeValue(cell+vec3f(1.0,0.0,0.0)),q.x);
  let a1 = mix(npgsLatticeValue(cell+vec3f(0.0,1.0,0.0)),
               npgsLatticeValue(cell+vec3f(1.0,1.0,0.0)),q.x);
  let b0 = mix(npgsLatticeValue(cell+vec3f(0.0,0.0,1.0)),
               npgsLatticeValue(cell+vec3f(1.0,0.0,1.0)),q.x);
  let b1 = mix(npgsLatticeValue(cell+vec3f(0.0,1.0,1.0)),
               npgsLatticeValue(cell+vec3f(1.0,1.0,1.0)),q.x);
  return mix(mix(a0,a1,q.y),mix(b0,b1,q.y),q.z);
}
fn bakedLevelWeight(l: f32, s: f32, e: f32) -> f32 {
  return max(0.0, min(e, l+1.0)-max(s, l));
}
fn bakedDiskNoise(p: vec3f, s: f32, e: f32, contrast: f32) -> f32 {
  // Log-domain reconstruction of the eleven-octave product from the startup
  // bake (see wgsl/noise-bake.ts): the per-octave ln(1+0.1v) terms sum with
  // the original window weights, and ln(10) cancels against the 0.1 of the
  // reference's display transform. Two to three fetches replace ~33 lattice
  // evaluations per call. Levels 7+ carry zero weight for every reachable
  // window and are dropped.
  var accLog = 0.0;
  let wm2 = bakedLevelWeight(-2.0,s,e); let wm1 = bakedLevelWeight(-1.0,s,e);
  if (wm2+wm1 > 0.0) {
    let t = textureSampleLevel(bakedOctavesLo,inlineNoiseSampler,p/81.0,0.0);
    accLog += wm2*t.r+wm1*t.g;
  }
  let w0 = bakedLevelWeight(0.0,s,e); let w1 = bakedLevelWeight(1.0,s,e);
  if (w0+w1 > 0.0) {
    let t = textureSampleLevel(bakedOctavesMid,inlineNoiseSampler,p/27.0,0.0);
    accLog += w0*t.r+w1*t.g;
  }
  let w2 = bakedLevelWeight(2.0,s,e); let w3 = bakedLevelWeight(3.0,s,e);
  if (w2+w3 > 0.0) {
    let t = textureSampleLevel(bakedOctavesHi,inlineNoiseSampler,p/3.0,0.0);
    accLog += w2*t.r+w3*t.g;
  }
  let w4 = bakedLevelWeight(4.0,s,e); let w5 = bakedLevelWeight(5.0,s,e);
  if (w4+w5 > 0.0) {
    let t = textureSampleLevel(bakedOctavesLo,inlineNoiseSampler,p*9.0,0.0);
    accLog += w4*t.b+w5*t.a;
  }
  let w6 = bakedLevelWeight(6.0,s,e);
  if (w6 > 0.0) {
    let t = textureSampleLevel(bakedOctavesMid,inlineNoiseSampler,p*27.0,0.0);
    accLog += w6*t.b;
  }
  return log(1.0+pow(max(exp(accLog),1e-6),contrast));
}
fn npgsDiskNoise(position: vec3f, startLevel: f32,
                 endLevel: f32, contrast: f32) -> f32 {
  if (GRANULAR_MATERIAL) {
    return bakedDiskNoise(position,startLevel,endLevel,contrast);
  }
  // The fidelity oracle deliberately keeps the reference's procedural cubic
  // lattice instead of substituting Astra's prefiltered production texture.
  var accumulator = 10.0;
  for (var level: i32 = -2; level < 9; level++) {
    let lf = f32(level);
    let weight = max(0.0,min(endLevel,lf+1.0)-max(startLevel,lf));
    if (weight > 0.0) {
      let value = npgsValueNoise(position*pow(3.0,lf));
      accumulator *= 1.0+0.1*value*weight;
    }
  }
  return log(1.0+pow(max(0.1*accumulator,1e-6),contrast));
}
fn npgsEffectiveRadius(r: f32, inner: f32, outer: f32) -> f32 {
  let x = clamp((r-inner)/max(outer-inner,1e-6),0.0,1.0);
  let curve = max(1.0,(outer-inner)/10.0);
  if (abs(curve-1.0) < 1e-5) { return x; }
  return clamp((-1.0+sqrt(max(0.0,1.0+4.0*curve*curve*x
    -4.0*x*curve)))/(2.0*curve-2.0),0.0,1.0);
}
fn npgsSpiralIntegral(r: f32, spin: f32) -> f32 {
  let u = sqrt(max(r,1e-6));
  let k3 = spin*0.70710678;
  if (abs(k3) < 0.001*u*u*u) {
    let invU = 1.0/u;
    let eps3 = k3*invU*invU*invU;
    return -16.9705627*invU
      *(1.0-0.25*eps3+0.142857*eps3*eps3);
  }
  let k = sign(k3)*pow(abs(k3),0.33333333);
  let logTerm = (r-k*u+k*k)/max((u+k)*(u+k),1e-9);
  return (5.6568542/k)*(0.5*log(max(logTerm,1e-9))
    +1.7320508*(atan2(2.0*u-k,1.7320508*k)-1.5707963));
}
fn npgsSeamedBodyNoise(r: f32, z: f32, theta: f32,
                       outer: f32, noiseLevel: f32,
                       levelMut: f32, contrastMut: f32,
                       materialTime: f32) -> f32 {
  let rotR = r+materialTime/12.0;
  let angularScale = 0.02*pow(outer,0.7);
  var result = npgsDiskNoise(
    vec3f(0.1*rotR,0.1*z,angularScale*theta),
    noiseLevel+2.0-levelMut,noiseLevel+4.0-levelMut,
    80.0-contrastMut);
  let seam = theta+NPGS_PI;
  if (seam < 0.1*NPGS_PI) {
    let wrapped = theta+2.0*NPGS_PI;
    let other = npgsDiskNoise(
      vec3f(0.1*rotR,0.1*z,angularScale*wrapped),
      noiseLevel+2.0-levelMut,noiseLevel+4.0-levelMut,
      80.0-contrastMut);
    result = mix(other,result,clamp(seam/(0.1*NPGS_PI),0.0,1.0));
  }
  return result;
}
fn npgsSeamedOuterWave(r: f32, z: f32, theta: f32,
                       outer: f32, noiseLevel: f32,
                       levelMut: f32, contrastMut: f32,
                       materialTime: f32) -> f32 {
  let radialTime = r*4.65114e-6-materialTime/30.0;
  let angularScale = 0.02*pow(outer,0.7);
  var result = npgsDiskNoise(
    vec3f(0.1*(radialTime-0.08*outer*theta),0.1*z,
          angularScale*theta),
    noiseLevel+2.0-levelMut,noiseLevel+3.0-levelMut,
    80.0-contrastMut);
  let seam = theta+NPGS_PI;
  if (seam < 0.1*NPGS_PI) {
    let wrapped = theta+2.0*NPGS_PI;
    let other = npgsDiskNoise(
      vec3f(0.1*(radialTime-0.08*outer*wrapped),0.1*z,
            angularScale*wrapped),
      noiseLevel+2.0-levelMut,noiseLevel+3.0-levelMut,
      80.0-contrastMut);
    result = mix(other,result,clamp(seam/(0.1*NPGS_PI),0.0,1.0));
  }
  return result;
}
fn inlineTemperature(r: f32) -> f32 {
  let x = max(r/U.diskIn,1.0001);
  return I.tempK*pow(x,-0.75)
    *pow(max(1.0-sqrt(0.97/x),0.0),0.25)*2.0;
}
fn inlineTransferFactor(r: f32, full: f32) -> f32 {
  let grav = sqrt(max(1.0-2.0/r,0.001))/max(I.camLapse,1e-5);
  let doppler = full/max(grav,1e-5);
  return mix(1.0,doppler,I.beam)*mix(1.0,grav,I.grav);
}
fn npgsAccumulate(h: ptr<function,Hits>, sampleRgb: vec3f,
                  sampleAlpha: f32, stepLength: f32) {
  let stepRgb = max(sampleRgb,vec3f(0.0))*stepLength;
  let stepAlpha = max(sampleAlpha,0.0)*stepLength;
  let remaining = clamp((*h).inlineTrans.r,0.0,1.0);
  let attenuation = pow(vec3f(remaining),vec3f(1.0,1.6,2.5));
  let weighted = stepRgb*attenuation;
  let denominator = weighted.r+weighted.g+weighted.b;
  if (denominator > 1e-7) {
    let sumRgb = (stepRgb.r+stepRgb.g+stepRgb.b)*pow(remaining,1.6);
    var contribution = sumRgb*weighted/denominator;
    let contributionSum = max(
      contribution.r+contribution.g+contribution.b,1e-7);
    contribution *= pow(max(3.0*contribution/contributionSum,
                            vec3f(1e-6)),vec3f(0.5));
    (*h).inlineRadiance += contribution;
  }
  let alpha = clamp(1.0-remaining+stepAlpha*remaining,0.0,1.0);
  let left = 1.0-alpha;
  (*h).inlineTrans = pow(vec3f(left),vec3f(1.0,1.6,2.5));
  if (alpha > 0.99) { (*h).tauStop = 1u; }
}
fn inlineMaterialStep(h: ptr<function,Hits>, x: vec3f,
                      localDir: vec3f, stepLength: f32,
                      Er: f32, Lz: f32, lc: f32) {
  if ((*h).tauStop != 0u || U.hr <= 1e-5) { return; }
  if (GRANULAR_MATERIAL && granularPending
      && distance(U.camPos,x) >= granularDist) {
    // First material sample at or beyond the debris layer: composite it now,
    // before this sample's medium can wrongly veil matter in front of it.
    granularComposite(h);
    if ((*h).tauStop != 0u) { return; }
  }
  let worldR = ksr(x,U.a*U.a);
  if (worldR <= U.diskIn || worldR >= U.diskOut) { return; }

  // Normalize Astra's user-selected extent into the reference disk's 25-unit
  // material domain. This preserves the reference feature count and its
  // default 0.75 + 0.40(r-3) volumetric thickness at any outer-radius setting.
  let referenceScale = NPGS_REFERENCE_OUTER/max(U.diskOut,1e-5);
  let r = worldR*referenceScale;
  let rho = length(x.xy)*referenceScale;
  let z = x.z*referenceScale;
  let inner = U.diskIn*referenceScale;
  let outer = NPGS_REFERENCE_OUTER;
  let thicknessScale = U.hr/0.055;
  let thin = NPGS_REFERENCE_THIN*thicknessScale;
  let hopper = NPGS_REFERENCE_HOPPER*thicknessScale;
  let geometricThin = thin+max(0.0,(rho-3.0)*hopper);
  let innerCloudRadius = (r-inner)/min(outer-inner,12.0);
  let innerCloudBound = max(geometricThin,thin)
    *max(0.0,1.0-5.0*innerCloudRadius*innerCloudRadius);
  let effective = npgsEffectiveRadius(r,inner,outer);
  let densityShape = npgsShape(effective,0.9,1.5);
  if (densityShape <= 1e-6) { return; }

  let phi = kerrSchildPhi(x,worldR,U.a);
  // Post-dip samples are imaged at extreme compression near the critical
  // curve — that regime extends well outside the photon sphere at high
  // spin. Shift the entire procedural octave window coarser there so the
  // base medium AND the noise-perturbed disk-edge cutoff stay band-limited;
  // sub-pixel jitter cannot integrate static cross-pixel decorrelation, so
  // the fix has to happen at the source field.
  let ringNoiseLod = 1.0-smoothstep(9.0,18.0,rayRingPath);
  let noiseLevel = max(0.0,2.0-0.6*geometricThin)
    -2.2*(1.0-ringNoiseLod);
  let logTheta = npgsWrapAngle(phi+2.0*log(max(r,1e-6)));
  let thicknessNoise = npgsDiskNoise(
    vec3f(1.5*logTheta,r+I.materialTime/12.0,0.0),
    noiseLevel-0.7,noiseLevel+1.3,80.0);
  let thickBase = 0.4+0.6*clamp(geometricThin-0.5,0.0,2.5)/2.5;
  let perturbedThickness = max(1e-6,geometricThin*densityShape
    *(thickBase+(1.0-thickBase)*npgsSoftSaturate(thicknessNoise)));
  if (abs(z) >= max(perturbedThickness,innerCloudBound)) { return; }

  let spiral = npgsSpiralIntegral(r,0.5*U.a);
  let inflowTheta = npgsWrapAngle(phi-spiral);
  let levelMut = 0.91*log(1.0+(0.06/0.91)
    *max(0.0,min(1000.0,r)-10.0));
  let contrastMut = 80.0*log(1.0+0.006
    *max(0.0,min(1000000.0,r)-10.0));

  var sampleValue = 0.0;
  var density = densityShape;
  if (abs(z) < perturbedThickness) {
    sampleValue = npgsSeamedBodyNoise(
      r,z,inflowTheta,outer,noiseLevel,levelMut,contrastMut,I.materialTime);
    if (r > max(0.15379*outer,0.15379*64.0)) {
      let outerWave = npgsSeamedOuterWave(
        r,z,logTheta,outer,noiseLevel,levelMut,contrastMut,I.materialTime);
      let waveBlend = 0.5+0.5*max(-1.0,
        1.0-exp(-0.15*(100.0*r/max(outer,64.0)-20.0)));
      sampleValue *= mix(1.0,clamp(1.05*outerWave-0.5,0.0,3.0),
                         waveBlend);
    }
    let vertical = max(0.0,1.0-abs(z)/perturbedThickness);
    density *= 0.7*vertical*density;
  }

  var sampleRgb = vec3f(sampleValue*density*1.4);
  var sampleAlpha = sampleValue*density*density/0.3;
  if (abs(z) < perturbedThickness) {
    let relativeHeight = clamp(abs(z)/perturbedThickness,0.0,1.0);
    sampleRgb *= max(0.0,0.2+2.0*sqrt(relativeHeight*relativeHeight+0.001));
  }

  // The separately rotating inner cloud is a real second volumetric component,
  // not a painted layer. It survives where the main spiral body thins out.
  if (abs(z) < innerCloudBound) {
    let innerOmega = 1.0/(pow(max(3.0,inner),1.5)+0.5*U.a);
    let timePhase = innerOmega*I.materialTime;
    let innerTheta = npgsWrapAngle(phi-0.666666*timePhase);
    let dustIntensity = max(1.0-pow(z/max(geometricThin
      *max(1.0-5.0*innerCloudRadius*innerCloudRadius,0.0001),1e-6),2.0),0.0);
    if (dustIntensity > 0.0) {
      let angular = 1.5*fract((1.5*innerTheta+timePhase)
        /(2.0*NPGS_PI))*2.0*NPGS_PI;
      let dust = npgsDiskNoise(vec3f(angular,r,z),0.0,6.0,80.0)
        *dustIntensity;
      let edgeOn = sqrt(max(0.0,1.0001-localDir.z*localDir.z));
      sampleRgb += vec3f(0.02*dust*edgeOn);
      sampleAlpha += 0.004*dust*edgeOn;
    }
  }

  var shift = chordShift;
  var temperature = chordTemperature;
  if (!GRANULAR_MATERIAL) {
    shift = clamp(inlineTransferFactor(
      worldR,kerrGAt(worldR,Er,Lz,lc)),0.03,32.0);
    temperature = inlineTemperature(worldR);
  }
  let visionTemperature = temperature*shift;
  let viewFactor = mix(0.2+0.8*abs(localDir.z),1.0,
                       clamp(geometricThin-0.8,0.2,1.0));
  var brightness = (0.05*min(outer/1000.0,1000.0/outer)
    +0.55/exp(5.0*effective)*viewFactor)
    *pow(max(temperature/max(I.tempK,1e-5),1e-5),1.0);
  sampleRgb *= brightness*bb(visionTemperature)
    *min(pow(shift,4.0),1.0)
    *min(1.0,1.3*(outer-r)/max(outer-inner,1e-6));
  sampleAlpha *= 0.125;

  let dilutionOuter = mix(min(outer,25.0),outer,
    smoothstep(6.0,max(0.05*outer,12.0),r));
  let thinBoost = 5.0/max(thin+0.5*hopper*dilutionOuter,0.2);
  let thickBoost = 100.0/max(dilutionOuter,1e-4);
  let boost = max(thinBoost,thickBoost);
  sampleRgb *= boost;
  sampleAlpha *= boost;

  let innerBrighten = mix(3.0,2.0,
    clamp((outer-50.0)/50.0,0.0,1.0));
  var innerRatio = 1.0-clamp(6.0*(r-inner)
    /max(outer-inner,1e-6),0.0,1.0);
  innerRatio *= innerRatio;
  sampleRgb *= NPGS_TO_ASTRA_RADIANCE*I.bright
    *(1.0+innerBrighten*innerRatio);
  sampleAlpha *= NPGS_TO_ASTRA_OPACITY*0.5
    *(1.0+(1.0+innerBrighten)*innerRatio);

  if (GRANULAR_MATERIAL) {
    // The debris layer itself is composited by the march (granularComposite)
    // the moment it crosses the layer's distance; the medium needs no
    // reciprocal suppression or reconstructed particle cells. What the smoke
    // does need is the same author: the co-moving stream field that decides
    // which debris clusters exist makes the smoke dustier inside those lanes
    // (more extinction, less emission) and cleaner between them, so unresolved
    // far matter keeps the granular lane texture the near field established.
    // No term here depends on observer distance — nothing can sweep a shell
    // or ring through the disk as the camera moves.
    let particleRadius = length(x.xy);
    let particlePhi = atan2(x.y,x.x);
    let rateScale = 0.70710678*pow(U.diskOut/25.0,1.5);
    let localOmega = 1.0
      /(particleRadius*sqrt(max(particleRadius,1e-6))+U.a);
    let localDebrisOmega = -rateScale*localOmega;
    let debrisPivot = -rateScale*I.pivotOmega;
    let sourceAngle = particlePhi-I.debrisPhase
      -(localDebrisOmega-debrisPivot)*I.materialTime;
    let streamWeight = chordStreamWeight;
    let fine = chordStreamFine;
    // Strand-anisotropic columnar crust: high radial frequency with long
    // tangential coherence, fetched once at a fixed texture height (integer
    // angular multiplier, seam-free at the atan2 wrap). Differentially
    // sheared ring strands are what the reference shows as near-solid flow
    // lines; the fine channel breaks each strand into grain without
    // severing it.
    let crustPosition = vec3f(
      0.80*particleRadius,
      sourceAngle/(2.0*NPGS_PI)+0.55*log(max(particleRadius,1.0)),
      0.37);
    // Footprint-driven LOD: one pixel spans ever more source space with
    // distance and lensing compression; sampling the crust at its matching
    // mip lets the thresholded strand pattern converge to its mean tone
    // instead of aliasing into sand across the far disk and arcs.
    let sampleFootprint = distance(U.camPos,x)*I.pixelAngle;
    let crustLod = clamp(log2(max(sampleFootprint*51.2,1.0)),0.0,5.0);
    let crustField = textureSampleLevel(
      inlineNoiseTex,inlineNoiseSampler,crustPosition,crustLod);
    let strand = crustField.y;
    let crust = clamp(0.80*strand+0.20*crustField.w,0.0,1.0);
    // Grain reaches everywhere (soft floor); real darkening and haze
    // thinning start only outside the luminous inner sheet, and the dark
    // phase grows from minority strands at mid radii to majority crust far
    // out — the reference keeps a glowing sheet under the grain until the
    // outer body.
    let emberZone = 0.30+0.70*smoothstep(0.12,0.36,effective);
    let darkZone = smoothstep(0.16,0.42,effective);
    let outerness = smoothstep(0.35,0.85,effective);
    // The dark particulate phase lives in the same thin equatorial sheet as
    // the raster debris. Grazing rays then cross one strand layer instead of
    // integrating many clump columns into murk, and the flared smoke above
    // remains haze.
    let sheet = 1.0-smoothstep(0.42,0.85,
      abs(z)/max(perturbedThickness,1e-5));
    // Samples taken after the ray has dipped near the photon sphere image
    // at far-beyond-Nyquist compression: fade the strand/grain modulation
    // there so the ring shows the smooth base medium instead of speckle.
    // Foreground material is sampled before the dip and keeps full texture.
    let ringLod = ringNoiseLod;
    let clumpDark = smoothstep(mix(0.44,0.29,outerness),
      mix(0.56,0.41,outerness),crust);
    let grain = clamp(0.55*crustField.x+0.45*crustField.z,0.0,1.0);
    // Strand AUTHORSHIP, not modulation: multiplying the strongly patterned
    // silky base field by strands still reads as silk. Inside the ember
    // sheet the base pattern is divided out at matched scale and the
    // strand/grain field becomes the luminance structure itself — dark
    // strand bodies against bright thin cracks, broken by grain — which is
    // what the reference shows as dense, near-solid flow lines. The base
    // field keeps authoring the luminous inner sheet and the off-sheet
    // haze; deep debris lanes press authorship harder.
    let authorship = darkZone*sheet*ringLod
      *(0.72+0.20*streamWeight);
    let crackPattern = 1.0-clumpDark;
    var strandLum = mix(0.10,1.55,crackPattern)*(0.55+0.45*grain);
    strandLum *= 1.0+0.18*smoothstep(0.55,0.95,effective);
    let carrier = sampleRgb/max(sampleValue,0.12);
    sampleRgb = mix(sampleRgb,carrier*strandLum*0.80,authorship);
    sampleAlpha *= mix(1.0,mix(0.75,3.40,clumpDark),authorship);
    // Non-authored phases keep a granular stipple of the same field so no
    // region of the medium reverts to silk.
    let grainZone = emberZone*(0.45+0.55*sheet)*ringLod*(1.0-authorship);
    sampleRgb *= mix(1.0,mix(0.62,1.42,grain),grainZone);
    sampleAlpha *= mix(1.0,mix(1.20,0.86,grain),grainZone);
    // Off-sheet haze thins in the ember zone so the disk reads as a compact
    // granular sheet rather than a fat torus of smoke. The retention target
    // is the live "Debris haze" knob: 1 keeps the full B haze around the
    // debris, lower values thin it harder.
    sampleRgb *= mix(1.0,I.hazeKeep,darkZone*(1.0-sheet));
  }
  npgsAccumulate(h,sampleRgb,sampleAlpha,stepLength);
}
fn inlineMarchChord(h: ptr<function,Hits>, x0: vec3f, x1: vec3f,
                    Er: f32, Lz: f32, lc: f32,
                    phase: ptr<function,f32>) {
  if ((*h).tauStop != 0u || U.hr <= 1e-5) { return; }
  let referenceScale = NPGS_REFERENCE_OUTER/max(U.diskOut,1e-5);
  let thicknessScale = U.hr/0.055;
  let maxReferenceHalf = NPGS_REFERENCE_THIN*thicknessScale
    +NPGS_REFERENCE_HOPPER*thicknessScale*NPGS_REFERENCE_OUTER+2.0;
  let maxWorldHalf = maxReferenceHalf/referenceScale;
  if ((x0.z > maxWorldHalf && x1.z > maxWorldHalf)
      || (x0.z < -maxWorldHalf && x1.z < -maxWorldHalf)) { return; }
  // Local flare bound: the global slab test above uses the widest possible
  // disk, but most grazing chords sit in the empty wedge far above the
  // local sheet. The beta density shape peaks at exactly 1, so the local
  // geometric flare (plus margin) bounds every perturbed thickness and the
  // inner cloud alike.
  let rhoRefMax = max(length(x0.xy),length(x1.xy))*referenceScale;
  let localFlare = (NPGS_REFERENCE_THIN
    +max(0.0,(rhoRefMax-3.0)*NPGS_REFERENCE_HOPPER))*thicknessScale;
  let localBound = (max(localFlare,NPGS_REFERENCE_THIN*thicknessScale)
    *1.06+0.4)/referenceScale;
  if ((x0.z > localBound && x1.z > localBound)
      || (x0.z < -localBound && x1.z < -localBound)) { return; }
  let chord = x1-x0;
  let chordLength = length(chord);
  if (chordLength <= 1e-7) { return; }
  let xy = chord.xy;
  let closest = clamp(-dot(x0.xy,xy)/max(dot(xy,xy),1e-9),0.0,1.0);
  if (length(x0.xy+closest*xy) > U.diskOut*1.10) { return; }
  // Inner-cavity cull: r_BL <= |x| always and |x| is convex along the
  // linear chord, so both endpoints inside diskIn keep every point in the
  // cavity where the material is exactly zero. Shadow-adjacent rays were
  // burning full substep loops there for nothing.
  if (max(dot(x0,x0),dot(x1,x1)) < U.diskIn*U.diskIn*0.9025) { return; }

  // Constant-coordinate-time Kerr–Schild spatial proper length, evaluated at
  // the chord midpoint exactly as the reference does for each geodesic step.
  let mid = 0.5*(x0+x1);
  let r = ksr(mid,U.a*U.a);
  let r2 = r*r;
  let denominator = r2*r2+U.a*U.a*mid.z*mid.z+1e-9;
  let metricF = 2.0*r*r2/denominator;
  let q = r2+U.a*U.a;
  let principal = vec3f(
    (r*mid.x+U.a*mid.y)/q,
    (r*mid.y-U.a*mid.x)/q,
    mid.z/r);
  let properWorld = sqrt(max(dot(chord,chord)
    +metricF*pow(dot(principal,chord),2.0),1e-9));
  let totalDistance = properWorld*referenceScale;
  let localDir = normalize(chord);
  if (GRANULAR_MATERIAL) {
    // One broad stream fetch per chord (see the private declarations): the
    // field's texel pitch is several substeps wide, so the chord midpoint
    // represents every sample in it.
    let midRadius = length(mid.xy);
    let midPhi = atan2(mid.y,mid.x);
    let rateScale = 0.70710678*pow(U.diskOut/25.0,1.5);
    let localOmega = 1.0/(midRadius*sqrt(max(midRadius,1e-6))+U.a);
    let midSourceAngle = midPhi-I.debrisPhase
      -(-rateScale*localOmega-(-rateScale*I.pivotOmega))*I.materialTime;
    let streamPosition = vec3f(
      0.075*midRadius,
      midSourceAngle/(2.0*NPGS_PI)+0.11*log(max(midRadius,1.0)),
      0.35*mid.z);
    let chordFootprint = distance(U.camPos,mid)*I.pixelAngle;
    let streamLod = clamp(log2(max(chordFootprint*4.76,1.0)),0.0,5.0);
    let streamField = textureSampleLevel(
      inlineNoiseTex,inlineNoiseSampler,streamPosition,streamLod);
    let streamRaw = clamp(0.52*streamField.x+0.30*streamField.y
      +0.18*streamField.z,0.0,1.0);
    chordStreamWeight = smoothstep(0.30,0.72,streamRaw);
    chordStreamFine = streamField.w;
    let midWorldR = ksr(mid,U.a*U.a);
    chordShift = clamp(inlineTransferFactor(
      midWorldR,kerrGAt(midWorldR,Er,Lz,lc)),0.03,32.0);
    chordTemperature = inlineTemperature(midWorldR);
  }

  // Adaptive quadrature: heavily veiled samples and far-from-camera chords
  // contribute little per unit length, so the step stretches there (up to
  // ~3x). The per-ray phase jitter plus temporal accumulation hide the
  // coarser quadrature; optical depth stays correct because the true step
  // length is what enters the accumulator.
  let farBoost = 1.35*smoothstep(5.0,15.0,distance(U.camPos,x0));
  var traveled = 0.0;
  for (var sampleIndex = 0u; sampleIndex < 192u; sampleIndex++) {
    if (traveled >= totalDistance || (*h).tauStop != 0u) { break; }
    let veil = smoothstep(0.60,0.15,(*h).inlineTrans.r);
    let materialStep = 0.17*granularQuadratureScale
      *(1.0+1.2*veil+farBoost);
    let advance = (*phase)*materialStep;
    let next = min(totalDistance,traveled+advance);
    if (next >= totalDistance-1e-7) {
      (*phase) = max(0.0,(*phase)
        -(totalDistance-traveled)/materialStep);
      traveled = totalDistance;
      break;
    }
    traveled = next;
    (*phase) = 1.0;
    inlineMaterialStep(h,mix(x0,x1,traveled/totalDistance),
                       localDir,materialStep,Er,Lz,lc);
  }
}
`,kp=`    } else if (h.tauStop == 0u) {
      inlineMarchChord(&h,xP,x,Er,Lz,lc,&materialPhase);
    }
`,Np=`fn writeOut(gid: vec2u, h0: Hits) {
  var h = h0;
  if (GRANULAR_MATERIAL && granularPending) {
    // Terminal catch-up: the ray ended before any material sample crossed the
    // debris distance (debris beyond all sampled medium, or over the inner
    // cavity). Captured rays keep the layer only when it sits decisively on
    // the observer side of the hole; the raster black-hole-depth fade has
    // already removed genuine shadow crossers.
    if (h.capture == 0u || granularDist < length(U.camPos)-2.0) {
      granularComposite(&h);
    }
  }
  // The composite pass rasters its native-resolution catalog stars from
  // gRay's escape directions — a texture only the standard geometry
  // pipeline used to write. Inline-fidelity frames gate that pipeline off,
  // so the inline march must publish its own escape dirs or the star layer
  // multiplies by a dead validity bit and every star vanishes (exactly
  // what happened: materials B and C shipped starless from the moment the
  // standard-pipeline skip landed, and the busy disk hid it).
  let starDv = select(vec2f(0.0),clamp(h.dir,vec2f(-1.0),vec2f(1.0)),h.esc == 1u);
  var starDirWord = 0u;
  if (h.esc == 1u) { starDirWord = packOct16Precise(starDv); }
  textureStore(gRay,gid,vec4u(starDirWord,(h.esc&1u)<<2u,0u,0u));
  var skyRGB = vec3f(0.0);
  var skyA = 0.0;
  if (h.esc == 1u
      && max(h.inlineTrans.r,max(h.inlineTrans.g,h.inlineTrans.b)) > 0.0) {
    // Rays that skirted the photon sphere compress enormous sky solid angle
    // into one pixel; sample up the mip chain there so the piled-up star
    // images become the film's smooth ring glow instead of static.
    let skyLod = smoothstep(9.0,18.0,rayRingPath)*5.0;
    let sky = textureSampleLevel(
      inlineSky,inlineSkySampler,octDecode(h.dir),skyLod);
    skyRGB = sky.rgb;
    skyA = sky.a;
  }
  if (!GRANULAR_MATERIAL) {
    let color = h.inlineRadiance+h.inlineTrans*skyRGB;
    let starVisibility = dot(h.inlineTrans,
      vec3f(0.2126,0.7152,0.0722))*skyA;
    textureStore(inlineOut,gid,vec4f(color,starVisibility));
    return;
  }
  // Granular path: store the front/back layer split; the per-frame compose
  // pass injects the fresh debris raster between them. Everything behind the
  // crossing (medium and sky) has its coverage factor divided out — exactly
  // per channel, since each such term carries (1-cov) through the spectral
  // transmission powers — so recomposition with a new coverage is exact.
  let crossed = granularFrontScalar >= 0.0;
  let powers = vec3f(1.0,1.6,2.5);
  let invCov = 1.0/max(1.0-granularCrossCov,1e-3);
  var front = h.inlineRadiance;
  var frontScalar = clamp(h.inlineTrans.r,0.0,1.0);
  var back = skyRGB;
  var starBase = skyA*dot(pow(vec3f(clamp(h.inlineTrans.r,0.0,1.0)),powers),
    vec3f(0.2126,0.7152,0.0722));
  if (crossed) {
    front = granularFrontRGB;
    frontScalar = granularFrontScalar;
    let sansCovScalar = clamp(h.inlineTrans.r,0.0,1.0)*invCov
      /max(granularFrontScalar,1e-4);
    // Post-crossing medium radiance, then the sky, both normalized to unit
    // front transmittance and unit (1-cov).
    back = (h.inlineRadiance-granularFrontRGB)
      *pow(vec3f(invCov/max(granularFrontScalar,1e-4)),powers)
      +pow(vec3f(sansCovScalar),powers)*skyRGB;
    starBase = skyA*dot(pow(vec3f(sansCovScalar),powers),
      vec3f(0.2126,0.7152,0.0722));
  } else {
    // Never crossed: the whole march is the front layer; the sky is the
    // back layer at unit normalization (the compose multiplies by the front
    // transmittance), and any debris that appears here composites behind
    // all sampled medium.
    back = pow(vec3f(1.0),powers)*skyRGB;
    starBase = skyA;
    back = skyRGB;
  }
  // The sign of the stored scalar carries the crossed state: positive
  // means the split sits at the debris layer's distance, negative means the
  // ray never met the layer and the scalar is the final transmittance. The
  // compose veils fresh debris on never-crossed pixels at a consistent
  // mid-depth estimate, which removes the tile-age veiling mismatch that
  // made moving far rocks shimmer.
  let signedScalar = select(-max(frontScalar,1e-3),frontScalar,crossed);
  textureStore(inlineFront,gid,vec4f(front,signedScalar));
  textureStore(inlineOut,gid,vec4f(back,starBase));
}
`,Bp=`
@group(0) @binding(0) var composeFront: texture_2d<f32>;
@group(0) @binding(1) var composeBack: texture_2d<f32>;
@group(0) @binding(2) var composeDebris: texture_2d<f32>;
@group(0) @binding(3) var composeOut: texture_storage_2d<rgba16float, write>;
@group(0) @binding(4) var composeSamp: sampler;

// Full-rate recomposition: front + Tf^p · (debris + (1-cov)^p · back).
// Runs every frame at trivial cost, so the debris layer is always the
// current frame's raster even when the march is checkerboard-amortized.
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(composeOut);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let powers = vec3f(1.0,1.6,2.5);
  // Full-resolution layers: plain loads. The half-resolution upsample and
  // its sharpen were rejected — they destroyed the ring silhouette and
  // smoke texture for the sake of frame rate.
  let front = textureLoad(composeFront,gid.xy,0);
  let back = textureLoad(composeBack,gid.xy,0);
  let debris = textureLoad(composeDebris,gid.xy,0);
  let cov = clamp(debris.a,0.0,1.0);
  let crossed = front.a >= 0.0;
  let scalar = clamp(abs(front.a),0.0,1.0);
  // Crossed pixels veil debris at the exact crossing transmittance; pixels
  // whose stored split never met the layer use a mid-depth estimate for the
  // debris term only — smoke and sky keep their exact reconstruction, and
  // at zero coverage the estimate cancels entirely.
  let veilScalar = select(sqrt(scalar),scalar,crossed);
  let debrisVeil = pow(vec3f(veilScalar),powers);
  let smokeTrans = pow(vec3f(scalar),powers);
  let covTrans = pow(vec3f(1.0-cov),powers);
  let color = front.rgb
    +debrisVeil*max(debris.rgb,vec3f(0.0))
    +smokeTrans*covTrans*back.rgb;
  // Star visibility must carry the medium transmittance: for never-crossed
  // pixels the stored scalar IS the full trans, and for crossed pixels it
  // is the pre-crossing trans that completes starBase's post-crossing
  // factor exactly — either way one luminance-weighted multiply. This was
  // masked while gRay went unwritten (stars were globally dead); restoring
  // them exposed stars shining through the opaque disk body.
  let starVisibility = back.a*(1.0-cov)
    *dot(smokeTrans,vec3f(0.2126,0.7152,0.0722));
  textureStore(composeOut,gid.xy,vec4f(color,starVisibility));
}
`,Hp=()=>{let u=Op;return u=Ba(u,"@group(0) @binding(5) var<storage, read_write> sparseQueue: WorkQueueWrite;",`@group(0) @binding(5) var<storage, read_write> sparseQueue: WorkQueueWrite;
`+Lp,"inline bindings"),u=Ba(u,`  needsRefine: u32,
  dir: vec2f,`,`  needsRefine: u32,
  inlineRadiance: vec3f, inlineTrans: vec3f,
  dir: vec2f,`,"inline ray transfer"),u=D1(u,"fn writeOut(gid: vec2u, h: Hits) {","fn rayDir(",Np,"packed output"),u=Ba(u,"/* Kerr needs no phase-space bucket moments: its full frequency shift follows",`${Dp}
/* Kerr needs no phase-space bucket moments: its full frequency shift follows`,"inline material functions"),u=Ba(u,`  var h: Hits;
  let a2c = U.a*U.a;`,`  var h: Hits;
  h.inlineRadiance = vec3f(0.0);
  h.inlineTrans = vec3f(1.0);
  let a2c = U.a*U.a;`,"inline transfer initialization"),u=Ba(u,"    let dlBase = clamp(0.055*r*(0.4+r/(r+3.0)), 0.03, select(1.5, 2.6, r > 20.0 && abs(x.z) > 3.0));",`    var dlBase = clamp(0.055*r*(0.4+r/(r+3.0)), 0.03, select(1.5, 2.6, r > 20.0 && abs(x.z) > 3.0));
    // Production-C far-field stretch: the granular look path tolerates
    // slightly coarser weak-field integration; the B oracle keeps exact
    // steps because the override folds this to a no-op there.
    if (GRANULAR_MATERIAL) { dlBase *= 1.0+0.45*smoothstep(7.0,18.0,r); }`,"far-field step stretch"),u=Ba(u,"    radiusState = nextRadius;",`    if (rn < 4.6) { rayRingPath += dl; }
    radiusState = nextRadius;`,"ring LOD tracker"),u=Ba(u,"  let h = trace(rayDir(fullPixel, fullDims));",`  if (GRANULAR_MATERIAL && I.checker > 7.5) {
    // Eighth-rate 2x4 tile cycle for a parked camera: per-tile
    // material refresh in hertz stays at the level the quarter
    // cycle already ships, because the frame rate rises with the
    // amortization. Debris stays full-rate through the compose
    // split. SIMD-coherent by whole tiles.
    let phase = u32(I.checker) - 8u;
    let laneX = outPixel.x - workgroupId.x*8u;
    let laneY = outPixel.y - workgroupId.y*8u;
    outPixel.x = (workgroupId.x*2u + (phase & 1u))*8u + laneX;
    outPixel.y = (workgroupId.y*4u + (phase >> 1u))*8u + laneY;
    fullPixel = outPixel;
    if (outPixel.x >= fullDims.x || outPixel.y >= fullDims.y) { return; }
  } else if (GRANULAR_MATERIAL && I.checker > 3.5) {
    // Quarter-rate 2x2 tile cycle for slow motion: the dispatch
    // covers a quarter of the 8x8 tiles; debris stays full-rate
    // through the compose split, so only slow-moving smoke
    // amortizes. SIMD-coherent by whole tiles.
    let phase = u32(I.checker) - 4u;
    let laneX = outPixel.x - workgroupId.x*8u;
    let laneY = outPixel.y - workgroupId.y*8u;
    outPixel.x = (workgroupId.x*2u + (phase & 1u))*8u + laneX;
    outPixel.y = (workgroupId.y*2u + ((phase >> 1u) & 1u))*8u + laneY;
    fullPixel = outPixel;
    if (outPixel.x >= fullDims.x || outPixel.y >= fullDims.y) { return; }
  } else if (GRANULAR_MATERIAL && I.checker > 1.5) {
    // Half-rate tile checkerboard for fast motion. Pixel-parity
    // skipping saves nothing because both parities share every
    // simdgroup; whole 8x8 tiles alternate instead.
    let shift = (workgroupId.y + (u32(I.checker) & 1u)) & 1u;
    let lane = outPixel.x - workgroupId.x*8u;
    outPixel.x = (workgroupId.x*2u + shift)*8u + lane;
    fullPixel = outPixel;
    if (outPixel.x >= fullDims.x) { return; }
  }
  if (GRANULAR_MATERIAL && I.exact < 0.5) {
    // Content classification from the previous frame: pure-sky
    // tiles skip entirely while the camera is static, smooth-haze
    // tiles coarsen only their material quadrature, and anything
    // with debris, silhouette, or gradient stays exact (mode 0,
    // also the zero-initialized cold-start default). Exact frames
    // (idle accumulation, capture) bypass classification: the
    // shortcuts are biased per tile, and any bias that all samples
    // share becomes an 8x8 seam once averaging strips the noise.
    let classifyTilesX = (outDims.x+7u)/8u;
    let tileMode = tileModes[
      (outPixel.y/8u)*classifyTilesX+(outPixel.x/8u)];
    if (tileMode == 2u && I.cameraStatic > 0.5) { return; }
    if (tileMode == 1u) { granularQuadratureScale = 2.5; }
  }
  if (GRANULAR_MATERIAL) {
    // Filtered fetch at the ray cell centre: the debris raster is
    // full-resolution while the march may run at half resolution;
    // the compose pass injects the exact full-res layer, so the
    // march only needs the local mean coverage and distance.
    let debrisUv = (vec2f(outPixel)+vec2f(0.5))/vec2f(outDims);
    let debrisTexel = textureSampleLevel(
      inlineDebrisColor,inlineSkySampler,debrisUv,0.0);
    granularCov = clamp(debrisTexel.a,0.0,1.0);
    if (granularCov > 1e-4) {
      let debrisDistTexel = textureSampleLevel(
        inlineDebrisDist,inlineSkySampler,debrisUv,0.0);
      granularRGB = max(debrisTexel.rgb,vec3f(0.0));
      granularDist = debrisDistTexel.x/max(debrisDistTexel.y,1e-5);
      granularPending = true;
    }
  }
  let h = trace(rayDir(fullPixel, fullDims));`,"debris layer fetch"),u=Ba(u,`  var transUB = 1.0;
  let n = u32(clamp(U.maxSteps, 1.0, 640.0));`,`  var transUB = 1.0;
  var materialPhase = 0.05+0.95*h13(dir*173.0);
  let n = u32(clamp(U.maxSteps, 1.0, 640.0));`,"material phase initialization"),u=D1(u,`    } else if (h.tauStop == 0u) {
      // Medium quadrature over the completed Kerr RK chord.`,"    zP = x.z;",kp,"cached volume branch"),`// ASTRA fidelity-first inline Kerr volume.
${u}`},Gp=`
struct DebrisUniforms {
  camPosTan: vec4f,
  rightAspect: vec4f,
  upNear: vec4f,
  forwardFar: vec4f,
  disk: vec4f,
  motion: vec4f,
  viewport: vec4f,
  jitter: vec4f,
}
@group(0) @binding(0) var<uniform> U: DebrisUniforms;
@group(0) @binding(1) var debrisNoise: texture_3d<f32>;
@group(0) @binding(2) var debrisNoiseSampler: sampler;
// Deterministically compacted alive clusters from the cull pass: id,
// stream weight, crust darkness. Member randoms key on the original
// virtual instance ids, so the population is pixel-identical to the
// direct mapping.
@group(0) @binding(3) var<storage, read> aliveClusters: array<vec4f>;
// Member records from the expansion passes: the whole placement chain
// runs once per member there. r0 = centre + tint, r1 = scale + virtual
// id, r2 = stream weight, crust darkness, orbit angle (large only; the
// frame is stored exactly, never reconstructed from the centre).
@group(0) @binding(4) var<storage, read> microRecords: array<vec4f>;
@group(0) @binding(5) var<storage, read> largeRecords: array<vec4f>;

const PI: f32 = 3.141592653589793;
const PHI: f32 = 1.618033988749895;
const MICRO_INSTANCE_OFFSET: u32 = 98304u;
// One cluster field authors both tiers: cluster k owns eight large members
// and sixty-four micro members — 98304/8 == 786432/64 == 12288.
const LARGE_CLUSTER_MEMBERS: u32 = 8u;
const MICRO_CLUSTER_MEMBERS: u32 = 64u;
const CLUSTER_ID_SALT: u32 = 0x51ed270bu;
// Facets stop being resolvable near this projected half-size; below it the
// mesh hands its identity to the analytic silhouette representation.
const MESH_MIN_HALF_PX: f32 = 1.35;
override MICRO_DEBRIS: bool = false;
const ROCK_VERTICES = array<vec3f, 12>(
  vec3f(-1.0, PHI, 0.0), vec3f(1.0, PHI, 0.0),
  vec3f(-1.0, -PHI, 0.0), vec3f(1.0, -PHI, 0.0),
  vec3f(0.0, -1.0, PHI), vec3f(0.0, 1.0, PHI),
  vec3f(0.0, -1.0, -PHI), vec3f(0.0, 1.0, -PHI),
  vec3f(PHI, 0.0, -1.0), vec3f(PHI, 0.0, 1.0),
  vec3f(-PHI, 0.0, -1.0), vec3f(-PHI, 0.0, 1.0),
);
const ROCK_INDICES = array<u32, 60>(
  0u, 11u, 5u, 0u, 5u, 1u, 0u, 1u, 7u, 0u, 7u, 10u, 0u, 10u, 11u,
  1u, 5u, 9u, 5u, 11u, 4u, 11u, 10u, 2u, 10u, 7u, 6u, 7u, 1u, 8u,
  3u, 9u, 4u, 3u, 4u, 2u, 3u, 2u, 6u, 3u, 6u, 8u, 3u, 8u, 9u,
  4u, 9u, 5u, 2u, 4u, 11u, 6u, 2u, 10u, 8u, 6u, 7u, 9u, 8u, 1u,
);
const GRAIN_CORNERS = array<vec2f, 6>(
  vec2f(-1.0,-1.0), vec2f(1.0,-1.0), vec2f(1.0,1.0),
  vec2f(-1.0,-1.0), vec2f(1.0,1.0), vec2f(-1.0,1.0),
);

fn hashU32(value: u32) -> u32 {
  var x = value;
  x = (x ^ (x >> 16u)) * 0x7feb352du;
  x = (x ^ (x >> 15u)) * 0x846ca68bu;
  return x ^ (x >> 16u);
}
fn random01(instance: u32, lane: u32) -> f32 {
  return f32(hashU32(instance * 0x9e3779b9u + lane * 0x85ebca6bu)
    & 0x00ffffffu) / 16777216.0;
}
fn clusterRandom(cluster: u32, lane: u32) -> f32 {
  return random01(cluster ^ CLUSTER_ID_SALT, lane);
}
fn rotateAxis(point: vec3f, axis: vec3f, angle: f32) -> vec3f {
  let c = cos(angle);
  let s = sin(angle);
  return point * c + cross(axis, point) * s
    + axis * dot(axis, point) * (1.0 - c);
}
fn debrisDensityShape(radius: f32) -> f32 {
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let r = radius*referenceScale;
  let inner = U.disk.x*referenceScale;
  let x = clamp((r-inner)/max(25.0-inner,1e-6),0.0,1.0);
  let curve = max(1.0,(25.0-inner)/10.0);
  var effective = x;
  if (abs(curve-1.0) >= 1e-5) {
    effective = clamp((-1.0+sqrt(max(
      0.0,1.0+4.0*curve*curve*x-4.0*x*curve)))
      /(2.0*curve-2.0),0.0,1.0);
  }
  let alpha = 0.9;
  let beta = 1.5;
  let norm = pow(alpha+beta,alpha+beta)
    /max(pow(alpha,alpha)*pow(beta,beta),1e-8);
  return norm*pow(max(effective,1e-8),alpha)
    *pow(max(1.0-effective,1e-8),beta);
}
fn debrisBaseHalfHeight(radius: f32, densityShape: f32) -> f32 {
  // Match the NPGS carrier's 0.75 + 0.40(r-3) reference flare and its radial
  // density collapse so debris occupies the same envelope as the smoke.
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let referenceRadius = radius*referenceScale;
  let thicknessScale = U.disk.z/0.055;
  let thin = 0.75*thicknessScale;
  let hopper = 0.40*thicknessScale;
  let geometricThin = thin+max(0.0,(referenceRadius-3.0)*hopper);
  return max(0.008,geometricThin*densityShape/referenceScale);
}
fn sharedStreamField(radius: f32, sourceAngle: f32,
                     sourceHeight: f32) -> vec4f {
  // Cylindrical coordinates make one texture period exactly seam-safe around
  // the disk. The logarithmic angular offset turns its broad cells into
  // spiral streams. inline-volume.ts uses this same mapping and LOD.
  let p = vec3f(
    0.075 * radius,
    sourceAngle / (2.0 * PI) + 0.11 * log(max(radius, 1.0)),
    0.35 * sourceHeight);
  // Population occupancy belongs to co-moving material space and mip zero;
  // the filtered fetch is still fully deterministic in that space (explicit
  // level, wrap-sampled), it only smooths between texels exactly like the
  // inline medium's crust so both see one continuous field.
  return textureSampleLevel(debrisNoise, debrisNoiseSampler, p, 0.0);
}
fn sharedStreamWeight(field: vec4f) -> f32 {
  let raw = clamp(0.52 * field.x + 0.30 * field.y
    + 0.18 * field.z, 0.0, 1.0);
  return smoothstep(0.30, 0.72, raw);
}
fn meshPoint(vertex: u32, instance: u32) -> vec3f {
  // The vertex-indexed perturbation is shared by adjacent faces, preserving a
  // watertight convex silhouette while breaking the perfect base polyhedron.
  let irregular = 0.76 + 0.34 * random01(instance, 31u + vertex);
  return normalize(ROCK_VERTICES[vertex]) * irregular;
}
fn mediumLight(center: vec3f) -> vec2f {
  // Debris is lit by the medium it is embedded in, with no artificial floor.
  // x: ambient glow proportional to the local plasma emission proxy — where
  // the smoke's perceived silhouette collapses, so does the debris.
  // y: directional irradiance from the hot inner annulus, gated to the disk's
  // support because the intervening medium absorbs it farther out.
  let radius = max(length(center.xy), 0.001);
  let dShape = debrisDensityShape(radius);
  let halfH = debrisBaseHalfHeight(radius, dShape);
  let vertical = exp(-0.5*center.z*center.z/max(halfH*halfH, 1e-6));
  let ambient = dShape*mix(0.35, 1.0, vertical);
  // The equatorial body absorbs most inner-annulus light before it reaches
  // matter far above or below the plane; without this, high-|z| foreground
  // rocks bloom as isolated orange points over the dim haze.
  let inner = clamp(10.0/(radius*radius+4.0), 0.0, 1.1)
    *pow(clamp(dShape, 0.0, 1.0), 0.6)
    *mix(0.25, 1.0, vertical);
  return vec2f(ambient, inner);
}

struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) @interpolate(flat) normal: vec3f,
  @location(1) @interpolate(flat) center: vec3f,
  // tint, visibility, impostor flag, observer distance
  @location(2) @interpolate(flat) misc: vec4f,
  @location(3) localUv: vec2f,
  // x: crust bed darkness — rocks inside dark clumps are the clump and stay
  // mostly unlit; rocks in cracks catch the glow.
  @location(4) @interpolate(flat) bed: vec2f,
}

@vertex
fn vs(@builtin(vertex_index) vertexIndex: u32,
      @builtin(instance_index) instance: u32) -> VertexOut {
  var out: VertexOut;
  let inner = U.disk.x;
  let outer = U.disk.y;

  // The micro tier reads its fully expanded member record; the large tier
  // keeps its verified in-shader member math over the compacted alive
  // cluster list. The override constant folds the unused side away.
  var center = vec3f(0.0);
  var scale = vec3f(0.0);
  var tint = 0.0;
  var virtualInstance = 0u;
  var streamWeight = 0.0;
  var clumpDark = 0.0;
  var radial = vec3f(1.0, 0.0, 0.0);
  var tangent = vec3f(0.0, 1.0, 0.0);
  {
    var recordBase = instance * 3u;
    var r0 = vec4f(0.0);
    var r1 = vec4f(0.0);
    var r2 = vec4f(0.0);
    if (MICRO_DEBRIS) {
      r0 = microRecords[recordBase];
      r1 = microRecords[recordBase + 1u];
      r2 = microRecords[recordBase + 2u];
    } else {
      r0 = largeRecords[recordBase];
      r1 = largeRecords[recordBase + 1u];
      r2 = largeRecords[recordBase + 2u];
      radial = vec3f(cos(r2.z), sin(r2.z), 0.0);
      tangent = vec3f(-radial.y, radial.x, 0.0);
    }
    center = r0.xyz;
    tint = r0.w;
    scale = r1.xyz;
    virtualInstance = u32(r1.w);
    streamWeight = r2.x;
    clumpDark = r2.y;
  }
  let observerDistance = distance(center, U.camPosTan.xyz);

  // ---- visibility: physical guards only, never a distance LOD ----
  // The inline integrator veils and eventually absorbs far debris with real
  // optical depth, so no observer-distance window exists to sweep a shell
  // through the disk. What remains: a near-clip guard and the black-hole
  // depth fade beyond which unlensed Euclidean geometry would be wrong.
  let nearFade = smoothstep(0.34, 0.72, observerDistance);
  let centerRelative = center - U.camPosTan.xyz;
  let centerCameraPosition = vec3f(
    dot(centerRelative, U.rightAspect.xyz),
    dot(centerRelative, U.upNear.xyz),
    dot(centerRelative, U.forwardFar.xyz));
  let blackHoleDepth = dot(-U.camPosTan.xyz, U.forwardFar.xyz);
  let foregroundWidth = max(0.8, 0.08 * U.disk.y);
  let foregroundFade = 1.0 - smoothstep(
    blackHoleDepth - foregroundWidth,
    blackHoleDepth + 0.35 * foregroundWidth,
    centerCameraPosition.z);
  // A straight-line image is only valid while the sightline stays outside the
  // photon-capture zone. Matter in the strong-field region whose apparent
  // position lands inside the shadow silhouette would really be lensed out to
  // the rim (and crushed by redshift), so fade it instead of painting glowing
  // grit over the void. A rock immediately in front of the camera is exempt:
  // its direct image legitimately silhouettes against the shadow.
  let rockRadius = length(center);
  let sight = centerRelative / max(observerDistance, 1e-4);
  let sightClosest = max(dot(-U.camPosTan.xyz, sight), 0.0);
  let sightImpact = length(U.camPosTan.xyz + sightClosest * sight);
  let strongField = 1.0 - smoothstep(4.8, 7.0, rockRadius);
  let shadowSight = 1.0 - smoothstep(5.8, 7.6, sightImpact);
  let nearCamera = 1.0 - smoothstep(1.6, 2.6, observerDistance);
  let directImageValid = 1.0
    - strongField * shadowSight * (1.0 - nearCamera);
  let lodFade = nearFade * foregroundFade * directImageValid;
  let geometryScale = sqrt(clamp(lodFade, 0.0, 1.0));

  let projectedHalfSize = max(scale.x, max(scale.y, scale.z))
    / max(centerCameraPosition.z, 0.001)
    / U.camPosTan.w * (0.5 * U.viewport.y);
  let actualProjectedHalfSize = geometryScale * projectedHalfSize;
  // Below ~1/50 px the analytic coverage itself is invisible; skipping is a
  // raster-cost floor, not a visual population change.
  let visible = actualProjectedHalfSize > 0.02;
  let asImpostor = MICRO_DEBRIS
    || actualProjectedHalfSize < MESH_MIN_HALF_PX;
  // Demoted or invisible large rocks collapse 54 of their 60 vertices to a
  // degenerate point; bail before the mesh-point/rotation math instead of
  // paying it per vertex for geometry the rasterizer discards.
  if (!MICRO_DEBRIS && vertexIndex >= 6u && (asImpostor || !visible)) {
    out.position = vec4f(2.0, 2.0, 2.0, 1.0);
    out.misc = vec4f(0.0);
    out.normal = vec3f(0.0, 0.0, 1.0);
    out.center = center;
    out.localUv = vec2f(0.0);
    out.bed = vec2f(0.0);
    return out;
  }

  var unscaledWorldOffset = vec3f(0.0);
  var fragmentNormal = normalize(U.camPosTan.xyz - center);
  var localUv = vec2f(0.0);
  var rasterInflation = 1.0;
  let turnSeed = random01(virtualInstance, 14u);
  if (asImpostor) {
    // Camera-facing analytic silhouette of the same rock: the quad is
    // inflated to a guaranteed raster footprint while the true area lives in
    // fractional edge coverage, so sub-pixel debris dims instead of blinking.
    var corner = vec2f(0.0);
    if (vertexIndex < 6u) { corner = GRAIN_CORNERS[vertexIndex]; }
    let turn = (turnSeed - 0.5) * 0.92;
    let turnC = cos(turn);
    let turnS = sin(turn);
    let rotatedCorner = vec2f(
      turnC * corner.x - turnS * corner.y,
      turnS * corner.x + turnC * corner.y);
    var quadHalf = vec2f(scale.y, scale.z);
    if (!MICRO_DEBRIS) {
      let meanScale = (scale.x + scale.y + scale.z) / 3.0;
      quadHalf = vec2f(1.15 * meanScale);
    }
    rasterInflation = clamp(
      0.85 / max(actualProjectedHalfSize, 1e-4), 1.0, 16.0);
    unscaledWorldOffset =
      U.rightAspect.xyz * rotatedCorner.x * quadHalf.x
      + U.upNear.xyz * rotatedCorner.y * quadHalf.y;
    localUv = corner * rasterInflation;
  } else {
    var turnAxis = vec3f(
      random01(virtualInstance, 11u) * 2.0 - 1.0,
      random01(virtualInstance, 12u) * 2.0 - 1.0,
      random01(virtualInstance, 13u) * 2.0 - 1.0);
    turnAxis = normalize(turnAxis + vec3f(0.001, 0.002, 0.003));
    let turn = turnSeed * 2.0 * PI;
    let faceStart = (vertexIndex / 3u) * 3u;
    let i0 = ROCK_INDICES[faceStart];
    let i1 = ROCK_INDICES[faceStart + 1u];
    let i2 = ROCK_INDICES[faceStart + 2u];
    let q0 = rotateAxis(meshPoint(i0, virtualInstance) * scale, turnAxis, turn);
    let q1 = rotateAxis(meshPoint(i1, virtualInstance) * scale, turnAxis, turn);
    let q2 = rotateAxis(meshPoint(i2, virtualInstance) * scale, turnAxis, turn);
    var q = q0;
    if (vertexIndex % 3u == 1u) { q = q1; }
    if (vertexIndex % 3u == 2u) { q = q2; }
    unscaledWorldOffset =
      radial * q.x + tangent * q.y + vec3f(0.0, 0.0, q.z);
    let localNormal = normalize(cross(q1 - q0, q2 - q0));
    fragmentNormal = normalize(
      radial * localNormal.x + tangent * localNormal.y
      + vec3f(0.0, 0.0, localNormal.z));
  }

  let worldOffset = unscaledWorldOffset * geometryScale * rasterInflation;
  let worldPosition = center + worldOffset;
  let relative = worldPosition - U.camPosTan.xyz;
  let cameraPosition = vec3f(
    dot(relative, U.rightAspect.xyz),
    dot(relative, U.upNear.xyz),
    dot(relative, U.forwardFar.xyz));
  out.normal = fragmentNormal;
  out.center = center;
  out.misc = vec4f(
    tint,
    select(0.0, 1.0, visible),
    select(0.0, 1.0, asImpostor),
    observerDistance);
  out.localUv = localUv;
  out.bed = vec2f(clumpDark, 0.0);

  let nearPlane = U.upNear.w;
  let farPlane = max(
    U.forwardFar.w,
    length(U.camPosTan.xyz) + U.disk.y + 2.0);
  if (!visible || cameraPosition.z <= nearPlane) {
    out.position = vec4f(2.0, 2.0, 2.0, 1.0);
    out.misc.y = 0.0;
    return out;
  }
  let clipZ = farPlane / (farPlane - nearPlane) * cameraPosition.z
    - farPlane * nearPlane / (farPlane - nearPlane);
  out.position = vec4f(
    // The same sub-pixel jitter as the geodesic rays, so debris edges
    // integrate under the temporal resolve instead of staying raw.
    cameraPosition.x / (U.camPosTan.w * U.rightAspect.w)
      + U.jitter.x * 2.0 / U.viewport.x * cameraPosition.z,
    cameraPosition.y / U.camPosTan.w
      - U.jitter.y * 2.0 / U.viewport.y * cameraPosition.z,
    clipZ,
    cameraPosition.z);
  return out;
}

struct FragOut {
  // Premultiplied radiance + coverage, composited by the inline integrator
  // at this layer's distance along each geodesic.
  @location(0) color: vec4f,
  // Coverage-weighted distance accumulator (dist·coverage, coverage): the
  // integrator recovers the mean debris distance per pixel from x/y.
  @location(1) dist: vec2f,
}

@fragment
fn fs(in: VertexOut, @builtin(front_facing) frontFacing: bool) -> FragOut {
  // fwidth converts the irregular silhouette into pixel coverage. The
  // inflated quad guarantees fragment invocation even when the true shard
  // is sub-pixel, eliminating binary sample-centre fizzle. Derivatives are
  // computed unconditionally (uniform control flow); the mesh path simply
  // ignores them.
  let theta = atan2(in.localUv.y, in.localUv.x);
  let edge = 0.74
    + 0.10 * sin(3.0 * theta + 11.0 * in.misc.x)
    + 0.055 * sin(5.0 * theta - 7.0 * in.misc.x);
  let signedDistance = length(in.localUv) - edge;
  let antialiasWidth = max(fwidth(signedDistance), 0.012);
  var coverage = in.misc.y;
  if (in.misc.z > 0.5) {
    coverage *= 1.0 - smoothstep(
      -antialiasWidth, antialiasWidth, signedDistance);
  }
  if (coverage <= 0.002) { discard; }
  let normal = select(-in.normal, in.normal, frontFacing);
  let cylindricalRadius = max(length(in.center.xy), 0.001);
  // Non-emissive matter lit by the disk itself: ambient glow follows the
  // local emission proxy and the hot inner annulus supplies the directional
  // term. Debris outside the medium's visible support goes dark with it
  // instead of floating as bright confetti past the smoke's edge.
  let light = mediumLight(in.center);
  let lightDirection = normalize(vec3f(
    -in.center.x, -in.center.y, 0.28 * cylindricalRadius));
  let diffuse = max(dot(normal, lightDirection), 0.0);
  let topFill = 0.5 + 0.5 * abs(normal.z);
  // Rocks inherit their bed's darkness: inside a dark clump the ambient
  // glow is mostly gone (the clump IS the dark matter), while the inner
  // annulus still rim-lights crack-side faces. This keeps debris reading as
  // dark grain against glow, never lit gravel over a darkened bed.
  let bed = in.bed.x;
  var illumination = U.viewport.z * (
    0.85 * light.x * (0.55 + 0.45 * topFill) * mix(1.0, 0.22, bed)
    + 1.2 * light.y * (0.10 + 0.90 * diffuse) * mix(1.0, 0.45, bed));
  // Reflected light climbs out of the same potential the smoke's transfer
  // does: dim by the relative (g_rock/g_camera)^4, so inner-cavity debris
  // fades toward black with the medium instead of glowing beside the shadow.
  // U.disk.w carries the camera lapse.
  if (U.disk.w > 0.0) {
    let lapse = sqrt(max(1.0 - 2.0 / max(length(in.center), 2.05), 0.0))
      / U.disk.w;
    illumination *= clamp(lapse * lapse * lapse * lapse, 0.0, 1.2);
  }
  // Desaturated char-brown family: the reference grain reads as burnt crust
  // against cream glow, never as saturated orange confetti.
  var albedo = mix(vec3f(0.075, 0.030, 0.010),
                   vec3f(0.46, 0.155, 0.044), in.misc.x);
  if (MICRO_DEBRIS) {
    // Grit cuts granular silhouettes out of the luminous medium rather than
    // becoming a second emission layer.
    illumination *= 0.80;
    albedo = mix(vec3f(0.025, 0.007, 0.002),
                 vec3f(0.30, 0.065, 0.010), in.misc.x);
  }
  let reflected = albedo * illumination;
  var out: FragOut;
  out.color = vec4f(reflected * coverage, coverage);
  out.dist = vec2f(in.misc.w * coverage, coverage);
  return out;
}
`,k1=[96,128,128],qp=`
struct BakeUni {
  cellsR: f32, cellsG: f32, period: f32, size: f32,
  seedR: f32, seedG: f32, seedAltR: f32, seedAltG: f32,
}
@group(0) @binding(0) var<uniform> B: BakeUni;
@group(0) @binding(1) var bakeOut: texture_storage_3d<rgba16float, write>;

fn bakeLattice(cell: vec3f, cells: f32, seed: f32) -> f32 {
  let wrapped = cell-floor(cell/cells)*cells;
  return 2.0*fract(sin(dot(wrapped+vec3f(seed),
    vec3f(12.9898,78.233,213.765)))*43758.5453)-1.0;
}
fn bakeValueNoise(position: vec3f, cells: f32, seed: f32) -> f32 {
  let cell = floor(position);
  let q0 = fract(position);
  let q = q0*q0*(3.0-2.0*q0);
  let a0 = mix(bakeLattice(cell,cells,seed),
               bakeLattice(cell+vec3f(1.0,0.0,0.0),cells,seed),q.x);
  let a1 = mix(bakeLattice(cell+vec3f(0.0,1.0,0.0),cells,seed),
               bakeLattice(cell+vec3f(1.0,1.0,0.0),cells,seed),q.x);
  let b0 = mix(bakeLattice(cell+vec3f(0.0,0.0,1.0),cells,seed),
               bakeLattice(cell+vec3f(1.0,0.0,1.0),cells,seed),q.x);
  let b1 = mix(bakeLattice(cell+vec3f(0.0,1.0,1.0),cells,seed),
               bakeLattice(cell+vec3f(1.0,1.0,1.0),cells,seed),q.x);
  return mix(mix(a0,a1,q.y),mix(b0,b1,q.y),q.z);
}
fn bakeTerm(position: vec3f, cells: f32, seed: f32) -> f32 {
  return log(1.0+0.1*bakeValueNoise(position,cells,seed));
}

@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let size = u32(B.size);
  if (gid.x >= size || gid.y >= size || gid.z >= size) { return; }
  // Texel centres over one tiling period.
  let unit = (vec3f(gid)+vec3f(0.5))/B.size;
  let posR = unit*B.cellsR;
  let posG = unit*B.cellsG;
  textureStore(bakeOut, gid, vec4f(
    bakeTerm(posR, B.cellsR, B.seedR),
    bakeTerm(posG, B.cellsG, B.seedG),
    bakeTerm(posR, B.cellsR, B.seedAltR),
    bakeTerm(posG, B.cellsG, B.seedAltG)));
}
`,Vp=`
struct TileUni { tilesX: u32, tilesY: u32, width: u32, height: u32 }
@group(0) @binding(0) var<uniform> T: TileUni;
@group(0) @binding(1) var tileFront: texture_2d<f32>;
@group(0) @binding(2) var tileBack: texture_2d<f32>;
@group(0) @binding(3) var tileDebris: texture_2d<f32>;
@group(0) @binding(4) var<storage, read_write> tileModes: array<u32>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let tileIndex = gid.x;
  if (tileIndex >= T.tilesX*T.tilesY) { return; }
  let tile = vec2u(tileIndex % T.tilesX, tileIndex / T.tilesX);
  let base = tile*8u;
  var lumMin = 1e30;
  var lumMax = 0.0;
  var scalarMin = 1.0;
  var covMax = 0.0;
  for (var y = 0u; y < 8u; y++) {
    for (var x = 0u; x < 8u; x++) {
      let p = base+vec2u(x,y);
      if (p.x >= T.width || p.y >= T.height) { continue; }
      let f = textureLoad(tileFront,p,0);
      let b = textureLoad(tileBack,p,0);
      let lum = dot(f.rgb+b.rgb,vec3f(0.2126,0.7152,0.0722));
      lumMin = min(lumMin,lum);
      lumMax = max(lumMax,lum);
      scalarMin = min(scalarMin,f.a);
      covMax = max(covMax,textureLoad(tileDebris,p,0).a);
    }
  }
  var mode = 1u;
  // Strong internal contrast marks the silhouette, the photon ring, strand
  // edges, and star fields; debris coverage always demands full quality.
  if (lumMax-lumMin > 0.06+0.10*lumMax || covMax > 0.01) {
    mode = 0u;
  } else if (scalarMin > 0.995 && covMax <= 0.0) {
    // No accumulated medium and no debris anywhere in the tile: pure sky.
    mode = 2u;
  }
  tileModes[tileIndex] = mode;
}
`,Er=12288,cc=`
struct DebrisUniforms {
  camPosTan: vec4f,
  rightAspect: vec4f,
  upNear: vec4f,
  forwardFar: vec4f,
  disk: vec4f,
  motion: vec4f,
  viewport: vec4f,
  jitter: vec4f,
}
@group(0) @binding(0) var<uniform> U: DebrisUniforms;
const PI: f32 = 3.141592653589793;
const CLUSTER_ID_SALT: u32 = 0x51ed270bu;

fn hashU32(value: u32) -> u32 {
  var x = value;
  x = (x ^ (x >> 16u)) * 0x7feb352du;
  x = (x ^ (x >> 15u)) * 0x846ca68bu;
  return x ^ (x >> 16u);
}
fn random01(instance: u32, lane: u32) -> f32 {
  return f32(hashU32(instance * 0x9e3779b9u + lane * 0x85ebca6bu)
    & 0x00ffffffu) / 16777216.0;
}
fn clusterRandom(cluster: u32, lane: u32) -> f32 {
  return random01(cluster ^ CLUSTER_ID_SALT, lane);
}
fn debrisDensityShape(radius: f32) -> f32 {
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let r = radius*referenceScale;
  let inner = U.disk.x*referenceScale;
  let x = clamp((r-inner)/max(25.0-inner,1e-6),0.0,1.0);
  let curve = max(1.0,(25.0-inner)/10.0);
  var effective = x;
  if (abs(curve-1.0) >= 1e-5) {
    effective = clamp((-1.0+sqrt(max(
      0.0,1.0+4.0*curve*curve*x-4.0*x*curve)))
      /(2.0*curve-2.0),0.0,1.0);
  }
  let alpha = 0.9;
  let beta = 1.5;
  let norm = pow(alpha+beta,alpha+beta)
    /max(pow(alpha,alpha)*pow(beta,beta),1e-8);
  return norm*pow(max(effective,1e-8),alpha)
    *pow(max(1.0-effective,1e-8),beta);
}
fn debrisBaseHalfHeight(radius: f32, densityShape: f32) -> f32 {
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let referenceRadius = radius*referenceScale;
  let thicknessScale = U.disk.z/0.055;
  let thin = 0.75*thicknessScale;
  let hopper = 0.40*thicknessScale;
  let geometricThin = thin+max(0.0,(referenceRadius-3.0)*hopper);
  return max(0.008,geometricThin*densityShape/referenceScale);
}
`,Zp=`
${cc}
@group(0) @binding(1) var debrisNoise: texture_3d<f32>;
@group(0) @binding(2) var debrisNoiseSampler: sampler;
// Per cluster: alive flag, stream weight, crust darkness.
@group(0) @binding(3) var<storage, read_write> clusterInfo: array<vec4f>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let cluster = gid.x;
  if (cluster >= ${Er}u) { return; }
  let inner = U.disk.x;
  let outer = U.disk.y;
  let clusterRadiusMix = clusterRandom(cluster, 1u);
  let clusterAngle0 = 2.0 * PI * clusterRandom(cluster, 2u);
  let clusterZUnit = (clusterRandom(cluster, 3u) + clusterRandom(cluster, 4u)
    + clusterRandom(cluster, 5u) - 1.5) / 1.5;
  let clusterRadius = sqrt(mix(inner * inner, outer * outer, clusterRadiusMix));
  let clusterShape = debrisDensityShape(clusterRadius);
  let clusterHalf = debrisBaseHalfHeight(clusterRadius, clusterShape);
  let p = vec3f(
    0.075 * clusterRadius,
    clusterAngle0 / (2.0 * PI) + 0.11 * log(max(clusterRadius, 1.0)),
    0.35 * clusterZUnit * clusterHalf);
  let field = textureSampleLevel(debrisNoise, debrisNoiseSampler, p, 0.0);
  let raw = clamp(0.52 * field.x + 0.30 * field.y
    + 0.18 * field.z, 0.0, 1.0);
  let streamWeight = smoothstep(0.30, 0.72, raw);
  let crustPosition = vec3f(
    0.80 * clusterRadius,
    clusterAngle0 / (2.0 * PI) + 0.55 * log(max(clusterRadius, 1.0)),
    0.37);
  let crustField = textureSampleLevel(
    debrisNoise, debrisNoiseSampler, crustPosition, 0.0);
  let crust = clamp(0.80 * crustField.y + 0.20 * crustField.w, 0.0, 1.0);
  let outerness = smoothstep(0.30, 0.80, clusterRadiusMix);
  let clumpDark = smoothstep(mix(0.44, 0.29, outerness),
    mix(0.56, 0.41, outerness), crust);
  let streamOccupied = clusterRandom(cluster, 24u)
    < mix(0.34, 1.0, pow(streamWeight, 1.1))
      * mix(0.45, 1.0, clumpDark);
  let radialOccupied = clusterRandom(cluster, 25u)
    < pow(clamp(clusterShape, 0.0, 1.0), 0.9);
  let verticalOccupied = clusterRandom(cluster, 26u)
    < pow(max(0.0, 1.0 - abs(clusterZUnit)), 1.5);
  let alive = streamOccupied && radialOccupied && verticalOccupied;
  clusterInfo[cluster] = vec4f(
    select(0.0, 1.0, alive), streamWeight, clumpDark, 0.0);
}
`,ec=786432,jp=`
${cc}
@group(0) @binding(1) var<storage, read> clusterInfo: array<vec4f>;
// Micro member records: r0 = centre + tint, r1 = quad half extents +
// virtual id, r2 = stream weight + crust darkness.
@group(0) @binding(2) var<storage, read_write> microRecords: array<vec4f>;
@group(0) @binding(3) var<storage, read_write> microCount: atomic<u32>;

const MICRO_VIRTUAL_OFFSET: u32 = 98304u;
const MICRO_CLUSTER_MEMBERS: u32 = 64u;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let localId = gid.x;
  if (localId >= ${ec}u) { return; }
  let cluster = localId / MICRO_CLUSTER_MEMBERS;
  let member = localId % MICRO_CLUSTER_MEMBERS;
  let info = clusterInfo[cluster];
  if (info.x < 0.5) { return; }
  let streamWeight = info.y;
  let virtualInstance = MICRO_VIRTUAL_OFFSET + localId;
  let fullness = mix(0.82, 1.0, clusterRandom(cluster, 28u));
  if (random01(virtualInstance, 22u) >= fullness) { return; }

  let inner = U.disk.x;
  let outer = U.disk.y;
  let clusterRadiusMix = clusterRandom(cluster, 1u);
  let clusterAngle0 = 2.0 * PI * clusterRandom(cluster, 2u);
  let clusterZUnit = (clusterRandom(cluster, 3u) + clusterRandom(cluster, 4u)
    + clusterRandom(cluster, 5u) - 1.5) / 1.5;
  let clusterRadius = sqrt(mix(inner * inner, outer * outer, clusterRadiusMix));

  let train = pow(clusterRandom(cluster, 27u), 1.6);
  let isField = clusterRandom(cluster, 29u) < 0.24;
  var tangentialHalf = mix(0.35, 2.20, train) * (0.6 + 0.8 * streamWeight);
  var radialHalf = 0.075 * tangentialHalf;
  var verticalSpread = 0.30;
  if (isField) {
    tangentialHalf *= 6.0;
    radialHalf *= 5.0;
    verticalSpread = 0.55;
  }
  tangentialHalf *= 1.3;
  radialHalf *= 1.4;
  let sizeClass = mix(0.62, 2.00, pow(clusterRandom(cluster, 30u), 2.2));

  let mT = random01(virtualInstance, 40u) + random01(virtualInstance, 41u) - 1.0;
  let mR = random01(virtualInstance, 42u) + random01(virtualInstance, 43u) - 1.0;
  let mZ = random01(virtualInstance, 44u) + random01(virtualInstance, 45u) - 1.0;
  let radius = clamp(clusterRadius + mR * radialHalf,
    inner + 0.05, outer - 0.02);
  let zUnit = clamp(
    clusterZUnit + mZ * verticalSpread * (1.0 - abs(clusterZUnit)),
    -1.0, 1.0);
  let deltaAngle = mT * tangentialHalf / max(clusterRadius, 1e-3);

  let omega = 1.0 / (clusterRadius * sqrt(clusterRadius) + U.motion.z);
  let rateScale = 0.70710678 * pow(U.disk.y / 25.0, 1.5);
  let debrisOmega = -rateScale * omega;
  let debrisPivot = -rateScale * U.motion.w;
  let angle = clusterAngle0 + deltaAngle + U.motion.y
    + (debrisOmega - debrisPivot) * U.motion.x;
  let radial = vec3f(cos(angle), sin(angle), 0.0);
  let logRadius = log(max(radius, 1.0));

  let radialDensity = debrisDensityShape(radius);
  let baseHalfHeight = debrisBaseHalfHeight(radius, radialDensity);
  let halfHeight = baseHalfHeight * mix(0.68, 1.30, streamWeight);
  let sheetHalf = 0.42 * halfHeight;
  let stratumShift = sheetHalf * (
    0.16 * sin(3.0 * angle + 4.6 * logRadius)
    + 0.10 * sin(7.0 * angle - 2.2 * logRadius));
  let center = vec3f(
    radial.xy * radius,
    zUnit * sheetHalf + stratumShift);

  let sizeSample = random01(virtualInstance, 6u);
  let baseSize = sqrt(sizeClass) * (0.0030 + 0.0105 * pow(sizeSample, 2.2));
  let scale = baseSize * vec3f(
    mix(0.52, 0.96, random01(virtualInstance, 8u)),
    mix(1.02, 1.92, random01(virtualInstance, 9u)),
    mix(0.66, 1.10, random01(virtualInstance, 10u)));

  let slot = atomicAdd(&microCount, 1u);
  let base = slot * 3u;
  microRecords[base] = vec4f(center, random01(virtualInstance, 15u));
  microRecords[base + 1u] = vec4f(scale, f32(virtualInstance));
  microRecords[base + 2u] = vec4f(streamWeight, info.z, 0.0, 0.0);
}
`,tc=98304,Pp=`
${cc}
@group(0) @binding(1) var<storage, read> clusterInfo: array<vec4f>;
// Large member records: r0 = centre + tint, r1 = mesh scale + virtual id,
// r2 = stream weight, crust darkness, orbit angle (frame stored exactly —
// never reconstructed from the centre).
@group(0) @binding(2) var<storage, read_write> largeRecords: array<vec4f>;
@group(0) @binding(3) var<storage, read_write> largeCount: atomic<u32>;

const LARGE_CLUSTER_MEMBERS_E: u32 = 8u;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let virtualInstance = gid.x;
  if (virtualInstance >= ${tc}u) { return; }
  let cluster = virtualInstance / LARGE_CLUSTER_MEMBERS_E;
  let info = clusterInfo[cluster];
  if (info.x < 0.5) { return; }
  let streamWeight = info.y;
  let fullness = mix(0.82, 1.0, clusterRandom(cluster, 28u));
  if (random01(virtualInstance, 22u) >= fullness) { return; }

  let inner = U.disk.x;
  let outer = U.disk.y;
  let clusterRadiusMix = clusterRandom(cluster, 1u);
  let clusterAngle0 = 2.0 * PI * clusterRandom(cluster, 2u);
  let clusterZUnit = (clusterRandom(cluster, 3u) + clusterRandom(cluster, 4u)
    + clusterRandom(cluster, 5u) - 1.5) / 1.5;
  let clusterRadius = sqrt(mix(inner * inner, outer * outer, clusterRadiusMix));

  let train = pow(clusterRandom(cluster, 27u), 1.6);
  let isField = clusterRandom(cluster, 29u) < 0.24;
  var tangentialHalf = mix(0.35, 2.20, train) * (0.6 + 0.8 * streamWeight);
  var radialHalf = 0.075 * tangentialHalf;
  var verticalSpread = 0.20;
  if (isField) {
    tangentialHalf *= 6.0;
    radialHalf *= 5.0;
    verticalSpread = 0.55;
  }
  let sizeClass = mix(0.62, 2.00, pow(clusterRandom(cluster, 30u), 2.2));

  let mT = random01(virtualInstance, 40u) + random01(virtualInstance, 41u) - 1.0;
  let mR = random01(virtualInstance, 42u) + random01(virtualInstance, 43u) - 1.0;
  let mZ = random01(virtualInstance, 44u) + random01(virtualInstance, 45u) - 1.0;
  let radius = clamp(clusterRadius + mR * radialHalf,
    inner + 0.05, outer - 0.02);
  let zUnit = clamp(
    clusterZUnit + mZ * verticalSpread * (1.0 - abs(clusterZUnit)),
    -1.0, 1.0);
  let deltaAngle = mT * tangentialHalf / max(clusterRadius, 1e-3);

  let omega = 1.0 / (clusterRadius * sqrt(clusterRadius) + U.motion.z);
  let rateScale = 0.70710678 * pow(U.disk.y / 25.0, 1.5);
  let debrisOmega = -rateScale * omega;
  let debrisPivot = -rateScale * U.motion.w;
  let angle = clusterAngle0 + deltaAngle + U.motion.y
    + (debrisOmega - debrisPivot) * U.motion.x;
  let radial = vec3f(cos(angle), sin(angle), 0.0);
  let logRadius = log(max(radius, 1.0));

  let radialDensity = debrisDensityShape(radius);
  let baseHalfHeight = debrisBaseHalfHeight(radius, radialDensity);
  let halfHeight = baseHalfHeight * mix(0.68, 1.30, streamWeight);
  let sheetHalf = 0.42 * halfHeight;
  let stratumShift = sheetHalf * (
    0.16 * sin(3.0 * angle + 4.6 * logRadius)
    + 0.10 * sin(7.0 * angle - 2.2 * logRadius));
  let center = vec3f(
    radial.xy * radius,
    zUnit * sheetHalf + stratumShift);

  let sizeSample = random01(virtualInstance, 6u);
  let rareSample = random01(virtualInstance, 7u);
  let baseSize = sizeClass * (0.0042 + 0.0165 * pow(sizeSample, 2.6)
    + 0.028 * smoothstep(0.985, 1.0, rareSample));
  let scale = baseSize * vec3f(
    mix(0.55, 1.18, random01(virtualInstance, 8u)),
    mix(0.80, 1.85, random01(virtualInstance, 9u)),
    mix(0.48, 1.05, random01(virtualInstance, 10u)));

  let slot = atomicAdd(&largeCount, 1u);
  let base = slot * 3u;
  largeRecords[base] = vec4f(center, random01(virtualInstance, 15u));
  largeRecords[base + 1u] = vec4f(scale, f32(virtualInstance));
  largeRecords[base + 2u] = vec4f(streamWeight, info.z, angle, 0.0);
}
`,Yp=`
// [vertexCount, instanceCount, firstVertex, firstInstance]
@group(0) @binding(0) var<storage, read_write> largeArgs: array<u32, 4>;
@group(0) @binding(1) var<storage, read_write> microArgs: array<u32, 4>;
@group(0) @binding(2) var<storage, read_write> largeCount: atomic<u32>;
@group(0) @binding(3) var<storage, read_write> microCount: atomic<u32>;

@compute @workgroup_size(1)
fn main() {
  largeArgs[0] = 60u;
  largeArgs[1] = atomicLoad(&largeCount);
  largeArgs[2] = 0u;
  largeArgs[3] = 0u;
  microArgs[0] = 6u;
  microArgs[1] = atomicLoad(&microCount);
  microArgs[2] = 0u;
  microArgs[3] = 0u;
}
`,Xp=`
struct SkyU {
  galM: mat3x3f, padStarDensity: f32, galB: f32, pxA: f32,
  nebD: f32, nebS: f32, pad0: f32, pad1: f32, pad2: f32,
}
struct SkyCenters {
  count: u32, pad0: u32, pad1: u32, pad2: u32,
  /** xyz = anchor direction, w = angular radius in radians. */
  c: array<vec4f, 10>,
}
@group(0) @binding(0) var<uniform> SU: SkyU;
@group(0) @binding(1) var outSky: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(2) var astronomicalSky: texture_2d<f32>;
@group(0) @binding(3) var astronomicalSamp: sampler;
@group(0) @binding(4) var<uniform> SC: SkyCenters;
${vd}
/* GPU-baked volume-integrated clouds in a transparent equirectangular
   atlas (synthesized by nebula-bake; formerly a shipped PNG whose
   fetch-failure procedural fallback lived here). RGB stores display-encoded
   emitted radiance and alpha the integrated optical depth. No photographic
   sky, survey grain, contour extraction or analytic shell survives into
   this texture. */
fn volumetricAtlas(d: vec3f) -> vec4f {
  // Select the nearest baked cloud and scale only its local gnomonic
  // tangent coordinates. At 1x this is exactly the identity; at other sizes
  // it keeps every anchor fixed and still performs one atlas lookup.
  if (SC.count == 0u) { return vec4f(0.0); }
  var center = SC.c[0].xyz;
  var radius = SC.c[0].w;
  var nearest = dot(d,center);
  for (var i = 1u; i < SC.count; i++) {
    let n = dot(d,SC.c[i].xyz);
    if (n > nearest) { center = SC.c[i].xyz; radius = SC.c[i].w; nearest = n; }
  }
  let scale = clamp(SU.nebS,0.3,2.5);
  // 1.354x the angular radius reproduces the retired constant (0.52 at
  // the old 22-degree patches): margin for the turbulent silhouette.
  let supportAngle = min(radius*1.354*scale+0.055,1.35);
  if (nearest < cos(supportAngle)) { return vec4f(0.0); }
  let tangent = d/max(nearest,0.12)-center;
  let sampleDirection = normalize(center+tangent/scale);
  let lon = atan2(sampleDirection.z,sampleDirection.x);
  let lat = asin(clamp(sampleDirection.y,-1.0,1.0));
  let uv = vec2f(fract(0.5-lon/6.28318530718),0.5-lat/3.14159265359);
  let atlas = textureSampleLevel(astronomicalSky,astronomicalSamp,uv,0.0);
  return vec4f(pow(max(atlas.rgb,vec3f(0.0)),vec3f(2.2)),atlas.a);
}
/* A clean but internally structured galaxy. Every stochastic term remains
   gated by a latitude envelope: empty sky and the celestial poles therefore
   stay free of the photographic grain/radial residue of the rejected survey
   raster. The narrow stellar banks, broken clouds and warped dust lane avoid
   reading as one diffuse smoke streak. */
fn cleanGalaxy(d: vec3f) -> vec3f {
  let warp0 = fbm(d*2.35+vec3f(17.4,5.1,29.7));
  let warp1 = fbm(d*6.8+vec3f(41.7,12.8,3.6));
  let warp = (warp0-0.47)*0.048+(warp1-0.47)*0.012;
  let sl = d.y+warp;
  let halo = exp(-sl*sl*38.0);
  let disk = exp(-sl*sl*150.0);

  // A broad population term keeps the band recognisably stellar rather than
  // reducing it to isolated gas blobs. Two finer scales break that population
  // into banks and knots without adding any sky-wide grain.
  let mass0 = fbm(d*3.7+vec3f(4.7,21.3,9.2));
  let mass1 = fbm(d*9.4+vec3f(31.8,2.4,17.1));
  let mass2 = fbm(d*21.0+vec3f(13.9,27.6,44.1));
  let occupancy = smoothstep(0.27,0.70,mass0);
  let banks = occupancy*(0.32+0.68*smoothstep(0.34,0.65,mass1));
  let knots =
    smoothstep(0.51,0.71,mass2+mass1*0.13)
    *smoothstep(0.30,0.62,mass0);

  // A much thinner, independently warped absorber splits the luminous banks.
  // Clumpy opacity prevents the lane becoming a mechanically uniform stripe.
  let dustWarp = (fbm(d*7.2+vec3f(11.6,38.2,6.4))-0.47)*0.024;
  let dustProfile = exp(-(sl+dustWarp)*(sl+dustWarp)*760.0);
  let dustClumps = smoothstep(
    0.38,0.64,
    mix(
      fbm(d*5.9+vec3f(7.3,18.1,42.6)),
      fbm(d*13.1+vec3f(29.4,3.8,14.7)),
      0.34,
    ),
  );
  let dustLane = dustProfile*(0.46+0.48*dustClumps);

  let coreDir = normalize(vec3f(0.94,0.035,0.34));
  let coreAngle = acos(clamp(dot(d,coreDir),-1.0,1.0));
  let core =
    exp(-coreAngle*coreAngle*20.0)*exp(-sl*sl*30.0)
    +exp(-coreAngle*coreAngle*6.0)*exp(-sl*sl*16.0)*0.05;
  let coreWarmth = exp(-coreAngle*coreAngle*4.5);
  let bandColor = mix(
    vec3f(0.39,0.45,0.61),
    vec3f(0.68,0.46,0.29),
    clamp(coreWarmth*0.78+smoothstep(0.54,0.76,mass1)*0.22,0.0,1.0),
  );
  var galaxy =
    halo*(0.32+0.68*warp0)*vec3f(0.0017,0.0022,0.0042)
    +disk*(0.022+0.31*banks+0.22*knots)*bandColor
    +core*(0.38+0.62*banks)*vec3f(0.92,0.58,0.30)*0.54;
  galaxy *= 1.0-dustLane;
  return galaxy;
}
fn skyGen(d0: vec3f) -> vec4f {
  let d = normalize(SU.galM*d0);
  let volume = volumetricAtlas(d);
  let nebulaStrength = clamp(SU.nebD,0.0,2.0);
  let volumeAlpha =
    1.0-pow(max(1.0-volume.a,0.0001),nebulaStrength);
  var authored = vec3f(0.0008,0.0009,0.0012)
    +cleanGalaxy(d)*SU.galB;
  authored *= 1.0-volumeAlpha*0.72;
  authored += volume.rgb*nebulaStrength*1.18;
  let starTransmission = 1.0-volumeAlpha*0.82;
  return vec4f(authored,starTransmission);
}
fn faceDir(f: u32, s: f32, t: f32) -> vec3f {
  switch f {
    case 0u: { return vec3f(1.0,-t,-s); }
    case 1u: { return vec3f(-1.0,-t,s); }
    case 2u: { return vec3f(s,1.0,t); }
    case 3u: { return vec3f(s,-1.0,-t); }
    case 4u: { return vec3f(s,-t,1.0); }
    default: { return vec3f(-s,-t,-1.0); }
  }
}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let N = textureDimensions(outSky).x;
  if (gid.x >= N || gid.y >= N) { return; }
  let s = (f32(gid.x)+0.5)/f32(N)*2.0-1.0;
  let t = (f32(gid.y)+0.5)/f32(N)*2.0-1.0;
  let d = normalize(faceDir(gid.z, s, t));
  textureStore(outSky, gid.xy, gid.z, skyGen(d));
}`,Ip=`
@group(0) @binding(0) var srcSky: texture_cube<f32>;
@group(0) @binding(1) var srcSamp: sampler;
@group(0) @binding(2) var dstSky: texture_storage_2d_array<rgba16float, write>;
fn faceDir(f: u32, s: f32, t: f32) -> vec3f {
  switch f {
    case 0u: { return vec3f(1.0,-t,-s); }
    case 1u: { return vec3f(-1.0,-t,s); }
    case 2u: { return vec3f(s,1.0,t); }
    case 3u: { return vec3f(s,-1.0,-t); }
    case 4u: { return vec3f(s,-t,1.0); }
    default: { return vec3f(-s,-t,-1.0); }
  }
}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let N = textureDimensions(dstSky).x;
  if (gid.x >= N || gid.y >= N || gid.z >= 6u) { return; }
  let s = (f32(gid.x)+0.5)/f32(N)*2.0-1.0;
  let t = (f32(gid.y)+0.5)/f32(N)*2.0-1.0;
  let o = 0.5/f32(N);
  let c =
    textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s-o,t-o)),0.0)
    +textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s+o,t-o)),0.0)
    +textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s-o,t+o)),0.0)
    +textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s+o,t+o)),0.0);
  textureStore(dstSky,gid.xy,gid.z,c*0.25);
}`,oc=144,yr=320,N1=4096,B1=2048,Qp=1.35,bd=256,Fp=4,Qi=10,Kp=[[4.5,7.5,4],[7.5,4,5],[3.5,5,9.5]],Wp=u=>()=>{u|=0,u=u+1831565813|0;let r=Math.imul(u^u>>>15,1|u);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296},Ku=(u,r,c)=>{const s=(u%360+360)%360/60,f=c*r,d=f*(1-Math.abs(s%2-1)),p=c-f,b=s<1?[f,d,0]:s<2?[d,f,0]:s<3?[0,f,d]:s<4?[0,d,f]:s<5?[d,0,f]:[f,0,d];return[b[0]+p,b[1]+p,b[2]+p]},Jp=(u,r=Math.floor(Math.random()*2147483647))=>{const c=Wp(r),s=Math.max(0,Math.min(Qi,Math.round(u))),f=[],d=c()*360,p=137.50776405;for(let b=0;b<s;b++){const x=s===1?.5:(b+.5)/s,v=Math.max(-.96,Math.min(.96,1-2*x+(c()-.5)*.5)),E=Math.asin(v)*180/Math.PI,g=(b*p+c()*60)%360,A=d+b*p+(c()-.5)*48,O=(c()<.5?-1:1)*(55+c()*70),k=Math.floor(c()*3);f.push({seed:Math.floor(c()*2147483647),variant:k,targetRa:g,targetDec:E,angularRadius:14+c()*10,roll:c()*360-180,lineColor:Ku(A,.78+.17*c(),.34+.26*c()),hotColor:Ku(A+O,.45+.25*c(),.55+.25*c()),dustColor:Ku(A+(c()-.5)*30,.6+.2*c(),.05+.07*c()),exposure:1.42+c()*.3,opacity:2.05+c()*.55,midSigma:Kp[k]})}return f},$p=[14,17,12],eg=[1.6,2.4,1.45],yd=u=>Math.max(1,Math.round(4*u+.5)),tg=u=>{const r=yd(u);let c=0;const s=[];for(let d=-r;d<=r;d++){const p=Math.exp(-(d*d)/(2*u*u));s.push(p),c+=p}let f=0;for(const d of s)f+=d/c*(d/c);return Math.sqrt(f)},xd=(u,r)=>{const c=u*Math.PI/180,s=r*Math.PI/180;return[Math.cos(s)*Math.cos(c),Math.sin(s),Math.cos(s)*Math.sin(c)]},ag=u=>{const r=xd(u.targetRa,u.targetDec),c=Math.atan2(r[2],r[0]),s=Math.asin(Math.max(-1,Math.min(1,r[1]))),f=[-Math.sin(c),0,Math.cos(c)],d=[-Math.sin(s)*Math.cos(c),Math.cos(s),-Math.sin(s)*Math.sin(c)],p=u.roll*Math.PI/180,b=Math.cos(p),x=Math.sin(p),v=f.map((g,A)=>b*g+x*d[A]),E=f.map((g,A)=>-x*g+b*d[A]);return{center:r,east:v,north:E,tanExtent:Math.tan(u.angularRadius*Math.PI/180)}},lg=u=>{const r=oc/176,c=x=>[x[2]*r,x[1]*r,x[0]*r],s=c($p),f=c(u.midSigma),d=c(eg),p=[0,1,2].map(x=>{const v=[s[x],f[x],d[x]];return{sigma:v,radius:v.map(yd)}}),b=[0,1,2].map(x=>{let v=1;for(const E of p)v*=tg(E.sigma[x]);return 1/Math.max(v,1e-6)});return{axes:p,invStd:b}},nl=`
const VOL = ${oc};
const DOMAIN = ${Qp};
const HIST_BINS = ${bd}u;
const HIST_MAX = ${Fp};

fn nbHash(v: vec4u) -> u32 {
  var x = (v.x*0x9E3779B9u) ^ (v.y*0x85EBCA6Bu) ^ (v.z*0xC2B2AE35u) ^ (v.w*0x27D4EB2Fu);
  x = (x ^ (x >> 16u))*0x7FEB352Du;
  x = (x ^ (x >> 15u))*0x846CA68Bu;
  return x ^ (x >> 16u);
}
fn nbUnit(v: vec4u) -> f32 {
  return (f32(nbHash(v) & 0x00FFFFFFu)+0.5)/16777216.0;
}
fn nbSmoothstep(lo: f32, hi: f32, v: f32) -> f32 {
  let t = clamp((v-lo)/(hi-lo), 0.0, 1.0);
  return t*t*(3.0-2.0*t);
}
`,ig=`
struct NoiseUni { seed: u32, pad0: u32, pad1: u32, pad2: u32 }
@group(0) @binding(0) var<uniform> NU: NoiseUni;
@group(0) @binding(1) var noiseOut: texture_storage_3d<rgba16float, write>;
${nl}
fn gauss(p: vec3u, channel: u32, seed: u32) -> f32 {
  let u1 = nbUnit(vec4u(p.x, p.y, p.z, seed*8u+channel*2u));
  let u2 = nbUnit(vec4u(p.x, p.y, p.z, seed*8u+channel*2u+1u));
  return sqrt(-2.0*log(max(u1, 1e-7)))*cos(6.28318530718*u2);
}
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL) || gid.z >= u32(VOL)) { return; }
  textureStore(noiseOut, gid, vec4f(
    gauss(gid, 0u, NU.seed), gauss(gid, 1u, NU.seed), gauss(gid, 2u, NU.seed), 0.0));
}
`,ng=`
struct BlurUni {
  sigma: vec3f, axis: u32,
  radius: vec3u, pad0: u32,
}
@group(0) @binding(0) var<uniform> BU: BlurUni;
@group(0) @binding(1) var blurIn: texture_3d<f32>;
@group(0) @binding(2) var blurOut: texture_storage_3d<rgba16float, write>;
${nl}
fn axisVec(axis: u32) -> vec3i {
  if (axis == 0u) { return vec3i(1,0,0); }
  if (axis == 1u) { return vec3i(0,1,0); }
  return vec3i(0,0,1);
}
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL) || gid.z >= u32(VOL)) { return; }
  let dir = axisVec(BU.axis);
  var acc = vec3f(0.0);
  var wsum = vec3f(0.0);
  let maxR = i32(max(BU.radius.x, max(BU.radius.y, BU.radius.z)));
  for (var i = -maxR; i <= maxR; i++) {
    let p = (vec3i(gid)+dir*i+vec3i(VOL)*2) % vec3i(VOL);
    let s = textureLoad(blurIn, vec3u(p), 0).rgb;
    let fi = f32(i);
    let w = select(vec3f(0.0),
      exp(-fi*fi/(2.0*BU.sigma*BU.sigma)),
      abs(vec3f(fi)) <= vec3f(BU.radius));
    acc += s*w;
    wsum += w;
  }
  textureStore(blurOut, gid, vec4f(acc/max(wsum, vec3f(1e-6)), 0.0));
}
`,rg=`
struct DensityUni {
  invStd: vec3f, variant: u32,
}
@group(0) @binding(0) var<uniform> DU: DensityUni;
@group(0) @binding(1) var fieldsTex: texture_3d<f32>;
@group(0) @binding(2) var densityOut: texture_storage_3d<rgba16float, write>;
@group(0) @binding(3) var<storage, read_write> hist: array<atomic<u32>>;
${nl}
fn fieldAt(p: vec3u) -> vec3f {
  return textureLoad(fieldsTex, p, 0).rgb*DU.invStd;
}
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL) || gid.z >= u32(VOL)) { return; }
  let f = fieldAt(gid);
  let low = f.x; let mid = f.y; let fine = f.z;
  // np.roll copies of the low field decorrelate the three warp axes
  // without more full-resolution fields.
  let lowRy = textureLoad(fieldsTex,
    vec3u(gid.x, (gid.y+u32(VOL)-u32(VOL/3)) % u32(VOL), gid.z), 0).r*DU.invStd.x;
  let lowRz = textureLoad(fieldsTex,
    vec3u((gid.x+u32(VOL)-u32(VOL/4)) % u32(VOL), gid.y, gid.z), 0).r*DU.invStd.x;
  let axisStep = 2.0*DOMAIN/f32(VOL-1);
  let x = -DOMAIN + f32(gid.x)*axisStep;
  let y = -DOMAIN + f32(gid.y)*axisStep;
  let z = -DOMAIN + f32(gid.z)*axisStep;
  let xx = x + 0.11*low;
  let yy = y + 0.085*lowRy;
  let zz = z + 0.075*lowRz;

  var body = 0.0;
  var envelope = 0.0;
  var cavity = 1.0;
  var dust = 0.0;
  if (DU.variant == 0u) {
    body =
      1.00*exp(-pow((xx+0.23)/0.64,2.0)-pow((yy-0.02)/0.52,2.0)-pow((zz+0.03)/0.58,2.0))
      +0.82*exp(-pow((xx-0.34)/0.52,2.0)-pow((yy+0.19)/0.41,2.0)-pow((zz-0.12)/0.50,2.0))
      +0.68*exp(-pow((xx+0.37)/0.45,2.0)-pow((yy-0.34)/0.35,2.0)-pow((zz-0.16)/0.43,2.0));
    envelope = nbSmoothstep(0.035, 0.45, body);
    let voidA = exp(-pow((xx+0.08)/0.29,2.0)-pow((yy-0.02)/0.23,2.0)-pow((zz+0.05)/0.27,2.0));
    let voidB = exp(-pow((xx-0.38)/0.22,2.0)-pow((yy+0.04)/0.18,2.0)-pow((zz-0.02)/0.24,2.0));
    cavity = 1.0 - 0.68*max(voidA, 0.65*voidB);
  } else if (DU.variant == 1u) {
    // Tilted 3D axis: the central lane cannot project to a straight stripe.
    let u = (0.68*xx + 0.68*yy + 0.27*zz)*1.15;
    let v = (-0.72*xx + 0.69*yy - 0.08*zz)*1.15;
    let w = (-0.24*xx - 0.14*yy + 0.96*zz)*1.15;
    body =
      0.96*exp(-pow((u-0.34)/0.49,2.0)-pow(v/0.48,2.0)-pow(w/0.53,2.0))
      +0.92*exp(-pow((u+0.36)/0.52,2.0)-pow((v+0.04)/0.46,2.0)-pow((w-0.04)/0.55,2.0))
      +0.32*exp(-pow(u/0.30,2.0)-pow(v/0.32,2.0)-pow(w/0.38,2.0));
    envelope = nbSmoothstep(0.04, 0.43, body);
    cavity = 1.0 - 0.34*exp(-pow(u/0.30,2.0)-pow(v/0.24,2.0)-pow(w/0.30,2.0));
    dust = exp(-pow((u+0.03+0.07*mid)/0.16,2.0)-pow(v/0.58,2.0)-pow((w-0.22)/0.27,2.0))
      *nbSmoothstep(-0.55, 0.72, low+0.35*fine);
  } else {
    // Swept fan of overlapping filled sheets — no radial field, no loop.
    let bend = yy + 0.24*xx*xx - 0.10*zz;
    body =
      0.86*exp(-pow((xx+0.20)/0.82,2.0)-pow((bend-0.22)/0.34,2.0)-pow((zz+0.06)/0.68,2.0))
      +0.68*exp(-pow((xx-0.23)/0.64,2.0)-pow((bend+0.18)/0.30,2.0)-pow((zz-0.12)/0.58,2.0))
      +0.46*exp(-pow((xx+0.50)/0.42,2.0)-pow((yy+0.18)/0.46,2.0)-pow((zz-0.23)/0.45,2.0));
    envelope = nbSmoothstep(0.035, 0.42, body);
  }
  // Transparent breathing room around the tangent patch, from UNWARPED
  // coordinates — a safety window, not the visible silhouette.
  envelope *= (1.0-nbSmoothstep(1.12, 1.30, abs(x)))*(1.0-nbSmoothstep(1.12, 1.30, abs(y)));

  let cloud = 0.72*low + 0.42*mid + 0.12*fine;
  let occupancy = nbSmoothstep(-0.06, 0.72, cloud);
  let billow = exp(clamp(0.38*low + 0.23*mid, -1.0, 1.15));
  var density = pow(max(envelope,0.0), 1.18)*cavity
    *(0.012 + 0.988*pow(occupancy, 1.45))*billow;
  density *= 0.50 + 0.50*nbSmoothstep(-0.38, 0.78, fine);

  textureStore(densityOut, gid, vec4f(density, dust, 0.0, 0.0));
  if (density > 0.01) {
    let bin = min(u32(density/HIST_MAX*f32(HIST_BINS)), HIST_BINS-1u);
    atomicAdd(&hist[bin], 1u);
  }
}
`,sg=`
@group(0) @binding(0) var<storage, read_write> hist: array<atomic<u32>>;
@group(0) @binding(1) var<storage, read_write> scaleOut: array<f32>;
${nl}
@compute @workgroup_size(1)
fn main() {
  var total = 0u;
  for (var i = 0u; i < HIST_BINS; i++) { total += atomicLoad(&hist[i]); }
  var reference = 1.0;
  if (total > 0u) {
    let goal = u32(round(f32(total)*0.93));
    var cum = 0u;
    for (var i = 0u; i < HIST_BINS; i++) {
      cum += atomicLoad(&hist[i]);
      if (cum >= goal) {
        reference = (f32(i)+1.0)/f32(HIST_BINS)*HIST_MAX;
        break;
      }
    }
  }
  scaleOut[0] = 1.0/max(reference, 1e-5);
  // Reset for the next nebula's density pass.
  for (var i = 0u; i < HIST_BINS; i++) { atomicStore(&hist[i], 0u); }
}
`,ug=`
struct LightUni {
  axis: u32, reverse: u32, pad0: u32, pad1: u32,
  opacity: f32, pad2: f32, pad3: f32, pad4: f32,
}
@group(0) @binding(0) var<uniform> LU: LightUni;
@group(0) @binding(1) var densityTex: texture_3d<f32>;
@group(0) @binding(2) var<storage, read> densScale: array<f32>;
@group(0) @binding(3) var lightOut: texture_storage_3d<r32float, write>;
${nl}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL)) { return; }
  let step = 2.0*DOMAIN/f32(VOL);
  var depth = 0.0;
  for (var i = 0; i < VOL; i++) {
    let along = select(u32(i), u32(VOL-1-i), LU.reverse == 1u);
    var p = vec3u(0u);
    if (LU.axis == 0u) { p = vec3u(along, gid.x, gid.y); }
    else { p = vec3u(gid.x, along, gid.y); }
    textureStore(lightOut, p, vec4f(exp(-depth*step*LU.opacity), 0.0, 0.0, 0.0));
    let d = clamp(textureLoad(densityTex, p, 0).r*densScale[0], 0.0, 2.35);
    depth += d;
  }
}
`,cg=`
struct IntegrateUni {
  lineColor: vec3f, exposure: f32,
  hotColor: vec3f, opacity: f32,
  dustColor: vec3f, variant: u32,
  invStdLow: f32, pad0: f32, pad1: f32, pad2: f32,
}
@group(0) @binding(0) var<uniform> IU: IntegrateUni;
@group(0) @binding(1) var densityTex: texture_3d<f32>;
@group(0) @binding(2) var volSamp: sampler;
@group(0) @binding(3) var fieldsTex: texture_3d<f32>;
@group(0) @binding(4) var lightATex: texture_3d<f32>;
@group(0) @binding(5) var lightBTex: texture_3d<f32>;
@group(0) @binding(6) var<storage, read> densScale: array<f32>;
@group(0) @binding(7) var patchOut: texture_storage_2d<rgba16float, write>;
${nl}
fn densityAt(uvw: vec3f) -> f32 {
  let raw = textureSampleLevel(densityTex, volSamp, uvw, 0.0).r;
  return clamp(raw*densScale[0], 0.0, 2.35);
}
fn dustAt(uvw: vec3f) -> f32 {
  return textureSampleLevel(densityTex, volSamp, uvw, 0.0).g;
}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let patchN = textureDimensions(patchOut).x;
  if (gid.x >= patchN || gid.y >= patchN) { return; }
  // Patch pixel -> volume column. uvw addresses texel centers.
  let ux = (f32(gid.x)+0.5)/f32(patchN);
  let uy = (f32(gid.y)+0.5)/f32(patchN);
  let x = -DOMAIN + 2.0*DOMAIN*ux;
  let y = -DOMAIN + 2.0*DOMAIN*uy;
  let step = 2.0*DOMAIN/f32(VOL);
  let texel = 1.0/f32(VOL);

  var transmittance = 1.0;
  var radiance = vec3f(0.0);
  for (var zi = 0; zi < VOL; zi++) {
    let uvw = vec3f(ux, uy, (f32(zi)+0.5)*texel);
    let z = -DOMAIN + 2.0*DOMAIN*(f32(zi)+0.5)*texel;
    let d = densityAt(uvw);
    let dust = dustAt(uvw);
    // Warped ionization distance (the warp reuses the blurred low field).
    let low = textureSampleLevel(fieldsTex, volSamp, uvw, 0.0).r*IU.invStdLow;
    let lowRy = textureSampleLevel(fieldsTex, volSamp,
      uvw-vec3f(0.0, f32(VOL/3)*texel, 0.0), 0.0).r*IU.invStdLow;
    let lowRz = textureSampleLevel(fieldsTex, volSamp,
      uvw-vec3f(f32(VOL/4)*texel, 0.0, 0.0), 0.0).r*IU.invStdLow;
    let xx = x + 0.11*low;
    let yy = y + 0.085*lowRy;
    let zz = z + 0.075*lowRz;
    let sourceR = sqrt(pow(xx+0.12,2.0)+pow(yy-0.08,2.0)+pow(zz+0.06,2.0));
    let ion = exp(-pow(sourceR/0.78, 2.0));

    let coldClumps = nbSmoothstep(0.72, 1.55, d)*(1.0-ion);
    let extinction = d*(0.88+1.65*coldClumps) + dust*2.2;

    let ip = vec3u(u32(ux*f32(VOL)), u32(uy*f32(VOL)), u32(zi));
    let visA = textureLoad(lightATex, min(ip, vec3u(u32(VOL-1))), 0).r;
    let visB = textureLoad(lightBTex, min(ip, vec3u(u32(VOL-1))), 0).r;

    // Soft-density normal from a widened central difference (stands in
    // for the script's sigma-1.35 pre-blur before np.gradient).
    let e = 1.5*texel;
    let gx = densityAt(uvw+vec3f(e,0.0,0.0))-densityAt(uvw-vec3f(e,0.0,0.0));
    let gy = densityAt(uvw+vec3f(0.0,e,0.0))-densityAt(uvw-vec3f(0.0,e,0.0));
    let gz = densityAt(uvw+vec3f(0.0,0.0,e))-densityAt(uvw-vec3f(0.0,0.0,e));
    let glen = max(sqrt(gx*gx+gy*gy+gz*gz), 1e-4);
    let nx = -gx/glen; let ny = -gy/glen; let nz = -gz/glen;
    let facingA = clamp(nx*0.78 - ny*0.42 + nz*0.46, 0.0, 1.0);
    let facingB = clamp(-nx*0.36 + ny*0.72 - nz*0.60, 0.0, 1.0);

    let shapeA = 0.20 + 0.80*facingA;
    let shapeB = 0.24 + 0.76*facingB;
    let ambient = d*IU.dustColor*(0.010 + 0.018*ion);
    let scattered = d*(
      IU.lineColor*(0.018 + 1.08*pow(visA, 1.60)*shapeA)
      + IU.hotColor*(0.012 + 0.92*pow(visB, 1.75)*shapeB*(0.18+0.82*ion)));
    let recombination = pow(d, 1.42)*ion*ion
      *(IU.lineColor*0.62 + IU.hotColor*0.38)*0.38;

    radiance += transmittance*(ambient+scattered+recombination)*step;
    transmittance *= exp(-extinction*step*IU.opacity);
  }
  var alpha = 1.0 - transmittance;
  var tone = vec3f(1.0) - exp(-radiance*IU.exposure);
  // Exact suppression of negligible tails: no square patch boundary.
  let support = nbSmoothstep(0.002, 0.055, alpha);
  alpha *= support;
  tone *= support;
  textureStore(patchOut, gid.xy, vec4f(tone, alpha));
}
`,og=`
struct PatchFrame {
  center: vec3f, tanExtent: f32,
  east: vec3f, pad0: f32,
  north: vec3f, pad1: f32,
}
struct ComposeUni {
  count: u32, pad0: u32, pad1: u32, pad2: u32,
  frames: array<PatchFrame, ${Qi}>,
}
@group(0) @binding(0) var<uniform> CU: ComposeUni;
@group(0) @binding(1) var patches: texture_2d_array<f32>;
@group(0) @binding(2) var patchSamp: sampler;
@group(0) @binding(3) var atlasOut: texture_storage_2d<rgba8unorm, write>;
${nl}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(atlasOut);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  // Equirect direction, matching sky.ts: lon = pi - 2pi*(x+0.5)/W.
  let lon = 3.14159265359 - 6.28318530718*(f32(gid.x)+0.5)/f32(dims.x);
  let lat = 1.57079632679 - 3.14159265359*(f32(gid.y)+0.5)/f32(dims.y);
  let view = vec3f(cos(lat)*cos(lon), sin(lat), cos(lat)*sin(lon));
  var outRgb = vec3f(0.0);
  var outA = 0.0;
  for (var i = 0u; i < CU.count; i++) {
    let fr = CU.frames[i];
    let forward = dot(view, fr.center);
    if (forward <= 0.0) { continue; }
    let u = 0.5 + dot(view, fr.east)/forward/(2.0*fr.tanExtent);
    let v = 0.5 - dot(view, fr.north)/forward/(2.0*fr.tanExtent);
    if (u < 0.0 || u > 1.0 || v < 0.0 || v > 1.0) { continue; }
    let s = textureSampleLevel(patches, patchSamp, vec2f(u, v), i, 0.0);
    outRgb = s.rgb*s.a + outRgb*outA*(1.0-s.a);
    outA = s.a + outA*(1.0-s.a);
    outRgb /= max(outA, 1e-6);
  }
  textureStore(atlasOut, gid.xy,
    vec4f(pow(clamp(outRgb, vec3f(0.0), vec3f(1.0)), vec3f(1.0/2.2)), clamp(outA, 0.0, 1.0)));
}
`,fg=`
struct TU { alpha: f32, clampK: f32, pad0: f32, pad1: f32 }
@group(0) @binding(0) var<uniform> T: TU;
@group(0) @binding(1) var curT: texture_2d<f32>;
@group(0) @binding(2) var histT: texture_2d<f32>;
@group(0) @binding(3) var outT: texture_storage_2d<rgba16float, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(outT);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let px = vec2i(gid.xy);
  let curSample = textureLoad(curT,px,0);
  let cur = curSample.rgb;
  var o = cur;
  if (T.alpha < 0.999) {
    var hist = textureLoad(histT, px, 0).rgb;
    if (T.clampK > 0.5) {
      let sd = vec2i(dims)-vec2i(1);
      var mn = cur; var mx = cur;
      // cur already loaded the center. Spell out the remaining eight taps
      // in the original order: one fewer rgba16f read per shaded pixel and
      // no dynamic loop state, with identical min/max results.
      var c = textureLoad(curT,clamp(px+vec2i(-1,-1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(0,-1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(1,-1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(-1,0),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(1,0),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(-1,1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(0,1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(1,1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      hist = clamp(hist, mn, mx);
    }
    o = mix(hist, cur, T.alpha);
  }
  // Compact stars are composed analytically after the adaptive upscale. Alpha
  // carries only current-frame sky visibility, never temporally blurred star
  // radiance, so moving silhouettes cannot leave a stale star-shaped ghost.
  textureStore(outT, gid.xy, vec4f(o, curSample.a));
}`,dg=`
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var dst: texture_storage_2d<rgba16float, write>;
fn lum(c: vec3f) -> f32 { return dot(c,vec3f(0.299,0.587,0.114)); }
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(dst);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let uv = (vec2f(gid.xy)+vec2f(0.5))/vec2f(dims);
  let c = textureSampleLevel(src, samp, uv, 0.0).rgb;
  let l = lum(c);
  /* The transfer/shade pipeline is intentionally exposure-safe and its
     canonical disk peaks below linear 0.5. A legacy 0.6 threshold therefore
     produced an identically black bloom texture. This soft gate selects the
     upper highlight tail without turning the low-luminance nebula into fog.

     Native catalog stars are added later and never enter this pass. The
     support classifier still prevents compact disk sparks from becoming
     detached halation: a line or surface has support along at least one
     opposite sample pair, while an isolated point does not. The pass is
     quarter-linear-resolution, so the eight extra reads cost one half of a
     full-resolution bilinear read per frame. */
  let p = vec2f(6.0)/vec2f(textureDimensions(src));
  let support = max(max(
    0.5*(lum(textureSampleLevel(src,samp,uv+vec2f(p.x,0.0),0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv-vec2f(p.x,0.0),0.0).rgb)),
    0.5*(lum(textureSampleLevel(src,samp,uv+vec2f(0.0,p.y),0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv-vec2f(0.0,p.y),0.0).rgb))),
    max(
    0.5*(lum(textureSampleLevel(src,samp,uv+p,0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv-p,0.0).rgb)),
    0.5*(lum(textureSampleLevel(src,samp,uv+vec2f(p.x,-p.y),0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv+vec2f(-p.x,p.y),0.0).rgb))));
  let extended = smoothstep(0.12,0.38,support/max(l,0.001));
  textureStore(dst, gid.xy,
    vec4f(c*smoothstep(0.10,0.35,l)*extended, 1.0));
}`,hg=`
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var dst: texture_storage_2d<rgba16float, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(dst);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let uv = (vec2f(gid.xy)+vec2f(0.5))/vec2f(dims);
  let o = vec2f(0.5)/vec2f(textureDimensions(src));
  let c = textureSampleLevel(src,samp,uv+vec2f(-o.x,-o.y),0.0).rgb
          +textureSampleLevel(src,samp,uv+vec2f( o.x,-o.y),0.0).rgb
          +textureSampleLevel(src,samp,uv+vec2f(-o.x, o.y),0.0).rgb
          +textureSampleLevel(src,samp,uv+vec2f( o.x, o.y),0.0).rgb;
  textureStore(dst,vec2i(gid.xy),vec4f(c*0.25,1.0));
}`,mg=`
@group(0) @binding(0) var low: texture_2d<f32>;
@group(0) @binding(1) var high: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;
@group(0) @binding(3) var dst: texture_storage_2d<rgba16float, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(dst);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let uv = (vec2f(gid.xy)+vec2f(0.5))/vec2f(dims);
  let p = vec2f(1.0)/vec2f(textureDimensions(low));
  var broad = textureSampleLevel(low,samp,uv,0.0).rgb*0.40;
  broad += textureSampleLevel(low,samp,uv+vec2f( p.x,0.0),0.0).rgb*0.15;
  broad += textureSampleLevel(low,samp,uv+vec2f(-p.x,0.0),0.0).rgb*0.15;
  broad += textureSampleLevel(low,samp,uv+vec2f(0.0, p.y),0.0).rgb*0.15;
  broad += textureSampleLevel(low,samp,uv+vec2f(0.0,-p.y),0.0).rgb*0.15;
  let detail = textureSampleLevel(high,samp,uv,0.0).rgb;
  textureStore(dst,vec2i(gid.xy),vec4f(detail*0.12+broad*0.88,1.0));
}`,pg=`
struct CU {
  res: vec2f, bloom: f32, expo: f32,
  sharp: f32, starDens: f32, jitter: vec2f,
  starC0: vec4f,
  starC1: vec4f,
  starC2: vec4f,
}
@group(0) @binding(0) var sceneT: texture_2d<f32>;
@group(0) @binding(1) var bloomT: texture_2d<f32>;
@group(0) @binding(2) var rayT: texture_2d<u32>;
@group(0) @binding(3) var samp: sampler;
@group(0) @binding(4) var<uniform> C: CU;
fn h2(p: vec2f) -> f32 { return fract(sin(dot(p, vec2f(12.9898,78.233)))*43758.5453); }
fn h33s(p0: vec3f) -> vec3f {
  var p = fract(p0*vec3f(0.1031,0.1030,0.0973));
  p += dot(p,p.yxz+vec3f(33.33));
  return fract((p.xxy+p.yxx)*p.zyx);
}
fn bbs(T0: f32) -> vec3f {
  let T = clamp(T0,1200.0,22000.0); let t = T*0.01; var c: vec3f;
  c.r = select(clamp(1.29293618*pow(max(t-60.0,0.001),-0.13320476),0.0,1.0),1.0,t <= 66.0);
  c.g = select(clamp(1.12989086*pow(max(t-60.0,0.001),-0.07551485),0.0,1.0),clamp(0.39008158*log(t)-0.63184144,0.0,1.0),t <= 66.0);
  c.b = select(select(clamp(0.54320679*log(max(t-10.0,0.001))-1.19625408,0.0,1.0),0.0,t <= 19.0),1.0,t >= 66.0);
  return c*c;
}
fn octDir(e: vec2f) -> vec3f {
  var v = vec3f(e,1.0-abs(e.x)-abs(e.y));
  if (v.z < 0.0) {
    let s = vec2f(select(-1.0,1.0,v.x >= 0.0),select(-1.0,1.0,v.y >= 0.0));
    v = vec3f((vec2f(1.0)-abs(v.yx))*s,v.z);
  }
  return normalize(v);
}
fn rayNode(p: vec2i, dims: vec2i) -> vec4f {
  let r = textureLoad(rayT,clamp(p,vec2i(0),dims-vec2i(1)),0).xy;
  return vec4f(octDir(unpack2x16snorm(r.x)),select(0.0,1.0,(r.y&4u) != 0u));
}
/* The ray cache is traced at the adaptive internal resolution and at a
   subpixel Halton position. Undo that offset, decode four neighboring escape
   directions and interpolate vectors rather than packed octahedral codes.
   Across a shadow/discontinuity use the nearest node instead of blending two
   unrelated images. */
fn nativeRay(uv: vec2f) -> vec4f {
  let dims = vec2i(textureDimensions(rayT));
  let q = uv*vec2f(dims)-vec2f(0.5)-C.jitter;
  let p = vec2i(floor(q)); let f = fract(q);
  let r00 = rayNode(p,dims);
  let r10 = rayNode(p+vec2i(1,0),dims);
  let r01 = rayNode(p+vec2i(0,1),dims);
  let r11 = rayNode(p+vec2i(1,1),dims);
  let allValid = r00.w*r10.w*r01.w*r11.w > 0.5;
  let bilinear = normalize(mix(mix(r00.xyz,r10.xyz,f.x),mix(r01.xyz,r11.xyz,f.x),f.y));
  let nearest = rayNode(vec2i(floor(q+vec2f(0.5))),dims);
  return select(nearest,vec4f(bilinear,1.0),allValid);
}
/* Integrate a filled circle over the output pixel with a stable 4x4 coverage
   grid. A single SDF sample is visibly faceted at the 2-8 px diameters used by
   stars, while HDR edge samples are re-saturated by the scene tone mapper.
   Returning actual area coverage lets the final display-space composite keep
   the edge round without introducing a soft halo. */
fn discCoverage(q: vec2f, radius: f32) -> f32 {
  if (max(abs(q.x),abs(q.y)) > radius+0.71) { return 0.0; }
  var covered = 0.0;
  for (var i = 0u; i < 16u; i++) {
    let samplePos = vec2f(
      (f32(i&3u)+0.5)*0.25-0.5,
      (f32(i>>2u)+0.5)*0.25-0.5,
    );
    covered += select(0.0,1.0,dot(q-samplePos,q-samplePos) <= radius*radius);
  }
  return covered*(1.0/16.0);
}
/* One seam-free 3-D shell supplies deterministic celestial centers. The
   local inverse escape-direction Jacobian converts each angular displacement
   back to output-pixel coordinates, so even strongly lensed stars are rastered
   as circular output-space discs. RGB is premultiplied display colour and A is
   coverage/brightness; the layer is deliberately composited after tone map. */
fn nativeStars(d: vec3f, dx: vec3f, dy: vec3f) -> vec4f {
  let g00 = dot(dx,dx); let g01 = dot(dx,dy); let g11 = dot(dy,dy);
  let det = g00*g11-g01*g01;
  if (det < 1e-18 || C.starDens < 0.001) { return vec4f(0.0); }
  let lattice = 64.0;
  let p = d*lattice;
  let base = floor(p-vec3f(0.5));
  let galacticBand = exp(-d.y*d.y*150.0);
  let selection = clamp(C.starDens,0.0,2.0)*(0.055+0.055*galacticBand);
  var acc = vec4f(0.0);
  for (var i = 0u; i < 8u; i++) {
    let o = vec3f(f32(i&1u),f32((i>>1u)&1u),f32((i>>2u)&1u));
    let cell = base+o;
    let h = h33s(cell);
    let selected = fract(h.x*7.13+h.y*13.71+h.z*19.37);
    if (selected > selection) { continue; }
    let center = normalize(cell+vec3f(0.5)+(h.yzx-vec3f(0.5))*0.80);
    let delta = center-d*dot(center,d);
    let b0 = dot(delta,dx); let b1 = dot(delta,dy);
    let screenOffset = vec2f(
      (b0*g11-b1*g01)/det,
      (b1*g00-b0*g01)/det,
    );
    let magSeed = fract(h.x*17.17+h.y*5.23+h.z*11.91);
    let mag = pow(magSeed,6.0);
    let giant = mag*mag*mag*mag;
    // Most stars stay near the floor; the very sparse seed^24 tail reaches a
    // large enough diameter to read as genuinely round on a raster display.
    // The 1.2 px floor is deliberate: a 0.9 px floor left the field looking
    // like scattered single-pixel noise at desktop DPI.
    let radiusPx = 1.20+0.90*mag+3.70*giant;
    let coverage = discCoverage(screenOffset,radiusPx);
    if (coverage <= 0.0) { continue; }
    let temperatureSeed = fract(h.x*3.17+h.y*9.73+h.z*15.31);
    let color = pow(
      clamp(bbs(mix(3000.0,12000.0,temperatureSeed*temperatureSeed)),vec3f(0.0),vec3f(1.0)),
      vec3f(1.0/2.2),
    );
    let opacity = coverage*(0.42+0.58*pow(mag,0.35));
    let remaining = 1.0-acc.a;
    acc += vec4f(color,1.0)*(remaining*opacity);
  }
  return acc;
}
@vertex fn vs(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {
  let p = vec2f(f32((vi<<1u)&2u), f32(vi&2u));
  return vec4f(p*2.0-1.0, 0.0, 1.0);
}
@fragment fn fs(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy/C.res;
  let scene = textureSample(sceneT,samp,uv);
  var c = scene.rgb;
  var starLayer = vec4f(0.0);
  var starVisibility = 0.0;
  if (C.sharp > 0.001) { // HDR unsharp — recovers crispness lost to internal downscale
    let px = vec2f(1.0)/vec2f(textureDimensions(sceneT));
    let nb = textureSample(sceneT, samp, uv+vec2f(0.0,px.y)).rgb + textureSample(sceneT, samp, uv-vec2f(0.0,px.y)).rgb
           + textureSample(sceneT, samp, uv+vec2f(px.x,0.0)).rgb + textureSample(sceneT, samp, uv-vec2f(px.x,0.0)).rgb;
    c = max(c + C.sharp*(c - nb*0.25), vec3f(0.0));
  }
  if (textureDimensions(rayT).x > 1u) {
    let ray = nativeRay(uv);
    let cachedDir = ray.xyz;
    let d = normalize(
      C.starC0.xyz*cachedDir.x
      +C.starC1.xyz*cachedDir.y
      +C.starC2.xyz*cachedDir.z);
    // Derivatives are taken after the complete cached-yaw/Galactic transform,
    // in native output pixels rather than adaptive internal pixels.
    let dx = dpdx(d); let dy = dpdy(d);
    if (scene.a > 0.001) {
      starLayer = nativeStars(d,dx,dy);
      starVisibility = scene.a*ray.w;
    }
  }
  c += C.bloom*textureSample(bloomT, samp, uv).rgb;
  c *= C.expo;
  c = clamp((c*(2.51*c+vec3f(0.03)))/(c*(2.43*c+vec3f(0.59))+vec3f(0.14)), vec3f(0.0), vec3f(1.0));
  c = pow(c, vec3f(1.0/2.2));
  let starAlpha = clamp(starLayer.a*starVisibility,0.0,1.0);
  c = c*(1.0-starAlpha)+starLayer.rgb*starVisibility;
  c += vec3f((h2(pos.xy)-0.5)/255.0);
  return vec4f(c, 1.0);
}`,gg=u=>Math.floor(Math.log2(Math.max(1,u)))+1,fc=(...u)=>new Float32Array(u),vg=(u,r)=>{const c=new Float32Array(9);for(let s=0;s<3;s++)for(let f=0;f<3;f++)c[s*3+f]=u[f]*r[s*3]+u[3+f]*r[s*3+1]+u[6+f]*r[s*3+2];return c},bg=(u,r)=>{const c=Math.cos(u),s=Math.sin(u),f=Math.cos(r),d=Math.sin(r);return fc(c,0,-s,-s*d,f,-c*d,s*f,d,c*f)},H1=u=>{const r=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/r,u[1]/r,u[2]/r]},G1=(u,r)=>[u[1]*r[2]-u[2]*r[1],u[2]*r[0]-u[0]*r[2],u[0]*r[1]-u[1]*r[0]],q1=(u,r)=>{const c=Math.cos(u),s=Math.sin(u),f=Math.cos(r),d=Math.sin(r);return fc(f,0,-d,d*s,c,f*s,d*c,-s,f*c)},V1=(u,r)=>{let c=1,s=0;for(;u>0;)c/=r,s+=c*(u%r),u=Math.floor(u/r);return s},yg=150,xr=1200,Mr=8,xg=Mr*65536,Sg=u=>Math.min(.24,u.diskH*1.45),Z1=(u,r)=>{const c=[Math.max(8,u>>2),Math.max(8,r>>2)],s=[Math.max(1,c[0]>>1),Math.max(1,c[1]>>1)],f=[Math.max(1,s[0]>>1),Math.max(1,s[1]>>1)],d=[Math.max(1,f[0]>>1),Math.max(1,f[1]>>1)];return[c,s,f,d]},Wu=u=>u instanceof Error?`${u.name}: ${u.message}`:String(u),Tg=()=>{const u=location.origin;return window.isSecureContext?["WebGPU was not exposed by this browser or operating system.",`Current origin: ${u} (secure context)`,"","Check the browser’s WebGPU setting and reload. On Safari, also verify that the OS supports WebGPU and that Lockdown Mode or device policy is not disabling it."].join(`
`):["WebGPU is blocked because this page is not a secure context.",`Current origin: ${u}`,"","Binding Vite to 0.0.0.0 makes the page reachable, but plain HTTP on a LAN address is not WebGPU-eligible. For a phone or another computer, serve Astra through trusted HTTPS or an HTTPS tunnel. localhost/127.0.0.1 works only on the machine running the server."].join(`
`)},Eg=u=>{let r=u+2654435769>>>0;return r=Math.imul((r^r>>>16)>>>0,2146121005)>>>0,r=Math.imul((r^r>>>15)>>>0,2221713035)>>>0,(r^r>>>16)>>>0},j1=u=>{const r=u&65535,c=Eg(Math.imul(r,747796405)+2891336453>>>0);return[c&63,c>>>6&63,c>>>12&63]},Mg=u=>{const r=Math.tan(u.fov*Math.PI/360),c=mp(u.spin),s=Math.max(u.diskOut,c+2.5),f=u.spin,d=p=>1/(p*Math.sqrt(p)+f);return{tanHalfFov:r,diskInner:c,diskOuter:s,spin:f,omegaAt:d,pivotOmega:d(Math.sqrt(Math.max(c*s,1)))}},wg=(u,r=u.yaw)=>{const c=Math.cos(u.pitch),s=Math.sin(u.pitch),f=[u.dist*c*Math.cos(r),u.dist*c*Math.sin(r),u.dist*s];Math.abs(f[2])<.02&&(f[2]=.02);const d=H1([-f[0],-f[1],-f[2]]),p=H1(G1(d,[0,0,1])),b=G1(p,d),x=fc(p[0],p[1],p[2],b[0],b[1],b[2],d[0],d[1],d[2]);return{pos:f,basis:vg(x,bg(u.lookYaw,u.lookPitch))}},Ag=(u,r,c,s,f,d,p,b,x,v=new Float32Array(32))=>{const{pos:E,basis:g}=c,O=Ep(E,u.spin,{right:[g[0],g[1],g[2]],up:[g[3],g[4],g[5]],forward:[g[6],g[7],g[8]]}).covariant;return v.set([E[0],E[1],E[2],u.tanHalfFov,...O.observer,...O.right,...O.up,...O.forward,u.spin,u.diskInner,u.diskOuter,Math.max(32,r.dist+10),p,b,s,f,d,x[0],x[1],vp(u.spin)],0),v},Cg=(u,r,c,s,f,d=new Float32Array(32))=>{const p=Math.max(Math.abs(r.omegaAt(r.diskInner)-r.pivotOmega),Math.abs(r.omegaAt(r.diskOuter)-r.pivotOmega)),b=Math.min(1,1.1/(Mr*Math.max(p,1e-4))),x=0,v=s/Mr,E=Math.floor(v),g=Math.fround(v-E),A=Math.fround(g*Mr),O=Math.fround,k=O(g*g),C=O(k*g),G=O(O(g*O(O(g*6)-15))+10),Y=O(C*G),X=j1(E),Z=j1(E+1),V=c[0]*c[0]+c[1]*c[1]+c[2]*c[2],Q=r.spin*r.spin,D=V-Q,j=Math.max(1e-8,.5*(D+Math.sqrt(D*D+4*Q*c[2]*c[2]))),ie=2*Math.sqrt(j)*j/Math.max(1e-8,j*j+Q*c[2]*c[2]),Me=Math.sqrt(Math.max(1-ie,1e-4));return d.set([r.spin,r.diskInner,r.diskOuter,u.diskTemp,u.diskBright,A,u.beaming?1:0,u.redshift?1:0,c[0],c[1],c[2],Sg(u),r.tanHalfFov,r.pivotOmega,b,f,x,Math.cos(x),Math.sin(x),0,Y,X[0],X[1],X[2],Z[0],Z[1],Z[2],Me,0,0,0,1],0),d};let Ju=null;const _g=()=>{if(Ju)return Ju;const u=E=>(E^=E>>>16,E=Math.imul(E,2146121005),E^=E>>>15,E=Math.imul(E,2221713035),(E^E>>>16)>>>0),r=(E,g,A,O,k)=>(E=(E%O+O)%O,g=(g%O+O)%O,A=(A%O+O)%O,u(Math.imul(E+17,73856093)^Math.imul(g+31,19349663)^Math.imul(A+47,83492791)^k)/4294967295),c=(E,g,A,O,k)=>{const C=64/O;if(O===1)return r(E,g,A,C,k);const G=E/O,Y=g/O,X=A/O,Z=Math.floor(G),V=Math.floor(Y),Q=Math.floor(X),D=G-Z,j=Y-V,F=X-Q,ie=D*D*(3-2*D),Me=j*j*(3-2*j),Xe=F*F*(3-2*F),ae=(Le,z,P)=>Le+(z-Le)*P,_e=ae(ae(r(Z,V,Q,C,k),r(Z+1,V,Q,C,k),ie),ae(r(Z,V+1,Q,C,k),r(Z+1,V+1,Q,C,k),ie),Me),be=ae(ae(r(Z,V,Q+1,C,k),r(Z+1,V,Q+1,C,k),ie),ae(r(Z,V+1,Q+1,C,k),r(Z+1,V+1,Q+1,C,k),ie),Me);return Math.min(1,Math.max(0,.5+(ae(_e,be,Xe)-.5)*1.35))};let s=64,f=new Uint8Array(s*s*s*4);const d=[[[8,.48],[4,.34],[2,.18]],[[4,.46],[2,.36],[1,.18]],[[4,.24],[2,.42],[1,.34]],[[2,.38],[1,.62]]],p=[608135816,2242054355,320440878,57701188],b=[2654435769,2135587861,2496678331],x=(E,g,A,O,k)=>{let C=0;for(let G=0;G<O.length;G++){const[Y,X]=O[G];C+=X*c(E,g,A,Y,(k^b[G])>>>0)}return Math.min(1,Math.max(0,.5+(C-.5)*1.4))};for(let E=0;E<s;E++)for(let g=0;g<s;g++)for(let A=0;A<s;A++){const O=((E*s+g)*s+A)*4;for(let k=0;k<4;k++)f[O+k]=Math.round(x(A,g,E,d[k],p[k])*255)}const v=[{size:s,data:f}];for(;s>1;){const E=f,g=s;s>>=1,f=new Uint8Array(s*s*s*4);for(let A=0;A<s;A++)for(let O=0;O<s;O++)for(let k=0;k<s;k++){const C=((A*s+O)*s+k)*4;for(let G=0;G<4;G++){let Y=0;for(let X=0;X<2;X++)for(let Z=0;Z<2;Z++)for(let V=0;V<2;V++)Y+=E[(((A*2+X)*g+O*2+Z)*g+k*2+V)*4+G];f[C+G]=Math.round(Y/8)}}v.push({size:s,data:f})}return Ju=v,v};class Rg{camera=new ep;onStats=null;onError=null;onReady=null;onProgress=null;canvas;params;device=null;ctx=null;fmt;disposed=!1;ready=!1;raf=0;startGen=0;pSky=null;pSkyMip=null;pGranularKerr=null;pTaa=null;pBright=null;pHalationDown=null;pHalationUp=null;pDebris=null;pDebrisMicro=null;pComposite=null;inlineBGL;skyBGL;skyMipBGL;taaBGL;filtBGL;halationUpBGL;debrisBGL;compBGL;samp;diskNoiseSamp;astronomicalSkySamp;inlineGeoU;inlineU;skyU;skyCentersU;taaU;compU;debrisU;skyTex;skyCubeView;astronomicalSkyTex;astronomicalSkyView;pNebNoise=null;pNebBlur=null;pNebDensity=null;pNebPercentile=null;pNebLight=null;pNebIntegrate=null;pNebCompose=null;nebNoiseBGL;nebBlurBGL;nebDensityBGL;nebPercentileBGL;nebLightBGL;nebIntegrateBGL;nebComposeBGL;nebulaPipesReady=[];nebulaBakeChain=Promise.resolve();skyN=Fu;diskNoiseTex;bakeNoiseTex=[];bakeNoiseViews=[];diskNoiseView;simTargets=null;curView;debrisColorView;debrisDistView;debrisDepthView;debrisBG;skyBG;skyMipBGs=[];inlineBGGranular;composeBGL;composeBG;pInlineCompose=null;tileClassifyBGL;tileClassifyBG;pTileClassify=null;tileClassifyU=null;tileCount=0;debrisCullBGL;debrisCullBG;debrisCullFinalizeBGL;debrisCullFinalizeBG;pDebrisCull=null;pDebrisExpandMicro=null;pDebrisExpandLarge=null;debrisExpandLargeBG;debrisExpandBGL;debrisExpandBG;pDebrisCullFinalize=null;microRecordsBuf=null;microCountBuf=null;largeRecordsBuf=null;largeCountBuf=null;clusterInfoBuf=null;aliveClustersBuf=null;debrisArgsLarge=null;debrisArgsMicro=null;taaBG=[];brightBG=[];halationDownBGs=[];halationUpBGs=[];compBG=[];simW=8;simH=8;resScale=.62;autoScale=.62;qualityGovernor=new dp(this.autoScale);warmupUntil=0;rawLastT=0;lastQualitySubmitted=!1;tDisk=0;rigidPhase=0;debrisPhase=0;prevPos=[0,0,0];prevFw=[0,0,1];prevRt=[1,0,0];lastT=0;nextT;accumN=0;readIdx=0;jitterSeq=0;histValid=!1;skyDirty=!0;skyPendingAt=-1;geoDirty=!0;shadeDirty=!0;presentDirty=!0;bloomStale=!0;lastPoseKey="";prev;stage=new Float32Array(64);pipelineTotal=0;pipelineDone=0;firstFramePresented=!1;captureActive=!1;captureStepDt=null;capturePriorScale=1;captureTick=null;captureTargetW=0;captureTargetH=0;captureBlitCanvas=null;captureBlitResolve=null;captureBlitReject=null;frames=0;statT0=0;framesInFlight=0;completedFrames=0;completionDts=[];lastCompletionT=0;perfCompletions=[];perfSkips=[];constructor(r,c){this.canvas=r,this.params={...c},this.prev={...c},this.skyN=Fu,this.camera.fov=c.fov,this.resScale=c.quality>0?Math.min(100,c.quality)/100:this.autoScale}async start(){const r=++this.startGen;if(cancelAnimationFrame(this.raf),this.ready=!1,this.firstFramePresented=!1,this.pipelineTotal=0,this.pipelineDone=0,this.framesInFlight=0,this.completedFrames=0,this.completionDts.length=0,this.lastCompletionT=0,this.perfCompletions.length=0,this.perfSkips.length=0,this.onProgress?.(.02),this.destroySimTargets(),this.pSky=this.pSkyMip=this.pGranularKerr=null,this.pTaa=this.pBright=this.pHalationDown=this.pHalationUp=null,this.pDebris=this.pDebrisMicro=this.pComposite=null,!navigator.gpu){this.onError?.(Tg());return}let c=null,s="";try{c=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(g){s=Wu(g)}if(this.disposed||r!==this.startGen)return;if(!c){this.onError?.("WebGPU adapter unavailable — the browser reports no compatible GPU."+(s?`

Adapter request failed: ${s}`:""));return}const f=[];c.features.has("timestamp-query")&&f.push("timestamp-query");const d=Math.min(8,c.limits.maxStorageTexturesPerShaderStage),p=d>4?{maxStorageTexturesPerShaderStage:d}:{};let b;try{b=await c.requestDevice({requiredFeatures:f,requiredLimits:p})}catch(g){!this.disposed&&r===this.startGen&&this.onError?.(`WebGPU device creation failed.

${Wu(g)}`);return}if(this.disposed||r!==this.startGen){b.destroy();return}this.onProgress?.(.12),this.device=b,this.skyN=Fu,b.lost.then(g=>{this.device===b&&(this.ready=!1,!this.disposed&&g.reason!=="destroyed"&&(this.device=null,this.start()))});const x=this.canvas.getContext("webgpu");if(!x){b.destroy(),this.device=null,this.onError?.("WebGPU canvas initialization failed — this browser exposed WebGPU but did not provide a canvas context.");return}this.ctx=x;try{this.fmt=navigator.gpu.getPreferredCanvasFormat(),x.configure({device:b,format:this.fmt,alphaMode:"opaque"}),this.createLayoutsAndPipelines(b,r),this.createStaticResources(b),this.onProgress?.(.2+.7*(this.pipelineDone/Math.max(1,this.pipelineTotal))),await(this.nebulaBakeChain=this.bakeNebulaAtlas(b,r)),this.resize()}catch(g){b.destroy(),this.device=null,this.onError?.(`WebGPU renderer initialization failed.

${Wu(g)}`);return}this.skyDirty=this.geoDirty=this.shadeDirty=this.presentDirty=!0;const v=performance.now();this.warmupUntil=v+650,this.resetQualityEvidence(v),this.ready=!0,this.onReady?.();const E=g=>{this.disposed||this.startGen!==r||(this.raf=requestAnimationFrame(E),this.frame(g))};this.raf=requestAnimationFrame(E)}dispose(){this.disposed=!0,this.startGen++,cancelAnimationFrame(this.raf),this.camera.detach();try{this.device?.destroy()}catch{}}get capturing(){return this.captureActive}planCaptureTarget(r,c,s=!1){const f=this.device?.limits.maxTextureDimension2D??8192,p=Math.min(1,f/r,f/c,Math.sqrt(33554432/(r*c)));let b=Math.max(2,Math.round(r*p)),x=Math.max(2,Math.round(c*p));return s&&(b&=-2,x&=-2),{w:b,h:x}}async captureStill(r,c,s){const f=Math.min(br,Math.max(2,Math.round(r.samples??br)));this.captureBegin(!1,r.targetW??0,r.targetH??0);try{return await this.waitCapture(()=>(c?.(Math.min(this.accumN,f),f),this.accumN>=f),s),await this.snapshotPng(s)}finally{this.captureEnd()}}async captureVideo(r,c,s){const f=Math.min(60,Math.max(10,Math.round(r.fps??30))),d=Math.min(30,Math.max(1,r.seconds??5)),p=Math.min(br,Math.max(2,Math.round(r.samples??8))),b=Math.round(d*f);if(typeof VideoEncoder>"u")throw new Error("Recording needs WebCodecs video encoding, which this browser does not expose.");const{Output:x,Mp4OutputFormat:v,WebMOutputFormat:E,BufferTarget:g,CanvasSource:A,getFirstEncodableVideoCodec:O}=await $m(async()=>{const{Output:C,Mp4OutputFormat:G,WebMOutputFormat:Y,BufferTarget:X,CanvasSource:Z,getFirstEncodableVideoCodec:V}=await import("./index-CBVJQUGz.js");return{Output:C,Mp4OutputFormat:G,WebMOutputFormat:Y,BufferTarget:X,CanvasSource:Z,getFirstEncodableVideoCodec:V}},[],import.meta.url);this.captureBegin(!0,r.targetW??0,r.targetH??0);let k=null;try{const C=this.captureBlitCanvas;if(!C)throw new Error("Capture staging canvas was released.");const G=C.width,Y=C.height,X=new v;let Z=X,V="mp4",Q=await O(X.getSupportedVideoCodecs(),{width:G,height:Y});if(!Q){const Me=new E;Q=await O(Me.getSupportedVideoCodecs(),{width:G,height:Y}),Z=Me,V="webm"}if(!Q)throw new Error(`No supported video codec at ${G}x${Y} on this device.`);const D=new g;k=new x({format:Z,target:D});const j=Math.min(4e7,Math.max(4e6,Math.round(.12*G*Y*f))),F=new A(C,{codec:Q,bitrate:j});k.addVideoTrack(F,{frameRate:f}),await k.start();for(let Me=0;Me<b;Me++)Me>0&&(this.captureStepDt=1/f),await this.waitCapture(()=>this.captureStepDt===null&&this.accumN>=p,s),await this.requestPresentedBlit(s),c?.(Me+1,b,"render"),await F.add(Me/f,1/f);c?.(b,b,"encode"),await k.finalize();const ie=D.buffer;if(!ie)throw new Error("The encoder produced no output.");return{blob:new Blob([ie],{type:V==="mp4"?"video/mp4":"video/webm"}),extension:V}}catch(C){try{await k?.cancel()}catch{}throw C}finally{this.captureEnd()}}captureBegin(r=!1,c=0,s=0){if(this.captureActive)throw new Error("A capture is already in progress.");if(!this.ready||!this.device)throw new Error("The renderer is not ready to capture.");if(this.captureActive=!0,this.captureStepDt=null,c>0&&s>0){const d=this.planCaptureTarget(c,s,r);this.captureTargetW=d.w,this.captureTargetH=d.h}else this.captureTargetW=0,this.captureTargetH=0;this.capturePriorScale=this.resScale,this.resScale=1,this.resizeCanvas(),this.resizeSim();const f=document.createElement("canvas");if(f.width=Math.max(2,r?this.canvas.width&-2:this.canvas.width),f.height=Math.max(2,r?this.canvas.height&-2:this.canvas.height),!f.getContext("2d"))throw new Error("2D staging canvas unavailable for capture.");this.captureBlitCanvas=f,this.histValid=!1,this.accumN=0,this.jitterSeq=0,this.geoDirty=this.shadeDirty=this.presentDirty=!0}captureEnd(){this.captureActive&&(this.captureActive=!1,this.captureStepDt=null,this.captureTick=null,this.captureBlitReject?.(new Error("Capture ended before the frame was read.")),this.captureBlitResolve=null,this.captureBlitReject=null,this.captureBlitCanvas=null,this.resScale=this.capturePriorScale,this.captureTargetW=0,this.captureTargetH=0,!this.disposed&&this.ready&&this.device&&(this.resize(),this.resetQualityEvidence()),this.histValid=!1,this.accumN=0,this.geoDirty=this.shadeDirty=this.presentDirty=!0)}waitCapture(r,c){return new Promise((s,f)=>{const d=this.startGen,p=()=>{if(c?.aborted){this.captureTick=null,f(new DOMException("Capture canceled.","AbortError"));return}if(this.disposed||this.startGen!==d){this.captureTick=null,f(new Error("The renderer restarted during capture."));return}r()&&(this.captureTick=null,s())};this.captureTick=p,p()})}requestPresentedBlit(r){return new Promise((c,s)=>{if(r?.aborted){s(new DOMException("Capture canceled.","AbortError"));return}this.presentDirty=!0,this.captureBlitResolve=c,this.captureBlitReject=s})}async snapshotPng(r){await this.requestPresentedBlit(r);const c=this.captureBlitCanvas;if(!c)throw new Error("Capture staging canvas was released.");return await new Promise((s,f)=>c.toBlob(d=>d?s(d):f(new Error("PNG encoding failed.")),"image/png"))}setParams(r){const c=this.prev;let s=!1;const d=r.bloom>.004!=c.bloom>.004,p=r.spin!==c.spin||r.diskOut!==c.diskOut||r.diskH!==c.diskH||r.fov!==c.fov;if(this.params={...r},r.nebCount!==c.nebCount){const b=this.device;if(b&&this.ready){const x=this.startGen;this.nebulaBakeChain=this.nebulaBakeChain.then(()=>this.bakeNebulaAtlas(b,x))}}(r.galBright!==c.galBright||r.galTilt!==c.galTilt||r.nebDens!==c.nebDens||r.nebSize!==c.nebSize)&&(this.skyPendingAt=performance.now()),r.starDens!==c.starDens&&(this.presentDirty=!0),(r.spin!==c.spin||r.diskOut!==c.diskOut||r.diskH!==c.diskH||r.fov!==c.fov)&&(this.geoDirty=!0,s=!0),(r.diskTemp!==c.diskTemp||r.diskBright!==c.diskBright||r.beaming!==c.beaming||r.redshift!==c.redshift||r.playing!==c.playing||r.diskSpeed!==c.diskSpeed||r.diskHaze!==c.diskHaze)&&(this.shadeDirty=!0),r.taa!==c.taa&&(this.geoDirty=!0,this.shadeDirty=!0,this.presentDirty=!0,this.histValid=!1,this.accumN=0,this.jitterSeq=0),(r.bloom!==c.bloom||r.exposure!==c.exposure)&&(this.presentDirty=!0),r.fpsCap!==c.fpsCap&&(this.nextT=void 0,this.resetQualityEvidence()),r.quality!==c.quality&&(r.quality>0?this.resScale=Math.min(100,r.quality)/100:(c.quality>0&&(this.autoScale=this.resScale),this.resScale=this.autoScale),this.resetQualityEvidence(),this.resizeSim()),(d||p)&&this.resetQualityEvidence(),s&&(this.histValid=!1,this.accumN=0),this.camera.fov=r.fov,this.prev={...r}}resize(){if(!this.device||this.captureActive)return;const r=this.resizeCanvas(),c=this.resizeSim();(r||c)&&this.resetQualityEvidence()}resizeCanvas(){const r=this.device;if(!r)return!1;if(this.captureActive&&this.captureTargetW>0){const b=this.canvas.width!==this.captureTargetW||this.canvas.height!==this.captureTargetH;return b&&(this.canvas.width=this.captureTargetW,this.canvas.height=this.captureTargetH,this.presentDirty=!0),b}const c=Math.min(devicePixelRatio||1,2),s=r.limits.maxTextureDimension2D,f=Math.min(s,Math.max(2,Math.round(this.canvas.clientWidth*c))),d=Math.min(s,Math.max(2,Math.round(this.canvas.clientHeight*c))),p=this.canvas.width!==f||this.canvas.height!==d;return this.canvas.width!==f&&(this.canvas.width=f),this.canvas.height!==d&&(this.canvas.height=d),p&&(this.presentDirty=!0),p}resizeSim(){const r=this.device;if(!r)return!1;const c=this.canvas.width,s=this.canvas.height,f=Math.max(8,Math.round(c*this.resScale)),d=Math.max(8,Math.round(s*this.resScale));if(this.simTargets&&this.simW===f&&this.simH===d)return!1;this.simW=f,this.simH=d;const[[p,b],[x,v],[E,g],[A,O]]=Z1(f,d);this.destroySimTargets();const k=GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC,C=(X,Z,V,Q=1)=>r.createTexture({size:[X,Z,Q],format:V,usage:k}),G=(X,Z,V)=>r.createTexture({size:[X,Z],format:V,usage:k|GPUTextureUsage.RENDER_ATTACHMENT}),Y=(X,Z)=>{const V=r.createBuffer({size:Z,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return r.queue.writeBuffer(V,Cp,new Uint32Array([X])),V};return this.simTargets={gCrossA:C(f,d,"rgba32uint",3),gCrossB:C(f,d,"rg32uint",3),gRay:C(f,d,"rg32uint"),workQueue:Y(1,L1(1)),sparseQueue:Y(1,L1(1)),cur:G(f,d,"rgba16float"),debrisColor:r.createTexture({size:[f,d],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),debrisDist:r.createTexture({size:[f,d],format:"rg16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),inlineFront:C(f,d,"rgba16float"),inlineBack:C(f,d,"rgba16float"),tileModes:(()=>{const X=Math.ceil(f/8)*Math.ceil(d/8);return r.createBuffer({size:X*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})})(),debrisDepth:r.createTexture({size:[f,d],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),accum:[0,1].map(()=>C(f,d,"rgba16float")),bloomL0:C(p,b,"rgba16float"),bloomL1:C(x,v,"rgba16float"),bloomL2:C(E,g,"rgba16float"),bloomL3:C(A,O,"rgba16float"),bloomUp2:C(E,g,"rgba16float"),bloomUp1:C(x,v,"rgba16float"),bloomUp0:C(p,b,"rgba16float")},this.curView=this.simTargets.cur.createView(),this.debrisColorView=this.simTargets.debrisColor.createView(),this.debrisDistView=this.simTargets.debrisDist.createView(),this.debrisDepthView=this.simTargets.debrisDepth.createView(),this.buildBindGroups(r),this.accumN=0,this.histValid=!1,this.geoDirty=this.shadeDirty=this.presentDirty=!0,this.bloomStale=!0,!0}destroySimTargets(){const r=this.simTargets;if(r){try{[r.gCrossA,r.gCrossB,r.gRay,r.cur,r.debrisColor,r.debrisDist,r.inlineFront,r.inlineBack,r.debrisDepth,...r.accum,r.bloomL0,r.bloomL1,r.bloomL2,r.bloomL3,r.bloomUp2,r.bloomUp1,r.bloomUp0].forEach(c=>c.destroy()),r.tileModes.destroy(),r.workQueue.destroy(),r.sparseQueue.destroy()}catch{}this.simTargets=null}}createLayoutsAndPipelines(r,c){const s=GPUShaderStage,f=C=>r.createShaderModule({code:C});this.skyBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:s.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d-array"}},{binding:2,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:s.COMPUTE,sampler:{type:"filtering"}},{binding:4,visibility:s.COMPUTE,buffer:{type:"uniform"}}]}),this.skyMipBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"cube"}},{binding:1,visibility:s.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:s.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d-array"}}]});const d=(C,G,Y="2d")=>({binding:C,visibility:s.COMPUTE,storageTexture:{access:"write-only",format:G,viewDimension:Y}});this.inlineBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:s.COMPUTE,buffer:{type:"read-only-storage"}},d(2,"rgba32uint","2d-array"),d(3,"rg32uint","2d-array"),d(4,"rg32uint"),{binding:5,visibility:s.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"cube"}},{binding:7,visibility:s.COMPUTE,sampler:{type:"filtering"}},{binding:8,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:9,visibility:s.COMPUTE,sampler:{type:"filtering"}},d(10,"rgba16float"),{binding:11,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:12,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:13,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:14,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:15,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:16,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},d(17,"rgba16float"),{binding:18,visibility:s.COMPUTE,buffer:{type:"read-only-storage"}}]}),this.composeBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:1,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:2,visibility:s.COMPUTE,texture:{sampleType:"float"}},d(3,"rgba16float"),{binding:4,visibility:s.COMPUTE,sampler:{type:"filtering"}}]});const p=C=>({binding:C,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}}),b=(C,G)=>({binding:C,visibility:s.COMPUTE,storageTexture:{access:"write-only",format:G,viewDimension:"3d"}});this.nebNoiseBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},b(1,"rgba16float")]}),this.nebBlurBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},p(1),b(2,"rgba16float")]}),this.nebDensityBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},p(1),b(2,"rgba16float"),{binding:3,visibility:s.COMPUTE,buffer:{type:"storage"}}]}),this.nebPercentileBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:s.COMPUTE,buffer:{type:"storage"}}]}),this.nebLightBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},p(1),{binding:2,visibility:s.COMPUTE,buffer:{type:"read-only-storage"}},b(3,"r32float")]}),this.nebIntegrateBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},p(1),{binding:2,visibility:s.COMPUTE,sampler:{type:"filtering"}},p(3),{binding:4,visibility:s.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"3d"}},{binding:5,visibility:s.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"3d"}},{binding:6,visibility:s.COMPUTE,buffer:{type:"read-only-storage"}},{binding:7,visibility:s.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float"}}]}),this.nebComposeBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:2,visibility:s.COMPUTE,sampler:{type:"filtering"}},{binding:3,visibility:s.COMPUTE,storageTexture:{access:"write-only",format:"rgba8unorm"}}]}),this.tileClassifyBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:2,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:3,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:4,visibility:s.COMPUTE,buffer:{type:"storage"}}]}),this.taaBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:s.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:s.COMPUTE,texture:{sampleType:"unfilterable-float"}},d(3,"rgba16float")]}),this.filtBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:1,visibility:s.COMPUTE,sampler:{type:"filtering"}},d(2,"rgba16float")]}),this.halationUpBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:1,visibility:s.COMPUTE,texture:{sampleType:"float"}},{binding:2,visibility:s.COMPUTE,sampler:{type:"filtering"}},d(3,"rgba16float")]}),this.debrisBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.VERTEX|s.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:s.VERTEX,texture:{sampleType:"float",viewDimension:"3d"}},{binding:2,visibility:s.VERTEX,sampler:{type:"filtering"}},{binding:3,visibility:s.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:s.VERTEX,buffer:{type:"read-only-storage"}},{binding:5,visibility:s.VERTEX,buffer:{type:"read-only-storage"}}]}),this.debrisCullBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:s.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:2,visibility:s.COMPUTE,sampler:{type:"filtering"}},{binding:3,visibility:s.COMPUTE,buffer:{type:"storage"}}]}),this.debrisCullFinalizeBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:s.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:s.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:s.COMPUTE,buffer:{type:"storage"}}]}),this.debrisExpandBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:s.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:s.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:s.COMPUTE,buffer:{type:"storage"}}]}),this.compBGL=r.createBindGroupLayout({entries:[{binding:0,visibility:s.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:s.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:s.FRAGMENT,texture:{sampleType:"uint"}},{binding:3,visibility:s.FRAGMENT,sampler:{type:"filtering"}},{binding:4,visibility:s.FRAGMENT,buffer:{type:"uniform"}}]});const x=C=>r.createPipelineLayout({bindGroupLayouts:[C]}),v=()=>!this.disposed&&this.startGen===c&&this.device===r,E=()=>{this.pipelineDone++,v()&&this.onProgress?.(.2+.7*(this.pipelineDone/Math.max(1,this.pipelineTotal)))},g=(C,G,Y,X)=>(this.pipelineTotal++,r.createComputePipelineAsync({layout:x(C),compute:{module:f(G),entryPoint:"main",...X?{constants:X}:{}}}).then(Z=>{v()&&Y(Z),E()},Z=>{v()&&this.onError?.("Shader compile failed: "+Z),E()}));g(this.skyBGL,Xp,C=>{this.pSky=C}),g(this.skyMipBGL,Ip,C=>{this.pSkyMip=C}),this.nebulaPipesReady=[g(this.nebNoiseBGL,ig,C=>{this.pNebNoise=C}),g(this.nebBlurBGL,ng,C=>{this.pNebBlur=C}),g(this.nebDensityBGL,rg,C=>{this.pNebDensity=C}),g(this.nebPercentileBGL,sg,C=>{this.pNebPercentile=C}),g(this.nebLightBGL,ug,C=>{this.pNebLight=C}),g(this.nebIntegrateBGL,cg,C=>{this.pNebIntegrate=C}),g(this.nebComposeBGL,og,C=>{this.pNebCompose=C})],g(this.inlineBGL,Hp(),C=>{this.pGranularKerr=C},{GRANULAR_MATERIAL:1}),g(this.composeBGL,Bp,C=>{this.pInlineCompose=C}),g(this.tileClassifyBGL,Vp,C=>{this.pTileClassify=C}),g(this.debrisCullBGL,Zp,C=>{this.pDebrisCull=C}),g(this.debrisExpandBGL,jp,C=>{this.pDebrisExpandMicro=C}),g(this.debrisExpandBGL,Pp,C=>{this.pDebrisExpandLarge=C}),g(this.debrisCullFinalizeBGL,Yp,C=>{this.pDebrisCullFinalize=C}),g(this.taaBGL,fg,C=>{this.pTaa=C}),g(this.filtBGL,dg,C=>{this.pBright=C}),g(this.filtBGL,hg,C=>{this.pHalationDown=C}),g(this.halationUpBGL,mg,C=>{this.pHalationUp=C});const A=f(Gp),O=C=>r.createRenderPipeline({layout:x(this.debrisBGL),vertex:{module:A,entryPoint:"vs",constants:{MICRO_DEBRIS:C?1:0}},fragment:{module:A,entryPoint:"fs",constants:{MICRO_DEBRIS:C?1:0},targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}},{format:"rg16float",blend:{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}}]},primitive:{topology:"triangle-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!C,depthCompare:"less"}});this.pDebris=O(!1),this.pDebrisMicro=O(!0);const k=f(pg);this.pComposite=r.createRenderPipeline({layout:x(this.compBGL),vertex:{module:k,entryPoint:"vs"},fragment:{module:k,entryPoint:"fs",targets:[{format:this.fmt}]},primitive:{topology:"triangle-list"}})}createStaticResources(r){this.samp=r.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),this.diskNoiseSamp=r.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat"}),this.astronomicalSkySamp=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"clamp-to-edge"});const c=d=>r.createBuffer({size:d,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.inlineGeoU=c(128),this.inlineU=c(64),this.skyU=c(80),this.skyCentersU=c(16+Qi*16),this.taaU=c(16),this.compU=c(80),this.debrisU=c(128),this.clusterInfoBuf=r.createBuffer({size:Er*16,usage:GPUBufferUsage.STORAGE}),this.aliveClustersBuf=r.createBuffer({size:Er*16,usage:GPUBufferUsage.STORAGE});const s=()=>r.createBuffer({size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.INDIRECT});this.debrisArgsLarge=s(),this.debrisArgsMicro=s(),this.microRecordsBuf=r.createBuffer({size:ec*48,usage:GPUBufferUsage.STORAGE}),this.microCountBuf=r.createBuffer({size:4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.largeRecordsBuf=r.createBuffer({size:tc*48,usage:GPUBufferUsage.STORAGE}),this.largeCountBuf=r.createBuffer({size:4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.skyTex=r.createTexture({size:[this.skyN,this.skyN,6],format:"rgba16float",mipLevelCount:gg(this.skyN),usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.skyCubeView=this.skyTex.createView({dimension:"cube"}),this.skyMipBGs=this.createSkyMipBindGroups(r,this.skyTex),this.astronomicalSkyTex=r.createTexture({size:[N1,B1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING}),this.astronomicalSkyView=this.astronomicalSkyTex.createView();const f=_g();this.diskNoiseTex=r.createTexture({size:[f[0].size,f[0].size,f[0].size],dimension:"3d",format:"rgba8unorm",mipLevelCount:f.length,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let d=0;d<f.length;d++){const{size:p,data:b}=f[d],x=p*4,v=Math.max(256,Math.ceil(x/256)*256);let E=b;if(v!==x){E=new Uint8Array(v*p*p);for(let g=0;g<p;g++)for(let A=0;A<p;A++){const O=(g*p+A)*x;E.set(b.subarray(O,O+x),(g*p+A)*v)}}r.queue.writeTexture({texture:this.diskNoiseTex,mipLevel:d},E,{bytesPerRow:v,rowsPerImage:p},{width:p,height:p,depthOrArrayLayers:p})}this.diskNoiseView=this.diskNoiseTex.createView({dimension:"3d"}),this.bakeNoiseTex=k1.map(d=>r.createTexture({size:[d,d,d],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING})),this.bakeNoiseViews=this.bakeNoiseTex.map(d=>d.createView({dimension:"3d"}));{const d=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"3d"}}]}),p=r.createComputePipeline({layout:r.createPipelineLayout({bindGroupLayouts:[d]}),compute:{module:r.createShaderModule({code:qp}),entryPoint:"main"}}),b=[[9,27],[27,81],[27,81]],x=r.createCommandEncoder();this.bakeNoiseTex.forEach((v,E)=>{const g=k1[E],A=r.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(A,0,new Float32Array([b[E][0],b[E][1],0,g,0,0,17.13+E,41.7+E]));const O=r.createBindGroup({layout:d,entries:[{binding:0,resource:{buffer:A}},{binding:1,resource:this.bakeNoiseViews[E]}]}),k=x.beginComputePass();k.setPipeline(p),k.setBindGroup(0,O),k.dispatchWorkgroups(g/4,g/4,g/4),k.end()}),r.queue.submit([x.finish()])}this.skyBG=this.createSkyBakeBindGroup(r,this.skyTex)}async bakeNebulaAtlas(r,c){if(await Promise.all(this.nebulaPipesReady),this.disposed||c!==this.startGen||this.device!==r||!this.pNebNoise||!this.pNebBlur||!this.pNebDensity||!this.pNebPercentile||!this.pNebLight||!this.pNebIntegrate||!this.pNebCompose)return;const s=Jp(this.params.nebCount),f=new ArrayBuffer(16+Qi*16);new Uint32Array(f,0,1)[0]=s.length;const d=new Float32Array(f,16);s.forEach((j,F)=>{d.set(xd(j.targetRa,j.targetDec),F*4),d[F*4+3]=j.angularRadius*Math.PI/180}),r.queue.writeBuffer(this.skyCentersU,0,f);const p=oc,b=j=>r.createTexture({size:[p,p,p],dimension:"3d",format:j,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),x=b("rgba16float"),v=b("rgba16float"),E=b("r32float"),g=b("r32float"),A=r.createTexture({size:[yr,yr,Math.max(1,s.length)],format:"rgba16float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),O=r.createBuffer({size:bd*4,usage:GPUBufferUsage.STORAGE}),k=r.createBuffer({size:16,usage:GPUBufferUsage.STORAGE}),C=r.createBuffer({size:512,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),G=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat"}),Y=(j,F,ie,Me,Xe,ae)=>{ae&&r.queue.writeBuffer(C,0,ae.buffer,ae.byteOffset,ae.byteLength);const _e=r.createCommandEncoder(),be=_e.beginComputePass();be.setPipeline(j),be.setBindGroup(0,r.createBindGroup({layout:j.getBindGroupLayout(0),entries:F})),be.dispatchWorkgroups(ie,Me,Xe),be.end(),r.queue.submit([_e.finish()])},X=(j,F)=>{const ie=new ArrayBuffer(j*4);return F(new Float32Array(ie),new Uint32Array(ie)),new Uint8Array(ie)},Z=Math.ceil(p/4),V={binding:0,resource:{buffer:C}};for(let j=0;j<s.length;j++){const F=s[j],ie=lg(F);Y(this.pNebNoise,[V,{binding:1,resource:x.createView()}],Z,Z,Z,new Uint32Array([F.seed,0,0,0]));const Me=[x,v];for(let ae=0;ae<3;ae++){const _e=Me[ae%2],be=Me[1-ae%2],{sigma:Le,radius:z}=ie.axes[ae];Y(this.pNebBlur,[V,{binding:1,resource:_e.createView()},{binding:2,resource:be.createView()}],Z,Z,Z,X(8,(P,$)=>{P.set(Le,0),$[3]=ae,$.set(z,4)}))}Y(this.pNebDensity,[V,{binding:1,resource:v.createView()},{binding:2,resource:x.createView()},{binding:3,resource:{buffer:O}}],Z,Z,Z,X(4,(ae,_e)=>{ae.set(ie.invStd,0),_e[3]=F.variant})),Y(this.pNebPercentile,[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:k}}],1,1,1);const Xe=F.variant===1?[[0,0,1.55,E],[0,1,1.35,g]]:F.variant===2?[[1,0,1.45,E],[1,1,1.2,g]]:[[0,0,1.55,E],[1,1,1.2,g]];for(const[ae,_e,be,Le]of Xe)Y(this.pNebLight,[V,{binding:1,resource:x.createView()},{binding:2,resource:{buffer:k}},{binding:3,resource:Le.createView()}],Math.ceil(p/8),Math.ceil(p/8),1,X(8,(z,P)=>{P[0]=ae,P[1]=_e,z[4]=be}));Y(this.pNebIntegrate,[V,{binding:1,resource:x.createView()},{binding:2,resource:G},{binding:3,resource:v.createView()},{binding:4,resource:E.createView()},{binding:5,resource:g.createView()},{binding:6,resource:{buffer:k}},{binding:7,resource:A.createView({dimension:"2d",baseArrayLayer:j,arrayLayerCount:1})}],Math.ceil(yr/8),Math.ceil(yr/8),1,X(16,(ae,_e)=>{ae.set(F.lineColor,0),ae[3]=F.exposure,ae.set(F.hotColor,4),ae[7]=F.opacity,ae.set(F.dustColor,8),_e[11]=F.variant,ae[12]=ie.invStd[0]}))}const Q=new ArrayBuffer(16+Qi*48);new Uint32Array(Q,0,1)[0]=s.length;const D=new Float32Array(Q,16);s.forEach((j,F)=>{const ie=ag(j);D.set([...ie.center,ie.tanExtent],F*12),D.set([...ie.east,0],F*12+4),D.set([...ie.north,0],F*12+8)}),Y(this.pNebCompose,[V,{binding:1,resource:A.createView({dimension:"2d-array"})},{binding:2,resource:G},{binding:3,resource:this.astronomicalSkyView}],Math.ceil(N1/8),Math.ceil(B1/8),1,new Uint8Array(Q)),this.skyDirty=!0,this.histValid=!1,this.presentDirty=!0,r.queue.onSubmittedWorkDone().then(()=>{x.destroy(),v.destroy(),E.destroy(),g.destroy(),A.destroy(),O.destroy(),k.destroy(),C.destroy()})}createSkyBakeBindGroup(r,c){return r.createBindGroup({layout:this.skyBGL,entries:[{binding:0,resource:{buffer:this.skyU}},{binding:1,resource:c.createView({dimension:"2d-array",baseMipLevel:0,mipLevelCount:1})},{binding:2,resource:this.astronomicalSkyView},{binding:3,resource:this.astronomicalSkySamp},{binding:4,resource:{buffer:this.skyCentersU}}]})}createSkyMipBindGroups(r,c){const s=[];for(let f=1;f<c.mipLevelCount;f++)s.push(r.createBindGroup({layout:this.skyMipBGL,entries:[{binding:0,resource:c.createView({dimension:"cube",baseMipLevel:f-1,mipLevelCount:1})},{binding:1,resource:this.samp},{binding:2,resource:c.createView({dimension:"2d-array",baseMipLevel:f,mipLevelCount:1})}]}));return s}buildBindGroups(r){const c=this.simTargets,s=c.inlineFront.createView(),f=c.inlineBack.createView();this.debrisBG=r.createBindGroup({layout:this.debrisBGL,entries:[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:this.diskNoiseView},{binding:2,resource:this.diskNoiseSamp},{binding:3,resource:{buffer:this.aliveClustersBuf}},{binding:4,resource:{buffer:this.microRecordsBuf}},{binding:5,resource:{buffer:this.largeRecordsBuf}}]}),this.debrisCullBG=r.createBindGroup({layout:this.debrisCullBGL,entries:[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:this.diskNoiseView},{binding:2,resource:this.diskNoiseSamp},{binding:3,resource:{buffer:this.clusterInfoBuf}}]}),this.debrisCullFinalizeBG=r.createBindGroup({layout:this.debrisCullFinalizeBGL,entries:[{binding:0,resource:{buffer:this.debrisArgsLarge}},{binding:1,resource:{buffer:this.debrisArgsMicro}},{binding:2,resource:{buffer:this.largeCountBuf}},{binding:3,resource:{buffer:this.microCountBuf}}]}),this.debrisExpandBG=r.createBindGroup({layout:this.debrisExpandBGL,entries:[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:{buffer:this.clusterInfoBuf}},{binding:2,resource:{buffer:this.microRecordsBuf}},{binding:3,resource:{buffer:this.microCountBuf}}]}),this.debrisExpandLargeBG=r.createBindGroup({layout:this.debrisExpandBGL,entries:[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:{buffer:this.clusterInfoBuf}},{binding:2,resource:{buffer:this.largeRecordsBuf}},{binding:3,resource:{buffer:this.largeCountBuf}}]});const d=c.gCrossA.createView({dimension:"2d-array"}),p=c.gCrossB.createView({dimension:"2d-array"}),b=c.gRay.createView(),x=c.accum.map(X=>X.createView()),v=c.bloomL0.createView(),E=c.bloomL1.createView(),g=c.bloomL2.createView(),A=c.bloomL3.createView(),O=c.bloomUp2.createView(),k=c.bloomUp1.createView(),C=c.bloomUp0.createView();this.inlineBGGranular=r.createBindGroup({layout:this.inlineBGL,entries:[{binding:0,resource:{buffer:this.inlineGeoU}},{binding:1,resource:{buffer:c.workQueue}},{binding:2,resource:d},{binding:3,resource:p},{binding:4,resource:b},{binding:5,resource:{buffer:c.sparseQueue}},{binding:6,resource:this.skyCubeView},{binding:7,resource:this.samp},{binding:8,resource:this.diskNoiseView},{binding:9,resource:this.diskNoiseSamp},{binding:10,resource:f},{binding:11,resource:{buffer:this.inlineU}},{binding:12,resource:this.debrisColorView},{binding:13,resource:this.debrisDistView},{binding:14,resource:this.bakeNoiseViews[0]},{binding:15,resource:this.bakeNoiseViews[1]},{binding:16,resource:this.bakeNoiseViews[2]},{binding:17,resource:s},{binding:18,resource:{buffer:c.tileModes}}]}),this.composeBG=r.createBindGroup({layout:this.composeBGL,entries:[{binding:0,resource:s},{binding:1,resource:f},{binding:2,resource:this.debrisColorView},{binding:3,resource:this.curView},{binding:4,resource:this.samp}]}),this.tileCount=Math.ceil(this.simW/8)*Math.ceil(this.simH/8),this.tileClassifyU||(this.tileClassifyU=r.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),r.queue.writeBuffer(this.tileClassifyU,0,new Uint32Array([Math.ceil(this.simW/8),Math.ceil(this.simH/8),this.simW,this.simH])),this.tileClassifyBG=r.createBindGroup({layout:this.tileClassifyBGL,entries:[{binding:0,resource:{buffer:this.tileClassifyU}},{binding:1,resource:s},{binding:2,resource:f},{binding:3,resource:this.debrisColorView},{binding:4,resource:{buffer:c.tileModes}}]}),this.taaBG=[0,1].map(X=>r.createBindGroup({layout:this.taaBGL,entries:[{binding:0,resource:{buffer:this.taaU}},{binding:1,resource:this.curView},{binding:2,resource:x[1-X]},{binding:3,resource:x[X]}]})),this.brightBG=[0,1].map(X=>r.createBindGroup({layout:this.filtBGL,entries:[{binding:0,resource:x[X]},{binding:1,resource:this.samp},{binding:2,resource:v}]}));const G=(X,Z)=>r.createBindGroup({layout:this.filtBGL,entries:[{binding:0,resource:X},{binding:1,resource:this.samp},{binding:2,resource:Z}]});this.halationDownBGs=[G(v,E),G(E,g),G(g,A)];const Y=(X,Z,V)=>r.createBindGroup({layout:this.halationUpBGL,entries:[{binding:0,resource:X},{binding:1,resource:Z},{binding:2,resource:this.samp},{binding:3,resource:V}]});this.halationUpBGs=[Y(A,g,O),Y(O,E,k),Y(k,v,C)],this.compBG=[0,1].map(X=>r.createBindGroup({layout:this.compBGL,entries:[{binding:0,resource:x[X]},{binding:1,resource:C},{binding:2,resource:b},{binding:3,resource:this.samp},{binding:4,resource:{buffer:this.compU}}]}))}resetQualityEvidence(r=performance.now()){this.qualityGovernor.reset(r),this.perfCompletions.length=0,this.perfSkips.length=0}frame(r){if(this.disposed||!this.ready||!this.device||document.hidden||!this.simTargets)return;this.captureTick?.();const c=this.rawLastT?r-this.rawLastT:0;this.rawLastT=r;const s=this.params,f=s.taa||this.captureActive,d=this.captureActive?this.captureStepDt:null;this.captureActive&&(this.captureStepDt=null);const p=s.playing&&s.diskSpeed>0&&(!this.captureActive||d!==null),b=!!(this.pSky&&this.pSkyMip&&this.pGranularKerr&&this.pInlineCompose&&this.pTileClassify&&this.inlineBGGranular&&this.pTaa&&this.pBright&&this.pHalationDown&&this.pHalationUp&&this.pDebris&&this.pDebrisMicro&&this.pComposite);if(this.qualityGovernor.observeRaf(c,!b||!this.lastQualitySubmitted),!b){this.lastQualitySubmitted=!1;return}if(this.framesInFlight>=2){this.lastQualitySubmitted=!1;const pe=performance.now();for(this.perfSkips.push(pe);this.perfSkips.length&&pe-this.perfSkips[0]>xr;)this.perfSkips.shift();this.emitStats(pe);return}const x=this.captureActive?0:s.fpsCap;if(x&&x<240){if(this.nextT===void 0&&(this.nextT=r),r<this.nextT-.5){this.lastQualitySubmitted=!1;return}const pe=1e3/x;this.nextT=Math.max(this.nextT+pe,r-pe)}this.lastT||(this.lastT=r);const v=Math.min(.1,(r-this.lastT)/1e3);this.lastT=r,this.skyPendingAt>=0&&r-this.skyPendingAt>yg&&(this.skyDirty=!0,this.histValid=!1,this.skyPendingAt=-1);const E=this.captureActive?d??0:v;this.camera.update(E,s.autoOrbit);const g=this.camera.poseKey(),A=g!==this.lastPoseKey;this.lastPoseKey=g,A&&(this.geoDirty=!0);const O=Mg(s),{tanHalfFov:k,diskInner:C,diskOuter:G,spin:Y,pivotOmega:X}=O;if(p){const pe=E*s.diskSpeed*4.5;this.tDisk=(this.tDisk+pe)%xg,this.rigidPhase=(this.rigidPhase+X*pe)%(2*Math.PI);const Se=Math.SQRT1_2*Math.pow(G/25,1.5);this.debrisPhase=(this.debrisPhase-Se*X*pe)%(2*Math.PI),this.shadeDirty=!0}const Z=this.camera,{pos:V,basis:Q}=wg(Z),D=[Q[0],Q[1],Q[2]],j=[Q[6],Q[7],Q[8]];let F=this.geoDirty;const ie=Math.hypot(V[0]-this.prevPos[0],V[1]-this.prevPos[1],V[2]-this.prevPos[2]),Me=Math.acos(Math.min(1,Math.max(-1,j[0]*this.prevFw[0]+j[1]*this.prevFw[1]+j[2]*this.prevFw[2]))),Xe=Math.acos(Math.min(1,Math.max(-1,D[0]*this.prevRt[0]+D[1]*this.prevRt[1]+D[2]*this.prevRt[2])));this.prevPos=V,this.prevFw=[j[0],j[1],j[2]],this.prevRt=[D[0],D[1],D[2]];const ae=Math.max((Me+ie/Math.max(this.camera.dist,3))/Math.max(k,.1),Xe)*(this.simH*.5);let _e=A?.16+.39*Math.min(1,ae/3):.2,be=1;this.geoDirty||this.shadeDirty||this.skyDirty?(this.accumN=0,this.captureActive&&(_e=1,be=0)):f&&!p&&this.accumN<br&&(this.accumN===0&&(this.accumN=1),F=!0,_e=1/(this.accumN+1),be=0);let z=F||this.shadeDirty||this.skyDirty,P=be===0?"idle":z?"full-trace":"idle";const $=this.camera.isUserActive(r)||A&&F&&ae>2;for(P!=="full-trace"&&(this.perfCompletions.length=0,this.perfSkips.length=0);this.perfCompletions.length&&r-this.perfCompletions[0]>xr;)this.perfCompletions.shift();for(;this.perfSkips.length&&r-this.perfSkips[0]>xr;)this.perfSkips.shift();const oe=this.perfCompletions.length;let ve=0,S=0;if(oe>=2){const pe=r-this.perfCompletions[0];pe>50&&(ve=(oe-1)*1e3/pe);const Se=[];for(let Te=Math.max(1,oe-10);Te<oe;Te++)Se.push(this.perfCompletions[Te]-this.perfCompletions[Te-1]);Se.sort((Te,Ve)=>Te-Ve),S=Se[Se.length>>1]??0}const B=this.qualityGovernor.tick({now:r,scale:this.resScale,fpsCap:s.fpsCap,enabled:s.quality===0&&!this.captureActive,allowChanges:r>this.warmupUntil||$,streaming:P==="full-trace",interactive:$,completedFps:ve,completedCount:oe,gpuFrameMs:S,skipsPerSec:this.perfSkips.length/(xr/1e3)});if(B.changed&&(this.autoScale=B.scale,this.resScale=B.scale,this.perfCompletions.length=0,this.perfSkips.length=0,this.resizeSim()&&(F=!0,z=!0,P="full-trace",_e=1,be=0)),!this.simTargets||!this.inlineBGGranular){this.lastQualitySubmitted=!1;return}if(!z&&!this.presentDirty){this.lastQualitySubmitted=!1,this.emitStats(r);return}this.histValid||(_e=1,be=0);const K=this.device,te=K.queue,ce=480,ue=K.createCommandEncoder(),Je=s.bloom>.004;if(this.skyDirty){const pe=q1(s.galTilt*Math.PI/180,.6);te.writeBuffer(this.skyU,0,new Float32Array([pe[0],pe[1],pe[2],0,pe[3],pe[4],pe[5],0,pe[6],pe[7],pe[8],0,0,s.galBright,1.25*(Math.PI/2)/this.skyN,s.nebDens,s.nebSize,0,0,0]));const Se=ue.beginComputePass();Se.setPipeline(this.pSky),Se.setBindGroup(0,this.skyBG),Se.dispatchWorkgroups(Math.ceil(this.skyN/8),Math.ceil(this.skyN/8),6),Se.setPipeline(this.pSkyMip);let Te=this.skyN;for(const Ve of this.skyMipBGs)Te=Math.max(1,Math.floor(Te/2)),Se.setBindGroup(0,Ve),Se.dispatchWorkgroups(Math.ceil(Te/8),Math.ceil(Te/8),6);Se.end()}F&&(be===0?this.accumN++:this.accumN=1);let De=!1;if(z){const pe=1-this.readIdx,Se=Cg(s,O,V,this.tDisk,this.rigidPhase,this.stage);let Te=[0,0];if(f&&this.histValid){const Ze=be===0?this.accumN+1:this.jitterSeq=(this.jitterSeq&15)+1;Te=[V1(Ze,2)-.5,V1(Ze,3)-.5]}{if(this.stage.set([V[0],V[1],V[2],k,Q[0],Q[1],Q[2],this.simW/this.simH,Q[3],Q[4],Q[5],.025,Q[6],Q[7],Q[8],12.5,C,G,s.diskH,Se[27],this.tDisk,this.debrisPhase,Y,X,this.simW,this.simH,s.diskBright,s.diskTemp,Te[0],Te[1],0,0],0),te.writeBuffer(this.debrisU,0,this.stage,0,32),te.writeBuffer(this.microCountBuf,0,new Uint32Array([0])),te.writeBuffer(this.largeCountBuf,0,new Uint32Array([0])),this.pDebrisCull&&this.pDebrisExpandMicro&&this.pDebrisExpandLarge&&this.pDebrisCullFinalize){const we=ue.beginComputePass();we.setPipeline(this.pDebrisCull),we.setBindGroup(0,this.debrisCullBG),we.dispatchWorkgroups(Math.ceil(Er/64)),we.setPipeline(this.pDebrisExpandMicro),we.setBindGroup(0,this.debrisExpandBG),we.dispatchWorkgroups(Math.ceil(ec/64)),we.setPipeline(this.pDebrisExpandLarge),we.setBindGroup(0,this.debrisExpandLargeBG),we.dispatchWorkgroups(Math.ceil(tc/64)),we.setPipeline(this.pDebrisCullFinalize),we.setBindGroup(0,this.debrisCullFinalizeBG),we.dispatchWorkgroups(1),we.end()}const Ze=ue.beginRenderPass({colorAttachments:[{view:this.debrisColorView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"},{view:this.debrisDistView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.debrisDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"discard"}});Ze.setPipeline(this.pDebris),Ze.setBindGroup(0,this.debrisBG),Ze.drawIndirect(this.debrisArgsLarge,0),Ze.setPipeline(this.pDebrisMicro),Ze.drawIndirect(this.debrisArgsMicro,0),Ze.end()}const Ve=!A&&ae<.25,Fl=ae<.7,Ga=f&&this.histValid&&be!==0?Ve?8+(this.frames&7):Fl?4+(this.frames&3):2+(this.frames&1):0,fa=ue.beginComputePass();{const Ze=Ag(O,Z,{pos:V,basis:Q},s.diskH,this.simW,this.simH,ce,0,Te);te.writeBuffer(this.inlineGeoU,0,Ze);const we=[s.diskTemp,s.diskBright,this.tDisk,this.debrisPhase,s.beaming?1:0,s.redshift?1:0,Se[27],X,s.diskHaze,Ga,2*k/this.simH,A?0:1,be===0?1:0,0,0,0];te.writeBuffer(this.inlineU,0,new Float32Array(we)),fa.setPipeline(this.pGranularKerr),fa.setBindGroup(0,this.inlineBGGranular)}fa.dispatchWorkgroups(Math.ceil(this.simW/(Ga?16:8)),Math.ceil(this.simH/(Ga>=8?32:Ga>=4?16:8))),fa.end();{const Ze=ue.beginComputePass();Ze.setPipeline(this.pInlineCompose),Ze.setBindGroup(0,this.composeBG),Ze.dispatchWorkgroups(Math.ceil(this.simW/8),Math.ceil(this.simH/8)),Ze.setPipeline(this.pTileClassify),Ze.setBindGroup(0,this.tileClassifyBG),Ze.dispatchWorkgroups(Math.ceil(this.tileCount/64)),Ze.end()}const Kl=f?_e:1,Wl=f?be:0;this.stage.set([Kl,Wl,0,0],0),te.writeBuffer(this.taaU,0,this.stage,0,4);const rl=ue.beginComputePass();rl.setPipeline(this.pTaa),rl.setBindGroup(0,this.taaBG[pe]),rl.dispatchWorkgroups(Math.ceil(this.simW/8),Math.ceil(this.simH/8)),rl.end(),this.readIdx=pe,this.histValid=!0,De=!0}if(Je&&(De||this.bloomStale)){const Se=Z1(this.simW,this.simH).map(([Ve,Fl])=>[Math.ceil(Ve/8),Math.ceil(Fl/8)]),Te=ue.beginComputePass();Te.setPipeline(this.pBright),Te.setBindGroup(0,this.brightBG[this.readIdx]),Te.dispatchWorkgroups(...Se[0]),Te.setPipeline(this.pHalationDown);for(let Ve=0;Ve<3;Ve++)Te.setBindGroup(0,this.halationDownBGs[Ve]),Te.dispatchWorkgroups(...Se[Ve+1]);Te.setPipeline(this.pHalationUp);for(let Ve=0;Ve<3;Ve++)Te.setBindGroup(0,this.halationUpBGs[Ve]),Te.dispatchWorkgroups(...Se[2-Ve]);Te.end(),this.bloomStale=!1}De&&!Je&&(this.bloomStale=!0);const st=q1(s.galTilt*Math.PI/180,.6);this.stage.set([this.canvas.width,this.canvas.height,s.bloom,s.exposure,Math.max(0,.75*(1-this.resScale))+(this.resScale<1?.12:0),s.starDens,0,0,st[0],st[1],st[2],0,st[3],st[4],st[5],0,st[6],st[7],st[8],0],0),te.writeBuffer(this.compU,0,this.stage,0,20);const Pt=ue.beginRenderPass({colorAttachments:[{view:this.ctx.getCurrentTexture().createView(),loadOp:"clear",clearValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]});if(Pt.setPipeline(this.pComposite),Pt.setBindGroup(0,this.compBG[this.readIdx]),Pt.draw(3),Pt.end(),te.submit([ue.finish()]),this.firstFramePresented||(this.firstFramePresented=!0,this.onProgress?.(1)),this.captureBlitResolve&&this.captureBlitCanvas){this.captureBlitCanvas.getContext("2d").drawImage(this.canvas,0,0);const Se=this.captureBlitResolve;this.captureBlitResolve=null,this.captureBlitReject=null,Se()}this.framesInFlight++;const Ql=this.startGen;te.onSubmittedWorkDone().then(()=>{if(this.startGen!==Ql)return;this.framesInFlight=Math.max(0,this.framesInFlight-1);const pe=performance.now();this.lastCompletionT&&this.completionDts.push(pe-this.lastCompletionT),this.lastCompletionT=pe,this.completedFrames++,this.perfCompletions.push(pe)}),this.lastQualitySubmitted=!0,this.skyDirty=this.geoDirty=this.shadeDirty=this.presentDirty=!1,this.frames++,this.emitStats(r)}emitStats(r){if(this.statT0||(this.statT0=r),r-this.statT0>500){const c=(r-this.statT0)/1e3,s=this.completionDts.slice().sort((d,p)=>d-p),f=s.length?s[Math.min(s.length-1,Math.ceil(s.length*.95)-1)]:0;this.onStats?.({fps:Math.round(this.completedFrames/c),p95Ms:Math.round(f),simW:this.simW,simH:this.simH,resScale:this.resScale}),this.completedFrames=0,this.statT0=r,this.completionDts.length=0}}}const P1=u=>{let r;const c=new Set,s=(v,E)=>{const g=typeof v=="function"?v(r):v;if(!Object.is(g,r)){const A=r;r=E??(typeof g!="object"||g===null)?g:Object.assign({},r,g),c.forEach(O=>O(r,A))}},f=()=>r,b={setState:s,getState:f,getInitialState:()=>x,subscribe:v=>(c.add(v),()=>c.delete(v))},x=r=u(s,f,b);return b},zg=(u=>u?P1(u):P1),Ug=u=>u;function Og(u,r=Ug){const c=Xi.useSyncExternalStore(u.subscribe,Xi.useCallback(()=>r(u.getState()),[u,r]),Xi.useCallback(()=>r(u.getInitialState()),[u,r]));return Xi.useDebugValue(c),c}const Lg=u=>{const r=zg(u),c=s=>Og(r,s);return Object.assign(c,r),c},Sd=(u=>Lg);function Td(u,r){let c;try{c=u()}catch{return}return{getItem:f=>{var d;const p=x=>x===null?null:JSON.parse(x,void 0),b=(d=c.getItem(f))!=null?d:null;return b instanceof Promise?b.then(p):p(b)},setItem:(f,d)=>c.setItem(f,JSON.stringify(d,void 0)),removeItem:f=>c.removeItem(f)}}const ac=u=>r=>{try{const c=u(r);return c instanceof Promise?c:{then(s){return ac(s)(c)},catch(s){return this}}}catch(c){return{then(s){return this},catch(s){return ac(s)(c)}}}},Dg=(u,r)=>(c,s,f)=>{let d={storage:Td(()=>window.localStorage),partialize:G=>G,version:0,merge:(G,Y)=>({...Y,...G}),...r},p=!1,b=0;const x=new Set,v=new Set;let E=d.storage;if(!E)return u((...G)=>{console.warn(`[zustand persist middleware] Unable to update item '${d.name}', the given storage is currently unavailable.`),c(...G)},s,f);const g=()=>{const G=d.partialize({...s()});return E.setItem(d.name,{state:G,version:d.version})},A=f.setState;f.setState=(G,Y)=>(A(G,Y),g());const O=u((...G)=>(c(...G),g()),s,f);f.getInitialState=()=>O;let k;const C=()=>{var G,Y;if(!E)return;const X=++b;p=!1,x.forEach(V=>{var Q;return V((Q=s())!=null?Q:O)});const Z=((Y=d.onRehydrateStorage)==null?void 0:Y.call(d,(G=s())!=null?G:O))||void 0;return ac(E.getItem.bind(E))(d.name).then(V=>{if(V)if(typeof V.version=="number"&&V.version!==d.version){if(d.migrate){const Q=d.migrate(V.state,V.version);return Q instanceof Promise?Q.then(D=>[!0,D]):[!0,Q]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,V.state];return[!1,void 0]}).then(V=>{var Q;if(X!==b)return;const[D,j]=V;if(k=d.merge(j,(Q=s())!=null?Q:O),c(k,!0),D)return g()}).then(()=>{X===b&&(Z?.(s(),void 0),k=s(),p=!0,v.forEach(V=>V(k)))}).catch(V=>{X===b&&Z?.(void 0,V)})};return f.persist={setOptions:G=>{d={...d,...G},G.storage&&(E=G.storage)},clearStorage:()=>{E?.removeItem(d.name)},getOptions:()=>d,rehydrate:()=>C(),hasHydrated:()=>p,onHydrate:G=>(x.add(G),()=>{x.delete(G)}),onFinishHydration:G=>(v.add(G),()=>{v.delete(G)})},d.skipHydration||C(),k||O},kg=Dg,Ng={spin:.98,diskOut:15,diskH:.055,diskTemp:5600,diskBright:1.15,diskSpeed:.55,diskHaze:.62,playing:!0,beaming:!0,redshift:!0,starDens:.8,galBright:.75,galTilt:14,nebDens:1.4,nebSize:2,nebCount:3,quality:0,fov:55,taa:!0,bloom:.7,exposure:1.05,fpsCap:60,autoOrbit:!0,captureScale:1,photoSamples:64,clipSeconds:5,clipFps:30,clipSamples:8},Ed="astra.params.v1";function lc(u,r){return Math.min(u,r)>=560?"desktop":u>r?"landscape":"portrait"}const Y1=(()=>{try{return!localStorage.getItem(Ed)&&lc(window.innerWidth,window.innerHeight)!=="desktop"}catch{return!1}})(),Be=Sd()((u,r)=>({stats:{fps:0,p95Ms:0,simW:0,simH:0,resScale:0},offCenter:!1,hintDone:!1,activeSec:"presets",loadProgress:0,capture:null,setStats:c=>{const s=r().stats;(s.fps!==c.fps||s.p95Ms!==c.p95Ms||s.simW!==c.simW||s.simH!==c.simH||s.resScale!==c.resScale)&&u({stats:c})},setOffCenter:c=>{r().offCenter!==c&&u({offCenter:c})},setHintDone:()=>{r().hintDone||u({hintDone:!0})},setActiveSec:c=>{r().activeSec!==c&&u({activeSec:c})},setLoadProgress:c=>{const s=r().loadProgress;(c>s||c<s-.5)&&u({loadProgress:c})},setCapture:c=>u({capture:c})}));let X1=0,Ii=null;const dc=()=>{if(Ii){try{localStorage.setItem(Ii[0],Ii[1])}catch{}Ii=null}};window.addEventListener("pagehide",dc);document.addEventListener("visibilitychange",()=>{document.hidden&&dc()});const Bg={getItem:u=>localStorage.getItem(u),removeItem:u=>localStorage.removeItem(u),setItem:(u,r)=>{Ii=[u,r],window.clearTimeout(X1),X1=window.setTimeout(dc,400)}},Nt=Sd()(kg(u=>({params:Ng,panelOpen:!Y1,secOpen:Y1?{presets:!0,disk:!1,env:!1,render:!1}:{presets:!0,disk:!0,env:!0,render:!0},set:r=>u(c=>({params:{...c.params,...r}})),setPanelOpen:r=>u({panelOpen:r}),toggleSec:r=>u(c=>({secOpen:{...c.secOpen,[r]:!c.secOpen[r]}}))}),{name:Ed,storage:Td(()=>Bg),partialize:u=>({params:u.params,panelOpen:u.panelOpen,secOpen:u.secOpen}),merge:(u,r)=>{const c=u;if(!c||typeof c!="object")return r;const s={...r.params};for(const f in c.params??{}){const d=f;d in s&&typeof c.params[d]==typeof s[d]&&(s[d]=c.params[d])}return s.diskH=Math.min(.2,Math.max(0,s.diskH)),s.nebDens=Math.min(2,Math.max(0,s.nebDens)),s.nebCount=Math.min(10,Math.max(0,Math.round(s.nebCount))),s.nebSize=Math.min(2.5,Math.max(.3,s.nebSize)),s.quality=Math.min(100,Math.max(0,Math.round(s.quality))),{...r,params:s,panelOpen:typeof c.panelOpen=="boolean"?c.panelOpen:r.panelOpen,secOpen:{...r.secOpen,...c.secOpen??{}}}}})),ca={current:null};function Hg(){const u=m.useRef(null),[r,c]=m.useState(null),s=Nt(f=>f.params);return m.useEffect(()=>{const f=u.current;if(!f)return;const d=new Rg(f,Nt.getState().params);ca.current=d,d.onStats=x=>Be.getState().setStats(x),d.onError=x=>{c(x),Be.getState().setLoadProgress(1)},d.onReady=()=>c(null),d.onProgress=x=>Be.getState().setLoadProgress(x),d.camera.onInteract=()=>Be.getState().setHintDone(),d.camera.attach(f),d.start();const p=new ResizeObserver(()=>d.resize());p.observe(f);const b=setInterval(()=>{Be.getState().setOffCenter(d.camera.offCenter)},300);return()=>{clearInterval(b),p.disconnect(),d.dispose(),ca.current=null}},[]),m.useEffect(()=>{ca.current?.setParams(s)},[s]),w.jsxs(w.Fragment,{children:[w.jsx("canvas",{ref:u,className:"absolute left-0 top-0 block h-lvh w-lvw"}),r&&w.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-ground p-8 text-center text-[13px] leading-relaxed text-neutral-500",children:w.jsx("div",{className:"max-w-xl whitespace-pre-line",children:r})})]})}function Md(u,[r,c]){return Math.min(c,Math.max(r,u))}function Yl(u,r,{checkForDefaultPrevented:c=!0}={}){return function(f){if(u?.(f),c===!1||!f||!f.defaultPrevented)return r?.(f)}}function I1(u,r){if(typeof u=="function")return u(r);u!=null&&(u.current=r)}function Gg(...u){return r=>{let c=!1;const s=u.map(f=>{const d=I1(f,r);return!c&&typeof d=="function"&&(c=!0),d});if(c)return()=>{for(let f=0;f<s.length;f++){const d=s[f];typeof d=="function"?d():I1(u[f],null)}}}}function oa(...u){return m.useCallback(Gg(...u),u)}function wd(u,r=[]){let c=[];function s(d,p){const b=m.createContext(p);b.displayName=d+"Context";const x=c.length;c=[...c,p];const v=g=>{const{scope:A,children:O,...k}=g,C=A?.[u]?.[x]||b,G=m.useMemo(()=>k,Object.values(k));return w.jsx(C.Provider,{value:G,children:O})};v.displayName=d+"Provider";function E(g,A,O={}){const{optional:k=!1}=O,C=A?.[u]?.[x]||b,G=m.useContext(C);if(G)return G;if(p!==void 0)return p;if(!k)throw new Error(`\`${g}\` must be used within \`${d}\``)}return[v,E]}const f=()=>{const d=c.map(p=>m.createContext(p));return function(b){const x=b?.[u]||d;return m.useMemo(()=>({[`__scope${u}`]:{...b,[u]:x}}),[b,x])}};return f.scopeName=u,[s,qg(f,...r)]}function qg(...u){const r=u[0];if(u.length===1)return r;const c=()=>{const s=u.map(f=>({useScope:f(),scopeName:f.scopeName}));return function(d){const p=s.reduce((b,{useScope:x,scopeName:v})=>{const g=x(d)[`__scope${v}`];return{...b,...g}},{});return m.useMemo(()=>({[`__scope${r.scopeName}`]:p}),[p])}};return c.scopeName=r.scopeName,c}var Ad=globalThis?.document?m.useLayoutEffect:()=>{},Vg=td[" useInsertionEffect ".trim().toString()]||Ad;function Zg({prop:u,defaultProp:r,onChange:c=()=>{},caller:s}){const[f,d,p]=jg({defaultProp:r,onChange:c}),b=u!==void 0,x=b?u:f;{const E=m.useRef(u!==void 0);m.useEffect(()=>{const g=E.current;g!==b&&console.warn(`${s} is changing from ${g?"controlled":"uncontrolled"} to ${b?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),E.current=b},[b,s])}const v=m.useCallback(E=>{if(b){const g=Pg(E)?E(u):E;g!==u&&p.current?.(g)}else d(E)},[b,u,d,p]);return[x,v]}function jg({defaultProp:u,onChange:r}){const[c,s]=m.useState(u),f=m.useRef(c),d=m.useRef(r);return Vg(()=>{d.current=r},[r]),m.useEffect(()=>{f.current!==c&&(d.current?.(c),f.current=c)},[c,f]),[c,s,d]}function Pg(u){return typeof u=="function"}var Yg=m.createContext(void 0);function Xg(u){const r=m.useContext(Yg);return u||r||"ltr"}function Ig(u){const r=m.useRef({value:u,previous:u});return m.useMemo(()=>(r.current.value!==u&&(r.current.previous=r.current.value,r.current.value=u),r.current.previous),[u])}function Qg(u){const[r,c]=m.useState(void 0);return Ad(()=>{if(u){c({width:u.offsetWidth,height:u.offsetHeight});const s=new ResizeObserver(f=>{if(!Array.isArray(f)||!f.length)return;const d=f[0];let p,b;if("borderBoxSize"in d){const x=d.borderBoxSize,v=Array.isArray(x)?x[0]:x;p=v.inlineSize,b=v.blockSize}else p=u.offsetWidth,b=u.offsetHeight;c({width:p,height:b})});return s.observe(u,{box:"border-box"}),()=>s.unobserve(u)}else c(void 0)},[u]),r}ed();function ic(u){const r=m.forwardRef((c,s)=>{let{children:f,...d}=c,p=null,b=!1;const x=[];Q1(f)&&typeof Sr=="function"&&(f=Sr(f._payload)),m.Children.forEach(f,A=>{if($g(A)){b=!0;const O=A;let k="child"in O.props?O.props.child:O.props.children;Q1(k)&&typeof Sr=="function"&&(k=Sr(k._payload)),p=Kg(O,k),x.push(p?.props?.children)}else x.push(A)}),p?p=m.cloneElement(p,void 0,x):!b&&m.Children.count(f)===1&&m.isValidElement(f)&&(p=f);const v=p?Jg(p):void 0,E=oa(s,v);if(!p){if(f||f===0)throw new Error(b?l3(u):a3(u));return f}const g=Wg(d,p.props??{});return p.type!==m.Fragment&&(g.ref=s?E:v),m.cloneElement(p,g)});return r.displayName=`${u}.Slot`,r}var Fg=Symbol.for("radix.slottable"),Kg=(u,r)=>{if("child"in u.props){const c=u.props.child;return m.isValidElement(c)?m.cloneElement(c,void 0,u.props.children(c.props.children)):null}return m.isValidElement(r)?r:null};function Wg(u,r){const c={...r};for(const s in r){const f=u[s],d=r[s];/^on[A-Z]/.test(s)?f&&d?c[s]=(...b)=>{const x=d(...b);return f(...b),x}:f&&(c[s]=f):s==="style"?c[s]={...f,...d}:s==="className"&&(c[s]=[f,d].filter(Boolean).join(" "))}return{...u,...c}}function Jg(u){let r=Object.getOwnPropertyDescriptor(u.props,"ref")?.get,c=r&&"isReactWarning"in r&&r.isReactWarning;return c?u.ref:(r=Object.getOwnPropertyDescriptor(u,"ref")?.get,c=r&&"isReactWarning"in r&&r.isReactWarning,c?u.props.ref:u.props.ref||u.ref)}function $g(u){return m.isValidElement(u)&&typeof u.type=="function"&&"__radixId"in u.type&&u.type.__radixId===Fg}var e3=Symbol.for("react.lazy");function Q1(u){return u!=null&&typeof u=="object"&&"$$typeof"in u&&u.$$typeof===e3&&"_payload"in u&&t3(u._payload)}function t3(u){return typeof u=="object"&&u!==null&&"then"in u}var a3=u=>`${u} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,l3=u=>`${u} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,Sr=td[" use ".trim().toString()],i3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Fi=i3.reduce((u,r)=>{const c=ic(`Primitive.${r}`),s=m.forwardRef((f,d)=>{const{asChild:p,...b}=f,x=p?c:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(x,{...b,ref:d})});return s.displayName=`Primitive.${r}`,{...u,[r]:s}},{});function n3(u){const r=u+"CollectionProvider",[c,s]=wd(r),[f,d]=c(r,{collectionRef:{current:null},itemMap:new Map}),p=C=>{const{scope:G,children:Y}=C,X=m.useRef(null),Z=m.useRef(new Map).current;return w.jsx(f,{scope:G,itemMap:Z,collectionRef:X,children:Y})};p.displayName=r;const b=u+"CollectionSlot",x=ic(b),v=m.forwardRef((C,G)=>{const{scope:Y,children:X}=C,Z=d(b,Y),V=oa(G,Z.collectionRef);return w.jsx(x,{ref:V,children:X})});v.displayName=b;const E=u+"CollectionItemSlot",g="data-radix-collection-item",A=ic(E),O=m.forwardRef((C,G)=>{const{scope:Y,children:X,...Z}=C,V=m.useRef(null),Q=oa(G,V),D=d(E,Y);return m.useEffect(()=>(D.itemMap.set(V,{ref:V,...Z}),()=>{D.itemMap.delete(V)})),w.jsx(A,{[g]:"",ref:Q,children:X})});O.displayName=E;function k(C){const G=d(u+"CollectionConsumer",C);return m.useCallback(()=>{const X=G.collectionRef.current;if(!X)return[];const Z=Array.from(X.querySelectorAll(`[${g}]`));return Array.from(G.itemMap.values()).sort((D,j)=>Z.indexOf(D.ref.current)-Z.indexOf(j.ref.current))},[G.collectionRef,G.itemMap])}return[{Provider:p,Slot:v,ItemSlot:O},k,s]}var Cd=["PageUp","PageDown"],_d=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Rd={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Il="Slider",[nc,r3,s3]=n3(Il),[hc]=wd(Il,[s3]),[u3,Ki]=hc(Il),zd=m.forwardRef((u,r)=>{const{name:c,min:s=0,max:f=100,step:d=1,orientation:p="horizontal",disabled:b=!1,minStepsBetweenThumbs:x=0,defaultValue:v=[s],value:E,onValueChange:g=()=>{},onValueCommit:A=()=>{},inverted:O=!1,form:k,...C}=u,G=m.useRef(new Set),Y=m.useRef(0),X=m.useRef(!1),V=p==="horizontal"?c3:o3,[Q,D]=m.useState(null),j=oa(r,D),[F=[],ie]=Zg({prop:E,defaultProp:v,onChange:z=>{[...G.current][Y.current]?.focus({preventScroll:!0,focusVisible:X.current}),X.current=!1,g(z)}}),Me=m.useRef(F),Xe=m.useRef(F);m.useEffect(()=>{const z=k?Q?.ownerDocument.getElementById(k):Q?.closest("form");if(z instanceof HTMLFormElement){const P=()=>ie(Xe.current);return z.addEventListener("reset",P),()=>z.removeEventListener("reset",P)}},[Q,k,ie]);function ae(z){const P=m3(F,z);Le(z,P)}function _e(z){Le(z,Y.current)}function be(){const z=Me.current[Y.current];F[Y.current]!==z&&A(F)}function Le(z,P,{commit:$}={commit:!1}){const oe=Xd(d),ve=Ar(Math.round((z-s)/d)*d+s,oe),S=Md(ve,[s,f]);ie((B=[])=>{const I=d3(B,S,P);if(v3(I,x*d)){Y.current=I.indexOf(S);const K=String(I)!==String(B);return K&&$&&A(I),K?I:B}else return B})}return w.jsx(u3,{scope:u.__scopeSlider,name:c,disabled:b,min:s,max:f,valueIndexToChangeRef:Y,thumbs:G.current,values:F,orientation:p,form:k,children:w.jsx(nc.Provider,{scope:u.__scopeSlider,children:w.jsx(nc.Slot,{scope:u.__scopeSlider,children:w.jsx(V,{"aria-disabled":b,"data-disabled":b?"":void 0,...C,ref:j,onPointerDown:Yl(C.onPointerDown,()=>{b||(Me.current=F,X.current=!1)}),min:s,max:f,inverted:O,onSlideStart:b?void 0:ae,onSlideMove:b?void 0:_e,onSlideEnd:b?void 0:be,onHomeKeyDown:()=>{b||(X.current=!0,Le(s,0,{commit:!0}))},onEndKeyDown:()=>{b||(X.current=!0,Le(f,F.length-1,{commit:!0}))},onStepKeyDown:({event:z,direction:P})=>{if(!b){X.current=!0;const ve=Cd.includes(z.key)||z.shiftKey&&_d.includes(z.key)?10:1,S=Y.current,B=F[S],I=b3(B,{min:s,step:d,direction:P,multiplier:ve});Le(I,S,{commit:!0})}}})})})})});zd.displayName=Il;var[Ud,Od]=hc(Il,{startEdge:"left",endEdge:"right",size:"width",direction:1}),c3=m.forwardRef((u,r)=>{const{min:c,max:s,dir:f,inverted:d,onSlideStart:p,onSlideMove:b,onSlideEnd:x,onStepKeyDown:v,...E}=u,[g,A]=m.useState(null),O=oa(r,A),k=m.useRef(void 0),C=Xg(f),G=C==="ltr",Y=G&&!d||!G&&d;function X(Z){const V=k.current||g.getBoundingClientRect(),Q=[0,V.width],j=mc(Q,Y?[c,s]:[s,c]);return k.current=V,j(Z-V.left)}return w.jsx(Ud,{scope:u.__scopeSlider,startEdge:Y?"left":"right",endEdge:Y?"right":"left",direction:Y?1:-1,size:"width",children:w.jsx(Ld,{dir:C,"data-orientation":"horizontal",...E,ref:O,style:{...E.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:Z=>{const V=X(Z.clientX);p?.(V)},onSlideMove:Z=>{const V=X(Z.clientX);b?.(V)},onSlideEnd:()=>{k.current=void 0,x?.()},onStepKeyDown:Z=>{const Q=Rd[Y?"from-left":"from-right"].includes(Z.key);v?.({event:Z,direction:Q?-1:1})}})})}),o3=m.forwardRef((u,r)=>{const{min:c,max:s,inverted:f,onSlideStart:d,onSlideMove:p,onSlideEnd:b,onStepKeyDown:x,...v}=u,E=m.useRef(null),g=oa(r,E),A=m.useRef(void 0),O=!f;function k(C){const G=A.current||E.current.getBoundingClientRect(),Y=[0,G.height],Z=mc(Y,O?[s,c]:[c,s]);return A.current=G,Z(C-G.top)}return w.jsx(Ud,{scope:u.__scopeSlider,startEdge:O?"bottom":"top",endEdge:O?"top":"bottom",size:"height",direction:O?1:-1,children:w.jsx(Ld,{"data-orientation":"vertical",...v,ref:g,style:{...v.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:C=>{const G=k(C.clientY);d?.(G)},onSlideMove:C=>{const G=k(C.clientY);p?.(G)},onSlideEnd:()=>{A.current=void 0,b?.()},onStepKeyDown:C=>{const Y=Rd[O?"from-bottom":"from-top"].includes(C.key);x?.({event:C,direction:Y?-1:1})}})})}),Ld=m.forwardRef((u,r)=>{const{__scopeSlider:c,onSlideStart:s,onSlideMove:f,onSlideEnd:d,onHomeKeyDown:p,onEndKeyDown:b,onStepKeyDown:x,...v}=u,E=Ki(Il,c);return w.jsx(Fi.span,{...v,ref:r,onKeyDown:Yl(u.onKeyDown,g=>{g.key==="Home"?(p(g),g.preventDefault()):g.key==="End"?(b(g),g.preventDefault()):Cd.concat(_d).includes(g.key)&&(x(g),g.preventDefault())}),onPointerDown:Yl(u.onPointerDown,g=>{const A=g.target;A.setPointerCapture(g.pointerId),g.preventDefault(),E.thumbs.has(A)?A.focus({preventScroll:!0,focusVisible:!1}):s(g)}),onPointerMove:Yl(u.onPointerMove,g=>{g.target.hasPointerCapture(g.pointerId)&&f(g)}),onPointerUp:Yl(u.onPointerUp,g=>{const A=g.target;A.hasPointerCapture(g.pointerId)&&(A.releasePointerCapture(g.pointerId),d(g))})})}),Dd="SliderTrack",kd=m.forwardRef((u,r)=>{const{__scopeSlider:c,...s}=u,f=Ki(Dd,c);return w.jsx(Fi.span,{"data-disabled":f.disabled?"":void 0,"data-orientation":f.orientation,...s,ref:r})});kd.displayName=Dd;var rc="SliderRange",Nd=m.forwardRef((u,r)=>{const{__scopeSlider:c,...s}=u,f=Ki(rc,c),d=Od(rc,c),p=m.useRef(null),b=oa(r,p),x=f.values.length,v=f.values.map(A=>Yd(A,f.min,f.max)),E=x>1?Math.min(...v):0,g=100-Math.max(...v);return w.jsx(Fi.span,{"data-orientation":f.orientation,"data-disabled":f.disabled?"":void 0,...s,ref:b,style:{...u.style,[d.startEdge]:E+"%",[d.endEdge]:g+"%"}})});Nd.displayName=rc;var Bd="SliderThumb",[f3,Hd]=hc(Bd),Gd="SliderThumbProvider";function qd(u){const{__scopeSlider:r,name:c,children:s,internal_do_not_use_render:f}=u,d=Ki(Gd,r),p=r3(r),[b,x]=m.useState(null),v=m.useMemo(()=>b?p().findIndex(G=>G.ref.current===b):-1,[p,b]),E=Qg(b),g=b?!!d.form||!!b.closest("form"):!0,A=d.values[v],O=c??(d.name?d.name+(d.values.length>1?"[]":""):void 0),k=A===void 0?0:Yd(A,d.min,d.max);m.useEffect(()=>{if(b)return d.thumbs.add(b),()=>{d.thumbs.delete(b)}},[b,d.thumbs]);const C={value:A,name:O,form:d.form,isFormControl:g,index:v,thumb:b,onThumbChange:x,percent:k,size:E};return w.jsx(f3,{scope:r,...C,children:y3(f)?f(C):s})}qd.displayName=Gd;var wr="SliderThumbTrigger",Vd=m.forwardRef((u,r)=>{const{__scopeSlider:c,...s}=u,f=Ki(wr,c),d=Od(wr,c),{index:p,value:b,percent:x,size:v,onThumbChange:E}=Hd(wr,c),g=oa(r,E),A=h3(p,f.values.length),O=v?.[d.size],k=O?p3(O,x,d.direction):0;return w.jsx("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[d.startEdge]:`calc(${x}% + ${k}px)`},children:w.jsx(nc.ItemSlot,{scope:c,children:w.jsx(Fi.span,{role:"slider","aria-label":u["aria-label"]||A,"aria-valuemin":f.min,"aria-valuenow":b,"aria-valuemax":f.max,"aria-orientation":f.orientation,"data-orientation":f.orientation,"data-disabled":f.disabled?"":void 0,tabIndex:f.disabled?void 0:0,...s,ref:g,style:b===void 0?{display:"none"}:u.style,onFocus:Yl(u.onFocus,()=>{f.valueIndexToChangeRef.current=p})})})})});Vd.displayName=wr;var Zd=m.forwardRef((u,r)=>{const{__scopeSlider:c,name:s,...f}=u;return w.jsx(qd,{__scopeSlider:c,name:s,internal_do_not_use_render:({index:d,isFormControl:p})=>w.jsxs(w.Fragment,{children:[w.jsx(Vd,{...f,ref:r,__scopeSlider:c}),p?w.jsx(Pd,{__scopeSlider:c},d):null]})})});Zd.displayName=Bd;var jd="SliderBubbleInput",Pd=m.forwardRef(({__scopeSlider:u,...r},c)=>{const{value:s,name:f,form:d}=Hd(jd,u),p=m.useRef(null),b=oa(p,c),x=Ig(s);return m.useEffect(()=>{const v=p.current;if(!v)return;const E=window.HTMLInputElement.prototype,A=Object.getOwnPropertyDescriptor(E,"value").set;if(x!==s&&A){const O=new Event("input",{bubbles:!0});A.call(v,s),v.dispatchEvent(O)}},[x,s]),w.jsx(Fi.input,{style:{display:"none"},name:f,form:d,...r,ref:b,defaultValue:s})});Pd.displayName=jd;function d3(u=[],r,c){const s=[...u];return s[c]=r,s.sort((f,d)=>f-d)}function Yd(u,r,c){const d=100/(c-r)*(u-r);return Md(d,[0,100])}function h3(u,r){return r>2?`Value ${u+1} of ${r}`:r===2?["Minimum","Maximum"][u]:void 0}function m3(u,r){if(u.length===1)return 0;const c=u.map(f=>Math.abs(f-r)),s=Math.min(...c);return c.indexOf(s)}function p3(u,r,c){const s=u/2,d=mc([0,50],[0,s]);return(s-d(r)*c)*c}function g3(u){return u.slice(0,-1).map((r,c)=>u[c+1]-r)}function v3(u,r){if(r>0){const c=g3(u);return Math.min(...c)>=r}return!0}function mc(u,r){return c=>{if(u[0]===u[1]||r[0]===r[1])return r[0];const s=(r[1]-r[0])/(u[1]-u[0]);return r[0]+s*(c-u[0])}}function Xd(u){if(!Number.isFinite(u))return 0;const r=u.toString();if(r.includes("e")){const[s,f]=r.split("e"),d=s.split(".")[1]||"",p=Number(f);return Math.max(0,d.length-p)}const c=r.split(".")[1];return c?c.length:0}function Ar(u,r){const c=Math.pow(10,r);return Math.round(u*c)/c}function b3(u,{min:r,step:c,direction:s,multiplier:f}){const d=Xd(c),p=(u-r)/c,b=Math.round(p),x=Ar(b*c+r,d)===Ar(u,d);let v;return x?v=b+f*s:s>0?v=Math.ceil(p):v=Math.floor(p),Ar(v*c+r,d)}function y3(u){return typeof u=="function"}const x3="linear-gradient(90deg,#b0421f 0%,#e08a35 30%,#f5daa6 55%,#f0f2ff 75%,#a9c2ff 100%)";function Ye(u){return w.jsxs("div",{className:"flex flex-col gap-px "+(u.disabled?"pointer-events-none opacity-40":""),children:[w.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[w.jsx("span",{className:"text-[12px] text-neutral-400",children:u.label}),w.jsx("span",{className:"tabular text-[11.5px] text-neutral-200",children:u.disp})]}),w.jsxs(zd,{className:"relative flex h-[18px] w-full touch-none select-none items-center pointer-coarse:h-8",min:u.min,max:u.max,step:u.step,value:[u.value],disabled:u.disabled,onValueChange:([r])=>u.onChange(r),children:[w.jsx(kd,{className:"relative h-[3px] grow rounded-full bg-neutral-800 pointer-coarse:h-1",style:u.tempTrack?{background:x3}:void 0,children:!u.tempTrack&&w.jsx(Nd,{className:"absolute h-full rounded-full bg-accent"})}),w.jsx(Zd,{"aria-label":u.label,className:"block size-[11px] cursor-pointer rounded-full border-[1.5px] border-accent bg-ground pointer-coarse:size-[18px]"})]})]})}function Ha(u){return w.jsxs("div",{className:"flex items-center justify-between gap-2",children:[w.jsx("span",{className:"text-[12px] text-neutral-400",children:u.label}),w.jsx("button",{onClick:u.onToggle,"aria-pressed":u.on,"aria-label":u.label,className:"cursor-pointer rounded-full border px-[11px] py-0.5 text-[11px] transition-colors pointer-coarse:px-4 pointer-coarse:py-1.5 "+(u.on?"border-accent bg-accent/14 text-accent-200 hover:bg-accent/22":"border-neutral-800 bg-transparent text-neutral-500 hover:border-neutral-600 hover:text-neutral-300"),children:u.on?"On":"Off"})]})}function S3(u){return w.jsx("div",{className:"flex gap-1 rounded-md border border-neutral-900 bg-neutral-900/45 p-1",children:u.options.map(r=>w.jsx("button",{title:r.tip,"aria-pressed":u.value===r.id,onClick:()=>u.onChange(r.id),className:"min-w-0 flex-1 cursor-pointer rounded-sm border px-0.5 py-[7px] text-[10.5px] font-medium transition-all pointer-coarse:py-[9px] "+(u.value===r.id?"border-accent bg-accent/12 text-accent-200 shadow-[0_0_10px] shadow-accent/18":"border-transparent text-neutral-400 hover:bg-ink/6 hover:text-neutral-200"),children:r.label},r.id))})}function Tr(u){return w.jsxs("div",{"data-sec":u.id,className:"flex flex-none flex-col",children:[w.jsxs("button",{onClick:u.onToggle,className:"flex w-full cursor-pointer items-center gap-2 rounded-sm px-0.5 py-[7px] text-left hover:bg-ink/5 pointer-coarse:py-[11px]",children:[w.jsx("span",{className:"flex-none text-[14px] text-accent-300",children:u.icon}),w.jsx("span",{className:"whitespace-nowrap text-[10.5px] font-medium uppercase tracking-[0.12em] text-neutral-300",children:u.label}),w.jsx("span",{className:"tabular min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-right text-[10.5px] text-neutral-600",children:u.open?"":u.summary}),w.jsx(Zm,{size:12,className:"flex-none text-neutral-500 transition-transform duration-[250ms]",style:{transform:`rotate(${u.open?180:0}deg)`}})]}),u.open&&w.jsx("div",{className:"flex flex-col gap-2.5 px-0.5 pb-1.5 pt-1",children:u.children})]})}const Cr=[{id:"garg",label:"Gargantua",sub:"Interstellar",view:{yawDeg:-29,pitchDeg:4.7,dist:13},p:{spin:.98,diskOut:15,diskH:.055,diskTemp:5600,diskBright:1.15,diskSpeed:.55,beaming:!0,redshift:!0,starDens:.8,galBright:.75,galTilt:14,nebDens:1.4,nebSize:2,nebCount:3,fov:55,bloom:.7,exposure:1.05,playing:!0}},{id:"m87",label:"M87*",sub:"EHT · 2019",view:{yawDeg:40,pitchDeg:72,dist:26},p:{spin:.9,diskOut:16,diskH:.15,diskTemp:9500,diskBright:1,diskSpeed:.7,beaming:!0,redshift:!0,starDens:1,galBright:.9,galTilt:32,nebDens:.65,nebSize:.85,nebCount:3,fov:60,bloom:.7,exposure:1,playing:!0}}];function T3(u){for(const r of Cr){let c=!0;for(const s in r.p){const f=s,d=r.p[f],p=u[f];if(typeof d=="number"?Math.abs(p-d)>1e-9:p!==d){c=!1;break}}if(c)return r.id}return null}const E3=[{id:"presets",label:"Presets"},{id:"disk",label:"Accretion disk"},{id:"env",label:"Environment"},{id:"render",label:"Render"}];function M3(u){const r=Nt(D=>D.params),c=Nt(D=>D.secOpen),s=Nt(D=>D.set),f=Nt(D=>D.setPanelOpen),d=Nt(D=>D.toggleSec),p=Be(D=>D.activeSec),b=Be(D=>D.setActiveSec),x=Be(D=>D.stats.resScale),v=m.useRef(null),E=m.useRef(0),g=m.useRef(r.bloom>.004?r.bloom:.7),{mode:A}=u,O=A==="portrait",k=T3(r),C=r.fpsCap>0&&r.fpsCap<240,G=Math.max(1,Math.min(100,Math.round((x||.62)*100))),Y=()=>{window.clearTimeout(E.current),E.current=window.setTimeout(()=>{const D=v.current;if(!D)return;const j=D.querySelectorAll("[data-sec]");if(!j.length)return;let F=j[0].dataset.sec;j.forEach(ie=>{ie.offsetTop<=D.scrollTop+72&&(F=ie.dataset.sec)}),D.scrollTop+D.clientHeight>=D.scrollHeight-8&&(F=j[j.length-1].dataset.sec),b(F)},60)},X=D=>{const j=v.current,F=j?.querySelector(`[data-sec="${D}"]`);j&&F&&j.scrollTo({top:Math.max(0,F.offsetTop-10),behavior:"smooth"})},Z=D=>{const j=Cr.find(F=>F.id===D);s(j.p),ca.current?.camera.setView(j.view)},V=D=>({open:c[D],onToggle:()=>d(D)}),Q=O?"inset-x-2.5 bottom-[calc(var(--sab)_+_10px)] h-[min(58dvh,470px)]":A==="landscape"?"top-2.5 right-[calc(var(--sar)_+_10px)] bottom-[calc(var(--sab)_+_10px)] w-[min(300px,46vw)]":"top-3.5 right-3.5 bottom-3.5 w-[302px]";return w.jsxs("div",{className:`glass-panel absolute z-30 overflow-hidden rounded-lg ${Q}`,children:[O&&w.jsx("button",{onClick:()=>f(!1),"aria-label":"Hide controls",className:"absolute inset-x-0 top-0 z-10 flex h-[22px] cursor-pointer items-center justify-center",children:w.jsx("span",{className:"h-1 w-[42px] rounded-full bg-neutral-700"})}),w.jsxs("div",{ref:v,onScroll:Y,className:`no-scrollbar absolute inset-0 flex flex-col gap-3 overflow-y-auto overflow-x-hidden overscroll-contain pb-5 pl-4 pr-5 ${O?"pt-[26px]":"pt-3.5"}`,children:[w.jsxs("div",{className:"flex flex-none items-center justify-between",children:[w.jsx("span",{className:"text-[11px] uppercase tracking-[0.14em] text-neutral-400",children:"Controls"}),w.jsx("button",{onClick:()=>f(!1),"aria-label":"Hide controls",className:"flex cursor-pointer rounded-sm px-2 py-1 text-[14px] text-neutral-500 hover:bg-accent/10 hover:text-accent",children:w.jsx(md,{size:14})})]}),w.jsx(Tr,{id:"presets",icon:w.jsx(Im,{}),label:"Presets",...V("presets"),summary:k?Cr.find(D=>D.id===k).label:"custom",children:w.jsx("div",{className:"flex gap-2",children:Cr.map(D=>{const j=k===D.id;return w.jsxs("button",{onClick:()=>Z(D.id),className:"flex flex-1 cursor-pointer flex-col items-start gap-px rounded-md border px-[11px] py-2 text-left transition-all pointer-coarse:px-3 pointer-coarse:py-[11px] "+(j?"border-accent bg-accent/11 shadow-[0_0_14px] shadow-accent/22":"border-neutral-800 hover:border-neutral-600 hover:bg-ink/5"),children:[w.jsxs("span",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"size-1.5 flex-none rounded-full transition-all "+(j?"bg-accent shadow-[0_0_6px] shadow-accent":"bg-neutral-700")}),w.jsx("span",{className:"text-[12.5px] font-medium "+(j?"text-accent-200":"text-neutral-200"),children:D.label})]}),w.jsx("span",{className:"text-[10px] text-neutral-500",children:D.sub})]},D.id)})})}),w.jsx("div",{className:"hr-fade"}),w.jsxs(Tr,{id:"disk",icon:w.jsx(Km,{}),label:"Accretion disk",...V("disk"),summary:"a "+r.spin.toFixed(2)+" · "+R1(r.diskTemp,0)+" K · "+r.diskOut.toFixed(0)+" rg",children:[w.jsx(Ye,{label:"Black hole spin",min:0,max:.98,step:.005,value:r.spin,disp:"a/M "+r.spin.toFixed(3),onChange:D=>s({spin:D})}),w.jsx(Ye,{label:"Accretion brightness",min:0,max:3,step:.05,value:r.diskBright,disp:r.diskBright.toFixed(2)+"×",onChange:D=>s({diskBright:D})}),w.jsx(Ye,{label:"Outer radius",min:8,max:30,step:.5,value:r.diskOut,disp:r.diskOut.toFixed(1)+" rg",onChange:D=>s({diskOut:D})}),w.jsx(Ye,{label:"Vertical thickness",min:0,max:.18,step:.005,value:r.diskH,disp:r.diskH<.0025?"razor-thin":"h/r "+r.diskH.toFixed(2),onChange:D=>s({diskH:D})}),w.jsx(Ye,{label:"Temperature",min:2e3,max:15e3,step:100,value:r.diskTemp,disp:R1(r.diskTemp,0)+" K",tempTrack:!0,onChange:D=>s({diskTemp:D})}),w.jsx(Ye,{label:"Orbital speed",min:0,max:3,step:.05,value:r.diskSpeed,disp:r.diskSpeed.toFixed(2)+"×",onChange:D=>s({diskSpeed:D})}),w.jsx(Ye,{label:"Debris haze",min:.3,max:1,step:.01,value:r.diskHaze,disp:r.diskHaze.toFixed(2)+"×",onChange:D=>s({diskHaze:D})}),w.jsx(Ha,{label:"Doppler beaming",on:r.beaming,onToggle:()=>s({beaming:!r.beaming})}),w.jsx(Ha,{label:"Gravitational redshift",on:r.redshift,onToggle:()=>s({redshift:!r.redshift})}),w.jsx(Ha,{label:"Orbital motion",on:r.playing,onToggle:()=>s({playing:!r.playing})})]}),w.jsx("div",{className:"hr-fade"}),w.jsxs(Tr,{id:"env",icon:w.jsx(Qm,{}),label:"Environment",...V("env"),summary:"stars "+r.starDens.toFixed(1)+"× · tilt "+r.galTilt.toFixed(0)+"°",children:[w.jsx(Ye,{label:"Star density",min:0,max:2,step:.05,value:r.starDens,disp:r.starDens.toFixed(2)+"×",onChange:D=>s({starDens:D})}),w.jsx(Ye,{label:"Galaxy brightness",min:0,max:2,step:.05,value:r.galBright,disp:r.galBright.toFixed(2)+"×",onChange:D=>s({galBright:D})}),w.jsx(Ye,{label:"Galaxy tilt",min:-80,max:80,step:1,value:r.galTilt,disp:r.galTilt.toFixed(0)+"°",onChange:D=>s({galTilt:D})}),w.jsx(Ye,{label:"Nebula count",min:0,max:10,step:1,value:r.nebCount,disp:r.nebCount===0?"None":r.nebCount.toFixed(0),onChange:D=>s({nebCount:D})}),w.jsx(Ye,{label:"Nebula density",min:0,max:2,step:.05,value:r.nebDens,disp:r.nebDens<.025?"Off":r.nebDens.toFixed(2)+"×",onChange:D=>s({nebDens:D})}),w.jsx(Ye,{label:"Nebula size",min:.3,max:2.5,step:.05,value:r.nebSize,disp:r.nebSize.toFixed(2)+"×",onChange:D=>s({nebSize:D})})]}),w.jsx("div",{className:"hr-fade"}),w.jsxs(Tr,{id:"render",icon:w.jsx(Vm,{}),label:"Render",...V("render"),summary:(r.quality===0?"Auto":r.quality+"%")+" · "+r.fov.toFixed(0)+"°",children:[w.jsx(Ye,{label:"Render scale",min:1,max:100,step:1,value:r.quality===0?G:r.quality,disp:r.quality===0?`auto · ${G}%`:`${r.quality}%`,disabled:r.quality===0,onChange:D=>s({quality:Math.round(D)})}),w.jsx(Ha,{label:"Auto render scale",on:r.quality===0,onToggle:()=>s({quality:r.quality===0?G:0})}),w.jsx(Ye,{label:"Field of view",min:35,max:95,step:1,value:r.fov,disp:r.fov.toFixed(0)+"°",onChange:D=>s({fov:D})}),w.jsx(Ha,{label:"Temporal antialiasing",on:r.taa,onToggle:()=>s({taa:!r.taa})}),w.jsx(Ha,{label:"Bloom effect",on:r.bloom>.004,onToggle:()=>{r.bloom>.004?(g.current=r.bloom,s({bloom:0})):s({bloom:Math.max(.05,g.current)})}}),w.jsx(Ye,{label:"Bloom",min:0,max:1.6,step:.05,value:r.bloom,disp:r.bloom.toFixed(2),onChange:D=>{D>.004&&(g.current=D),s({bloom:D})}}),w.jsx(Ye,{label:"Exposure",min:.25,max:2.5,step:.05,value:r.exposure,disp:r.exposure.toFixed(2),onChange:D=>s({exposure:D})}),w.jsx(Ye,{label:"FPS cap",min:15,max:235,step:5,value:C?r.fpsCap:120,disp:C?r.fpsCap.toFixed(0)+" fps":"Uncapped",disabled:!C,onChange:D=>s({fpsCap:D})}),w.jsx(Ha,{label:"Limit frame rate",on:C,onToggle:()=>s({fpsCap:C?240:120})}),w.jsx(Ha,{label:"Auto-orbit when idle",on:r.autoOrbit,onToggle:()=>s({autoOrbit:!r.autoOrbit})}),w.jsx("button",{onClick:()=>ca.current?.camera.reset(),className:"cursor-pointer self-start rounded-md px-1 py-1 text-[12px] text-accent hover:bg-accent/10",children:"Reset view"})]})]}),w.jsx("div",{className:"absolute right-[5px] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-[7px]",children:E3.map(D=>w.jsx("button",{"aria-label":D.label,title:D.label,onClick:()=>X(D.id),className:"w-1.5 flex-none cursor-pointer rounded-[3px] border-0 p-0 transition-all duration-300 "+(p===D.id?"h-5 bg-accent shadow-[0_0_10px] shadow-accent/60":"h-1.5 bg-neutral-700 hover:bg-neutral-500")},D.id))})]})}function w3(u){return w.jsxs("div",{className:"pointer-events-none absolute z-20 flex flex-col gap-0.5",style:u.mobile?{left:"calc(var(--sal) + 14px)",top:"calc(var(--sat) + 12px)"}:{left:"calc(var(--sal) + 18px)",top:"calc(var(--sat) + 16px)"},children:[w.jsx("span",{className:"text-[10.5px] uppercase tracking-[0.14em] text-accent-300",children:"Geodesic ray tracer"}),w.jsx("span",{className:"text-[16px] font-medium tracking-tight",children:"Black hole"})]})}function A3(u){const r=Be(p=>p.offCenter),{mode:c,panelOpen:s}=u,d=c==="portrait"?"top-[calc(var(--sat)_+_70px)] left-1/2":s?c==="landscape"?"left-[calc((100%-min(300px,46vw))/2)]":c==="desktop"?"left-[calc((100%-302px)/2)]":"left-1/2":"left-1/2";return w.jsx("div",{className:`glass-panel absolute z-20 -translate-x-1/2 rounded-full p-[3px] transition-opacity duration-300 ${d}`,style:{...c!=="portrait"?{top:`calc(var(--sat) + ${c==="desktop"?16:10}px)`}:{},opacity:r?1:0,pointerEvents:r?"auto":"none"},children:w.jsxs("button",{onClick:()=>ca.current?.camera.rehome(),title:"Recenter on black hole","aria-label":"Recenter on black hole",className:"flex cursor-pointer items-center gap-1.5 rounded-full border border-accent/55 px-3 py-1 text-[10.5px] text-accent-300 shadow-[0_0_10px] shadow-accent/14 pointer-coarse:px-3.5 pointer-coarse:py-[7px]",children:[w.jsx(Ym,{size:13}),w.jsx("span",{children:"Recenter"})]})})}function C3(u){const r=Be(b=>b.stats),c=Nt(b=>b.params.quality),s=u.mode==="desktop",f=r.fps?`${r.fps} fps · ${r.p95Ms} ms`:"…",d=r.simW?`${r.simW}×${r.simH} · ${Math.round(r.resScale*100)}%${c===0?"":" · manual"}`:"",p=s?{left:"calc(var(--sal) + 18px)",bottom:"max(14px, var(--sab))"}:{right:u.mode==="landscape"&&u.panelOpen?"calc(var(--sar) + min(300px, 46vw) + 22px)":"calc(var(--sar) + 14px)",top:"calc(var(--sat) + 13px)"};return w.jsxs("div",{className:`tabular pointer-events-none absolute z-10 flex flex-col gap-px text-[10px] leading-[13px] text-neutral-500 ${s?"":"items-end"}`,style:{...p,textShadow:"0 1px 3px rgb(0 0 0 / 0.55)"},children:[w.jsx("span",{children:f}),w.jsx("span",{children:d})]})}function _3(u){const r=Be(x=>x.hintDone),{mode:c,panelOpen:s,coarse:f}=u,d=r||c==="portrait"&&s,p=c==="portrait"?"bottom-[calc(var(--sab)_+_64px)]":c==="landscape"?"bottom-[calc(var(--sab)_+_48px)]":"bottom-[18px]",b=c==="landscape"&&s?"left-[calc((100%-min(300px,46vw))/2)]":"left-1/2";return w.jsx("div",{className:`pointer-events-none absolute z-10 -translate-x-1/2 whitespace-nowrap text-[11.5px] text-neutral-500 transition-opacity duration-700 ${p} ${b}`,style:{opacity:d?0:1},children:f?"drag to orbit · two-finger pan to look · pinch to zoom":"drag to orbit · ⇧ drag to look · scroll to zoom · double-click to reset"})}function R3(u){const r=Nt(c=>c.setPanelOpen);return w.jsxs("button",{onClick:()=>r(!0),className:"glass-panel z-30 flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-[5px] text-[12px] text-neutral-200 hover:text-accent-200 pointer-coarse:px-[18px] pointer-coarse:py-[9px] "+(u.portrait?"absolute bottom-[calc(var(--sab)_+_14px)] left-1/2 -translate-x-1/2":"absolute right-3.5 top-3.5"),children:[w.jsx(Fm,{size:14}),w.jsx("span",{children:"Controls"})]})}const sc=58,F1=2*Math.PI*sc;function z3(){const u=Be(d=>d.loadProgress),r=u>=1,[c,s]=m.useState(!1);if(m.useEffect(()=>{if(!r){s(!1);return}const d=setTimeout(()=>s(!0),950);return()=>clearTimeout(d)},[r]),c)return null;const f=Math.min(1,Math.max(0,u));return w.jsxs("div",{className:"absolute inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-ground transition-opacity duration-700",style:{opacity:r?0:1,pointerEvents:r?"none":"auto"},role:"progressbar","aria-valuenow":Math.round(f*100),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Compiling spacetime",children:[w.jsxs("svg",{width:"176",height:"176",viewBox:"0 0 176 176",children:[w.jsx("circle",{cx:"88",cy:"88",r:"40",fill:"#000"}),w.jsx("circle",{cx:"88",cy:"88",r:"41",fill:"none",stroke:"rgba(244,228,199,0.16)",strokeWidth:"1.5"}),w.jsx("circle",{cx:"88",cy:"88",r:sc,fill:"none",stroke:"rgba(244,228,199,0.09)",strokeWidth:"2"}),w.jsx("circle",{cx:"88",cy:"88",r:sc,fill:"none",stroke:"#f2e2c4",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:F1,strokeDashoffset:(1-f)*F1,transform:"rotate(-90 88 88)",style:{transition:"stroke-dashoffset 340ms cubic-bezier(0.4,0,0.2,1)",filter:"drop-shadow(0 0 7px rgba(242,226,196,0.4))"}})]}),w.jsxs("span",{className:"tabular text-[11px] tracking-[0.14em] text-neutral-500",children:[Math.round(f*100),"%"]})]})}let il=null;const Id=()=>{const u=new Date,r=c=>String(c).padStart(2,"0");return`${u.getFullYear()}${r(u.getMonth()+1)}${r(u.getDate())}-${r(u.getHours())}${r(u.getMinutes())}${r(u.getSeconds())}`},Qd=(u,r)=>{const c=URL.createObjectURL(u),s=document.createElement("a");s.href=c,s.download=r,s.click(),setTimeout(()=>URL.revokeObjectURL(c),3e4)},Fd=(u,r)=>{if(r instanceof DOMException&&r.name==="AbortError"){Be.getState().setCapture(null);return}console.error("Capture failed:",r);const c=r instanceof Error?`${r.name}: ${r.message}`:String(r);Be.getState().setCapture({kind:u,done:0,total:0,phase:"error",error:c})},K1=typeof VideoEncoder<"u",pc=()=>{const u=Math.min(devicePixelRatio||1,3);return{w:Math.round(screen.width*u),h:Math.round(screen.height*u)}},W1=(u,r=!1)=>{const c=pc(),s=Math.round(c.w*u),f=Math.round(c.h*u);return ca.current?.planCaptureTarget(s,f,r)??{w:s,h:f}};async function U3(u){const r=ca.current,c=Be.getState();if(!r||c.capture)return;il=new AbortController;const s=pc();c.setCapture({kind:"photo",done:0,total:u.samples,phase:"render"});try{const f=await r.captureStill({samples:u.samples,targetW:Math.round(s.w*u.scale),targetH:Math.round(s.h*u.scale)},(d,p)=>{Be.getState().setCapture({kind:"photo",done:d,total:p,phase:"render"})},il.signal);Qd(f,`astra-${Id()}.png`),Be.getState().setCapture(null)}catch(f){Fd("photo",f)}finally{il=null}}async function O3(u){const r=ca.current,c=Be.getState();if(!r||c.capture)return;il=new AbortController;const s=pc(),f=Math.round(u.seconds*u.fps);c.setCapture({kind:"video",done:0,total:f,phase:"render"});try{const{blob:d,extension:p}=await r.captureVideo({seconds:u.seconds,fps:u.fps,samples:u.samples,targetW:Math.round(s.w*u.scale),targetH:Math.round(s.h*u.scale)},(b,x,v)=>{Be.getState().setCapture({kind:"video",done:b,total:x,phase:v})},il.signal);Qd(d,`astra-${Id()}.${p}`),Be.getState().setCapture(null)}catch(d){Fd("video",d)}finally{il=null}}function L3(){il?.abort()}function D3(){Be.getState().capture?.phase==="error"&&Be.getState().setCapture(null)}function k3(){const u=Be(f=>f.capture);if(!u)return null;const r=u.phase==="error",c=u.total>0?Math.min(100,Math.round(u.done/u.total*100)):0,s=r?u.error??"Capture failed.":u.phase==="encode"?"Finalizing clip…":u.kind==="photo"?`Supersampling — ${u.done}/${u.total} samples`:`Rendering frames — ${u.done}/${u.total}`;return w.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60",children:w.jsxs("div",{className:"glass-panel flex w-[320px] max-w-[calc(100vw-32px)] flex-col gap-3 rounded-lg px-5 py-4",children:[w.jsxs("span",{className:"text-[11px] uppercase tracking-[0.14em] text-neutral-400",children:[u.kind==="photo"?"Photograph":"Clip",r?" — failed":" — native resolution"]}),!r&&w.jsx("div",{className:"h-1 overflow-hidden rounded-full bg-neutral-800",children:w.jsx("div",{className:"h-full rounded-full bg-accent shadow-[0_0_8px] shadow-accent/50 transition-[width] duration-200",style:{width:`${u.phase==="encode"?100:c}%`}})}),w.jsx("span",{className:`text-[11.5px] leading-relaxed ${r?"text-amber-400":"text-neutral-300"}`,children:s}),w.jsx("button",{onClick:r?D3:L3,className:"cursor-pointer self-end rounded-md px-2 py-1 text-[12px] text-neutral-400 hover:bg-accent/10 hover:text-accent",children:r?"Close":"Cancel"})]})})}const N3=["8","16","32","64"];function J1(u){return w.jsxs("div",{className:"flex flex-col gap-1",children:[w.jsx("span",{className:"text-[10.5px] text-neutral-500",children:u.label}),w.jsx(S3,{options:N3.map(r=>({id:r,label:`${r}×`})),value:String(u.value),onChange:r=>u.onChange(Number(r))})]})}function $1(u){return w.jsxs("div",{className:"flex flex-col gap-1",children:[w.jsxs("button",{onClick:u.onClick,disabled:u.disabled,className:"flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-3 py-[9px] text-[13px] font-semibold text-ground shadow-[0_0_14px] shadow-accent/25 transition-colors hover:bg-accent-400 disabled:cursor-default disabled:opacity-40",children:[u.icon,w.jsx("span",{children:u.label})]}),w.jsx("span",{className:"text-center text-[9.5px] text-neutral-600",children:u.sub})]})}function B3(u){const[r,c]=m.useState(!1),s=Nt(A=>A.params),f=Nt(A=>A.set),d=Be(A=>A.capture)!==null,{mode:p,panelOpen:b}=u;if(p==="portrait"&&b)return null;const v=p!=="portrait"&&b?"calc(var(--sar) + min(300px, 46vw) + 22px)":"calc(var(--sar) + 14px)",E=W1(s.captureScale),g=W1(s.captureScale,!0);return w.jsxs("div",{className:"absolute z-30 flex flex-col items-end gap-2",style:{right:v,bottom:"calc(var(--sab) + 14px)"},children:[r&&w.jsxs("div",{className:"glass-panel flex w-[264px] flex-col gap-3 rounded-lg px-3.5 py-3",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx("span",{className:"text-[10.5px] uppercase tracking-[0.14em] text-neutral-400",children:"Capture"}),w.jsx("button",{onClick:()=>c(!1),"aria-label":"Close capture menu",className:"flex cursor-pointer rounded-sm px-1.5 py-0.5 text-neutral-500 hover:bg-accent/10 hover:text-accent",children:w.jsx(md,{size:13})})]}),w.jsx(Ye,{label:"Resolution",min:1,max:4,step:.5,value:s.captureScale,disp:`${s.captureScale.toFixed(1)}× · ${E.w}×${E.h}`,onChange:A=>f({captureScale:A})}),w.jsx(J1,{label:"Photo supersampling",value:s.photoSamples,onChange:A=>f({photoSamples:A})}),w.jsx($1,{icon:w.jsx(C1,{size:16,weight:"fill"}),label:"Photograph",sub:`${E.w}×${E.h} PNG · ${s.photoSamples}× supersampled`,disabled:d,onClick:()=>{U3({scale:s.captureScale,samples:s.photoSamples})}}),w.jsx("div",{className:"hr-fade"}),w.jsx(Ye,{label:"Clip length",min:1,max:15,step:1,value:s.clipSeconds,disp:`${s.clipSeconds.toFixed(0)} s`,onChange:A=>f({clipSeconds:A})}),w.jsx(Ye,{label:"Clip frame rate",min:10,max:60,step:5,value:s.clipFps,disp:`${s.clipFps.toFixed(0)} fps`,onChange:A=>f({clipFps:A})}),w.jsx(J1,{label:"Clip supersampling",value:s.clipSamples,onChange:A=>f({clipSamples:A})}),w.jsx($1,{icon:w.jsx(Xm,{size:16,weight:"fill"}),label:"Record clip",sub:K1?`${g.w}×${g.h} · ${s.clipSeconds}s @ ${s.clipFps} fps`:"needs WebCodecs — not exposed by this browser",disabled:d||!K1,onClick:()=>{O3({scale:s.captureScale,seconds:s.clipSeconds,fps:s.clipFps,samples:s.clipSamples})}})]}),w.jsx("button",{onClick:()=>c(A=>!A),"aria-label":r?"Collapse capture menu":"Open capture menu","aria-expanded":r,className:`glass-panel flex cursor-pointer rounded-full p-[11px] transition-colors ${r?"text-accent-200":"text-neutral-300 hover:text-accent-200"}`,children:w.jsx(C1,{size:18})})]})}const Kd=()=>{const u=document;return document.fullscreenElement??u.webkitFullscreenElement??null},H3=()=>{const u=document.documentElement;return!!(u.requestFullscreen??u.webkitRequestFullscreen)},G3=()=>{const u=document,r=document.documentElement;Kd()?(document.exitFullscreen??u.webkitExitFullscreen)?.call(document):r.requestFullscreen?r.requestFullscreen({navigationUI:"hide"}).catch(()=>{r.webkitRequestFullscreen?.()}):r.webkitRequestFullscreen?.()};function q3(u){const[r,c]=m.useState(!1);if(m.useEffect(()=>{const f=()=>c(!!Kd());return document.addEventListener("fullscreenchange",f),document.addEventListener("webkitfullscreenchange",f),()=>{document.removeEventListener("fullscreenchange",f),document.removeEventListener("webkitfullscreenchange",f)}},[]),!H3())return null;const s=u.mode==="landscape"&&u.panelOpen?"calc(var(--sar) + min(300px, 46vw) + 22px)":"calc(var(--sar) + 12px)";return w.jsx("button",{onClick:G3,"aria-label":r?"Exit full screen":"Enter full screen",className:"glass-panel absolute z-20 flex cursor-pointer rounded-full p-[9px] text-neutral-300 hover:text-accent-200",style:{top:"calc(var(--sat) + 46px)",right:s},children:r?w.jsx(jm,{size:16}):w.jsx(Pm,{size:16})})}function V3(){const u=Nt(p=>p.panelOpen),r=Be(p=>p.setHintDone),[c,s]=m.useState(()=>lc(window.innerWidth,window.innerHeight)),[f]=m.useState(()=>matchMedia("(pointer: coarse)").matches);m.useEffect(()=>{const p=()=>s(lc(window.innerWidth,window.innerHeight));window.addEventListener("resize",p);const b=setTimeout(r,1e4);return()=>{window.removeEventListener("resize",p),clearTimeout(b)}},[r]);const d=c!=="desktop";return w.jsxs("div",{className:"full-bleed-root fixed inset-0 text-ink",children:[w.jsx(Hg,{}),w.jsx(w3,{mobile:d}),d&&w.jsx(q3,{mode:c,panelOpen:u}),w.jsx(A3,{mode:c,panelOpen:u}),w.jsx(C3,{mode:c,panelOpen:u}),w.jsx(_3,{mode:c,panelOpen:u,coarse:f}),u?w.jsx(M3,{mode:c}):w.jsx(R3,{portrait:c==="portrait"}),w.jsx(B3,{mode:c,panelOpen:u}),w.jsx(k3,{}),w.jsx(z3,{})]})}console.info(`astra ${"049f4a73882f6a862f72e130604964d1760da454".slice(0,12)}`);Cm.createRoot(document.getElementById("root")).render(w.jsx(V3,{}));
