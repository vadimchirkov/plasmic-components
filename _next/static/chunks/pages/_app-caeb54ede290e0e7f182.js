(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{178:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},6453:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{UF:function(){return ve},ZP:function(){return Be}});var i=r(7294),l=r.t(i,2),u=r(178),c=r.n(u),s=r(3935);const d={prefix:Math.round(1e10*Math.random()),current:0},p=i.createContext(d);function f(e){let t=(0,i.useContext)(p),r=(0,i.useMemo)((()=>({prefix:t===d?0:++t.prefix,current:0})),[t]);return i.createElement(p.Provider,{value:r},e.children)}Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let _=new Map,y=new Set;function m(){if("undefined"===typeof window)return;let e=t=>{let r=_.get(t.target);if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),_.delete(t.target)),0===_.size)){for(let e of y)e();y.clear()}};document.body.addEventListener("transitionrun",(t=>{let r=_.get(t.target);r||(r=new Set,_.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?m():document.addEventListener("DOMContentLoaded",m));"undefined"!==typeof window&&window.visualViewport;new Map;function v(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function h(){return v(/^Mac/)}function b(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const w=i.createContext(null);w.displayName="PressResponderContext";let g=null,O=new Set,j=!1,x=!1,E=!1;function P(e,t){for(let r of O)r(e,t)}function S(e){x=!0,function(e){return!(e.metaKey||!h()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(g="keyboard",P("keyboard",e))}function A(e){g="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(x=!0,P("pointer",e))}function C(e){b(e)&&(x=!0,g="virtual")}function M(e){e.target!==window&&e.target!==document&&(x||E||(g="virtual",P("virtual",e)),x=!1,E=!1)}function k(){x=!1,E=!0}function N(){if("undefined"===typeof window||j)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){x=!0,e.apply(this,arguments)},document.addEventListener("keydown",S,!0),document.addEventListener("keyup",S,!0),document.addEventListener("click",C,!0),window.addEventListener("focus",M,!0),window.addEventListener("blur",k,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",A,!0),document.addEventListener("pointermove",A,!0),document.addEventListener("pointerup",A,!0)):(document.addEventListener("mousedown",A,!0),document.addEventListener("mousemove",A,!0),document.addEventListener("mouseup",A,!0)),j=!0}"undefined"!==typeof document&&("loading"!==document.readyState?N():document.addEventListener("DOMContentLoaded",N));new Set;const L=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];L.join(":not([hidden]),");L.push('[tabindex]:not([tabindex="-1"]):not([disabled])');L.join(':not([hidden]):not([tabindex="-1"]),');function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function H(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function B(e){return null!=e}function U(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++){var l=i[o];l in e&&(t[l]=e[l])}return t}function W(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=Object.keys(e);o<i.length;o++){var l=i[o];n.includes(l)||(t[l]=e[l])}return t}function F(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0!==t.length)return function(e){for(var r,n=e,a=H(t);!(r=a()).done;){n=(0,r.value)(n)}return n}}var R="undefined"!==typeof window,X=Symbol("NONE"),z=R?i.useLayoutEffect:i.useEffect;function V(e,t,r){return Array.isArray(r)?i.createElement.apply(i,[e,t].concat(r)):r||"children"in t?i.createElement(e,t,r):i.createElement(e,t)}function J(e){for(var t=T({},e),r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++)for(var l=i[o],u=0,c=Object.keys(l);u<c.length;u++){var s=c[u];t[s]=$(s,t[s],l[s])}return t}function Q(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function G(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r,n=H(t);!(r=n()).done;){Q(r.value,e)}}}function $(e,t,r){return t===X||r===X?null:null==t?r:null==r?t:"className"===e?c()(t,r):"style"===e?T({},t,r):"ref"===e?G(t,r):typeof t!==typeof r?r:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof r&&(e=r.apply(void 0,arguments)),e}:r}function q(e,t,r,n){var a=t.children,o=I(t,["children"]),i=te(a,null!=r&&r);return V(e,T({ref:n},o),i)}function K(e,t){var r=e.as,n=e.hasGap;return q(null!=r?r:"div",I(e,["as","hasGap"]),n,t)}var Z=(0,i.forwardRef)(K),Y=function(e){return(0,i.forwardRef)((function(t,r){var n=t.hasGap,a=I(t,["hasGap"]);return q(e,a,n,r)}))},ee=Object.assign(Z,{div:Y("div"),a:Y("a"),button:Y("button"),h1:Y("h1"),h2:Y("h2"),h3:Y("h3"),h4:Y("h4"),h5:Y("h5"),h6:Y("h6"),label:Y("label"),form:Y("form"),section:Y("section"),head:Y("head"),main:Y("main"),nav:Y("nav")});function te(e,t){var r=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(l,["div",{className:r}].concat(e)):(0,i.createElement)("div",{className:r},e):null}function re(e,t,r,n){var a=ue(e),o=le(r,a.props);if("render"===a.type)return a.render(o,t);var l=t;"as"===a.type&&a.as&&(t===ee?o.as=a.as:l=a.as);var u=o.children;a.wrapChildren&&(u=a.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(u))),n&&(u=te(u,!0));var c=V(l,o,u);return a.wrap&&(c=a.wrap(c)),c}var ne=new Map;function ae(e,t){null==t&&(t={});var r=t["data-plasmic-name"],n=t["data-plasmic-root"],a=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var o=arguments.length,i=new Array(o>2?o-2:0),l=2;l<o;l++)i[l-2]=arguments[l];var u=oe.apply(void 0,[e,t].concat(i));if(r&&ne.set(r,u),n){var c,s=a?null!=(c=ne.get(a))?c:null:u;return ne.clear(),s}return u}function oe(e,t){var r,n=t["data-plasmic-override"],a=t["data-plasmic-wrap-flex-child"],o=null!=(r=t["data-plasmic-trigger-props"])?r:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,l=new Array(i>2?i-2:0),u=2;u<i;u++)l[u-2]=arguments[u];return re(n,e,J.apply(void 0,[t,0===l.length?{}:{children:1===l.length?l[0]:l}].concat(o)),a)}var ie=Symbol("UNSET");function le(e,t){if(!t)return e;for(var r=T({},e),n=0,a=Object.keys(t);n<a.length;n++){var o=a[n],i=e[o],l=t[o];l===ie?delete r[o]:(null!=l||"className"===o||"style"===o||o.startsWith("on")&&"function"===typeof i||(l=X),r[o]=$(o,i,l))}return r}function ue(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?T({},e,{props:e.props||{},type:"as"}):"render"in e?T({},e,{type:"render"}):"props"in e?T({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),r=["wrap","wrapChildren"],t.every((function(e){return r.includes(e)}))?T({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,r;throw new Error("Unexpected override: "+e)}function ce(e,t){for(var r={},n=0,a=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));n<a.length;n++){var o=a[n];r[o]=se(e[o],t[o])}return r}function se(e,t){var r,n;if(!e)return t;if(!t)return e;var a=ue(e),o=ue(t),i=F.apply(void 0,[a.wrap,o.wrap].filter(B)),l=F.apply(void 0,[a.wrapChildren,o.wrapChildren].filter(B)),u=le(null!=(r=a.props)?r:{},o.props);if("render"===o.type)return{render:o.render,props:u,wrap:i,wrapChildren:l};if("render"===a.type)return{render:a.render,props:u,wrap:i,wrapChildren:l};var c=null!=(n="as"===o.type?o.as:void 0)?n:"as"===a.type?a.as:void 0;return T({props:u,wrap:i,wrapChildren:l},c?{as:c}:{})}function de(e,t){var r,n,a,o,i,l,u,c,s=t.name,d=t.descendantNames,p=t.internalVariantPropNames,f=t.internalArgPropNames,_=["variants","args","overrides"],y=(o=W.apply(void 0,[U.apply(void 0,[e].concat(p))].concat(_)),i=null!=(r=e.variants)?r:{},T({},o,i)),m=(l=W.apply(void 0,[U.apply(void 0,[e].concat(f))].concat(_)),u=null!=(n=e.args)?n:{},T({},l,u)),v=ce(W.apply(void 0,[U.apply(void 0,[e].concat(d))].concat(f,p,_)),null!=(a=e.overrides)?a:{}),h=W.apply(void 0,[e,"variants","args","overrides"].concat(d,p,f));Object.keys(h).length>0&&(v=ce(v,((c={})[s]={props:h},c)));return{variants:y,args:m,overrides:v}}var pe=[],fe={};function _e(){return R?Object.entries(fe).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ye=void 0;R&&window.addEventListener("resize",(function(){var e=_e();ye&&e.join("")===ye.join("")||(ye=e,s.unstable_batchedUpdates((function(){return pe.forEach((function(e){return e()}))})))}));var me=(0,i.createContext)(void 0);function ve(e){var t=e.platform,r=e.children,n=(0,i.useMemo)((function(){return{platform:t}}),[t]);return(0,i.createElement)(me.Provider,{value:n},(0,i.createElement)(f,null,r))}var he=c();function be(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var we=r(9008),ge=(r(3179),r(172)),Oe=r(3924),je=r(6524),xe=new Array,Ee=new Array;var Pe={root:["root","freeBox"],freeBox:["freeBox"]};function Se(e){var t=function(t){var r=de(t,{name:e,descendantNames:be(Pe[e]),internalArgPropNames:Ee,internalVariantPropNames:xe});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae(i.Fragment,null,ae(we.default,null,ae("title",{key:"title"},""),ae("meta",{key:"og:title",property:"og:title",content:""}),ae("meta",{key:"description",name:"description",property:"og:description",content:""})),ae("style",null,"\n        body {\n          margin: 0;\n        }\n      "),ae("div",{className:ge.plasmic_page_wrapper},ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(ge.all,Oe.root_reset,je.root)},ae("div",{"data-plasmic-name":"freeBox","data-plasmic-override":t.freeBox,className:he(ge.all,ge.__wab_text,je.freeBox)},"Welcome to your first page."))))}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicHomepage":"PlasmicHomepage.".concat(e),t}var Ae=Object.assign(Se("root"),{freeBox:Se("freeBox"),internalVariantProps:xe,internalArgProps:Ee});function Ce(e){return console.warn("DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."),e.children}Me=!0,ke={mobileOnly:"(min-width:0px) and (max-width:768px)"},Object.assign(fe,ke),ye=void 0;var Me,ke,Ne={Homepage:Ae},Le={Screen:{component:Ce,isContext:!Boolean("ScreenVariantProvider")}},Te={Homepage:{nkxPwe8B5UJeQ6M13gUCTC:Ae}},Ie={Screen:{nkxPwe8B5UJeQ6M13gUCTC:{component:Ce,isContext:!Boolean(void 0)}}};function De(e,t){if(Ne[t])return Ne[t];if(!Te[t])throw new Error("The component ".concat(t," could not be found."));if(!Te[t][e])throw new Error("The component ".concat(t," requires a valid projectId. Passed: ").concat(e,". Options: ").concat(Object.keys(Te[t])));return Te[t][e]}function He(e,t,r){var n=Object.entries(r||{}).map((function(e){var r=o(e,2),n=r[0],a=r[1];if(Le[n]){var i=Le[n],l=i.component;return[i.isContext?l.Provider:l,a]}if(!Ie[n])throw new Error("The provider ".concat(n," could not be found."));if(!Ie[n][t])throw new Error("The provider ".concat(n," requires a valid projectId. Passed: ").concat(t,". Options: ").concat(Object.keys(Ie[n])));var u=Ie[n][t],c=u.component;return[u.isContext?c.Provider:c,a]}));return n.length?n.reduce((function(e,t){var r=o(t,2),n=r[0],a=r[1];return i.createElement(n,{value:a},e)}),e):e}function Be(e){var t=e.projectId,r=e.component,n=e.componentProps,a=void 0===n?{}:n,o=e.providerProps,l=void 0===o?{}:o,u=De(t,r);return He(i.createElement(u,a),t,l)}Be.getPlumeType=function(e){return De(e.projectId,e.component).__plumeType}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2775:function(e,t,r){"use strict";var n=r(1682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),l=(o=r(3244))&&o.__esModule?o:{default:o},u=r(3398),c=r(1165),s=r(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var _=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var l=a.key.slice(a.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=_.length;u<c;u++){var s=_[u];if(a.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?o=!1:r.add(s);else{var d=a.props[s],p=n[s]||new Set;"name"===s&&i||!p.has(d)?(p.add(d),n[s]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,i.default.cloneElement(e,l)}return i.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,r=(0,i.useContext)(u.AmpStateContext),n=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(l.default,{reduceComponentsToState:y,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};t.default=m},3244:function(e,t,r){"use strict";var n=r(3115),a=r(2553),o=r(2012),i=(r(450),r(9807)),l=r(7690),u=r(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var a=u(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l(this,r)}}t.__esModule=!0,t.default=void 0;var s=r(7294),d=function(e){i(r,e);var t=c(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=d},9795:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return u}});var a=r(5893),o=(r(2702),r(6453));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.Component,r=e.pageProps;return(0,a.jsx)(o.UF,{children:(0,a.jsx)(t,l({},r))})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9795)}])},6524:function(e){e.exports={root:"PlasmicHomepage_root__t3D72",freeBox:"PlasmicHomepage_freeBox__1yis_"}},3924:function(e){e.exports={root_reset:"plasmic_components_root_reset__22pZv"}},172:function(e){e.exports={all:"plasmic__default_style_all__208hu",img:"plasmic__default_style_img__23ccE plasmic__default_style_all__208hu",input:"plasmic__default_style_input__25_Su plasmic__default_style_all__208hu",textarea:"plasmic__default_style_textarea__2c9Ua plasmic__default_style_all__208hu",button:"plasmic__default_style_button__3nItH plasmic__default_style_all__208hu",code:"plasmic__default_style_code__3DJfb plasmic__default_style_all__208hu",pre:"plasmic__default_style_pre__3MJN8 plasmic__default_style_all__208hu",h1:"plasmic__default_style_h1__eQpTj plasmic__default_style_all__208hu",h2:"plasmic__default_style_h2__2bvJx plasmic__default_style_all__208hu",h3:"plasmic__default_style_h3__3ZEPj plasmic__default_style_all__208hu",h4:"plasmic__default_style_h4__1M-X7 plasmic__default_style_all__208hu",h5:"plasmic__default_style_h5__22BiX plasmic__default_style_all__208hu",h6:"plasmic__default_style_h6__367TL plasmic__default_style_all__208hu",address:"plasmic__default_style_address__mWNXW plasmic__default_style_all__208hu",ol:"plasmic__default_style_ol__2pXAy plasmic__default_style_all__208hu",ul:"plasmic__default_style_ul__iAncp plasmic__default_style_all__208hu",select:"plasmic__default_style_select__3HQ-o plasmic__default_style_all__208hu",li:"plasmic__default_style_li__2xWy3 plasmic__default_style_all__208hu",plasmic_default__component_wrapper:"plasmic__default_style_plasmic_default__component_wrapper__39rWm",__wab_text:"plasmic__default_style___wab_text__1tCIX",plasmic_page_wrapper:"plasmic__default_style_plasmic_page_wrapper__rvRY-"}},3179:function(){},2702:function(){},9008:function(e,t,r){e.exports=r(2775)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),a=r(7381),o=r(3585),i=r(5725);e.exports=function(e){return n(e)||a(e)||o(e)||i()}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var r=e.O();_N_E=r}]);