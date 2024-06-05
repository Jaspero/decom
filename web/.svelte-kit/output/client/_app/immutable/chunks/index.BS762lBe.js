var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dist={},random={},characters_const={};Object.defineProperty(characters_const,"__esModule",{value:!0});characters_const.CHARACTERS=void 0;characters_const.CHARACTERS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.random=void 0;var r=characters_const;e.random={aToB:function(t,n){return t===void 0&&(t=0),n===void 0&&(n=1),Math.floor(Math.random()*(n-t+1)+t)},string:function(t,n){return t===void 0&&(t=8),n===void 0&&(n=r.CHARACTERS),Array.apply(null,Array(t)).map(function(){return e.random.fromArray(n.split(""))}).join("")},fromArray:function(t){return t[Math.floor(Math.random()*t.length)]},bool:function(){return Math.random()>=.5},int:function(t,n){return t===void 0&&(t=0),n===void 0&&(n=10),e.random.aToB(t,n)},float:function(t,n){return t===void 0&&(t=0),n===void 0&&(n=1),Math.random()*(n-t)+t},uuid:function(){var t=[8,4,4,4,12];return t.map(function(n){return e.random.string(n)}).join("-")}}})(random);var parseSize$1={};Object.defineProperty(parseSize$1,"__esModule",{value:!0});parseSize$1.parseSize=void 0;var defaultPrecisionMap={bytes:0,KB:0,MB:1,GB:1,TB:2,PB:2};function parseSize(e,r){e===void 0&&(e=0),r===void 0&&(r=defaultPrecisionMap);var t=["bytes","KB","MB","GB","TB","PB"];if(isNaN(parseFloat(String(e)))||!isFinite(e))return"?";for(var n=0;e>=1024;)e/=1024,n++;var a=t[n];return typeof r=="number"?e.toFixed(r)+" "+a:e.toFixed(r[a])+" "+a}parseSize$1.parseSize=parseSize;var sizeToBytes$1={};Object.defineProperty(sizeToBytes$1,"__esModule",{value:!0});sizeToBytes$1.sizeToBytes=void 0;function sizeToBytes(e){if(typeof e=="number")return e;var r=[["bytes","b"],"kb","mb","gb","tb","pb"],t=e.replace(/[0-9.]/g,"").toLowerCase().replace(/\s/g,""),n=r.findIndex(function(a){return Array.isArray(a)?a.includes(t):a===t});return n===-1?0:(parseFloat(e)||0)*Math.pow(1024,n)}sizeToBytes$1.sizeToBytes=sizeToBytes;var safeEval$1={};Object.defineProperty(safeEval$1,"__esModule",{value:!0});safeEval$1.safeEval=void 0;function safeEval(method){if(typeof method!="string")return method;var final;try{final=eval(method)}catch(e){}return final}safeEval$1.safeEval=safeEval;var safeJsonParse$1={};Object.defineProperty(safeJsonParse$1,"__esModule",{value:!0});safeJsonParse$1.safeJsonParse=void 0;function safeJsonParse(e){var r;try{r=JSON.parse(e)}catch{}return r}safeJsonParse$1.safeJsonParse=safeJsonParse;var parseTemplate$1={};Object.defineProperty(parseTemplate$1,"__esModule",{value:!0});parseTemplate$1.parseTemplate=void 0;function parseTemplate(e,r,t,n){if(e===void 0&&(e=""),r===void 0&&(r={}),t||(t=function(u,f){return u.split(".").reduce(function(m,h){return m[h]},f)}),e.includes("{{")){for(var a=new RegExp("{{(.*?)}}");a.test(e);)e=e.replace(a,t(RegExp.$1,r));return e}else return n?e:t(e,r)}parseTemplate$1.parseTemplate=parseTemplate;var swapItems$1={},__spreadArray=commonjsGlobal&&commonjsGlobal.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var n=0,a=r.length,u;n<a;n++)(u||!(n in r))&&(u||(u=Array.prototype.slice.call(r,0,n)),u[n]=r[n]);return e.concat(u||Array.prototype.slice.call(r))};Object.defineProperty(swapItems$1,"__esModule",{value:!0});swapItems$1.swapItems=void 0;function swapItems(e,r,t,n){n===void 0&&(n=!0);var a=n?e:__spreadArray([],e,!0),u=a[r],f=a[t];if(a[t]=u,a[r]=f,!n)return a}swapItems$1.swapItems=swapItems;var roundAccurately$1={};Object.defineProperty(roundAccurately$1,"__esModule",{value:!0});roundAccurately$1.roundAccurately=void 0;function roundAccurately(e,r){return+(Math.round(e+"e"+r)+"e-"+r)}roundAccurately$1.roundAccurately=roundAccurately;var capitalize$1={};Object.defineProperty(capitalize$1,"__esModule",{value:!0});capitalize$1.capitalize=void 0;function capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}capitalize$1.capitalize=capitalize;var toLabel$1={};Object.defineProperty(toLabel$1,"__esModule",{value:!0});toLabel$1.toLabel=void 0;var capitalize_1=capitalize$1;function toLabel(e){return e.split(/(?=[A-Z\_\-])/).map(function(r){return(0,capitalize_1.capitalize)(r.replace(/\_\-/g,""))}).join(" ")}toLabel$1.toLabel=toLabel;var deepEqual$1={};Object.defineProperty(deepEqual$1,"__esModule",{value:!0});deepEqual$1.deepEqual=void 0;function deepEqual(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var t=void 0,n=void 0,a=void 0;if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!deepEqual(e[n],r[n]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(var u=0,f=e.entries();u<f.length;u++){var m=f[u];if(!r.has(m[0]))return!1}for(var h=0,v=e.entries();h<v.length;h++){var m=v[h];if(!deepEqual(m[1],r.get(m[0])))return!1}return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(var E=0,M=e.values();E<M.length;E++){var O=M[E];if(!r.has(O))return!1}return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(t=e.byteLength,t!==r.byteLength)return!1;for(n=t;n--!==0;)if(e[n]!==r[n])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;){var S=a[n];if(!deepEqual(e[S],r[S]))return!1}return!0}return e!==e&&r!==r}deepEqual$1.deepEqual=deepEqual;var deepCopy$1={},deepcopy={exports:{}};/*!
 * @license deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT license.
 *
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */(function(e,r){(function(t,n){e.exports=n()})(commonjsGlobal,function(){var t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:{};function n(o,i){return i={exports:{}},o(i,i.exports),i.exports}var a=n(function(o,i){(function(s,l){o.exports=l()})(t,function(){var s=typeof Promise=="function",l=typeof self=="object"?self:t,b=typeof Symbol<"u",d=typeof Map<"u",w=typeof Set<"u",j=typeof WeakMap<"u",$=typeof WeakSet<"u",_=typeof DataView<"u",A=b&&typeof Symbol.iterator<"u",T=b&&typeof Symbol.toStringTag<"u",re=w&&typeof Set.prototype.entries=="function",te=d&&typeof Map.prototype.entries=="function",ne=re&&Object.getPrototypeOf(new Set().entries()),oe=te&&Object.getPrototypeOf(new Map().entries()),L=A&&typeof Array.prototype[Symbol.iterator]=="function",ae=L&&Object.getPrototypeOf([][Symbol.iterator]()),D=A&&typeof String.prototype[Symbol.iterator]=="function",ie=D&&Object.getPrototypeOf(""[Symbol.iterator]()),ue=8,fe=-1;function se(c){var I=typeof c;if(I!=="object")return I;if(c===null)return"null";if(c===l)return"global";if(Array.isArray(c)&&(T===!1||!(Symbol.toStringTag in c)))return"Array";if(typeof window=="object"&&window!==null){if(typeof window.location=="object"&&c===window.location)return"Location";if(typeof window.document=="object"&&c===window.document)return"Document";if(typeof window.navigator=="object"){if(typeof window.navigator.mimeTypes=="object"&&c===window.navigator.mimeTypes)return"MimeTypeArray";if(typeof window.navigator.plugins=="object"&&c===window.navigator.plugins)return"PluginArray"}if((typeof window.HTMLElement=="function"||typeof window.HTMLElement=="object")&&c instanceof window.HTMLElement){if(c.tagName==="BLOCKQUOTE")return"HTMLQuoteElement";if(c.tagName==="TD")return"HTMLTableDataCellElement";if(c.tagName==="TH")return"HTMLTableHeaderCellElement"}}var x=T&&c[Symbol.toStringTag];if(typeof x=="string")return x;var y=Object.getPrototypeOf(c);return y===RegExp.prototype?"RegExp":y===Date.prototype?"Date":s&&y===Promise.prototype?"Promise":w&&y===Set.prototype?"Set":d&&y===Map.prototype?"Map":$&&y===WeakSet.prototype?"WeakSet":j&&y===WeakMap.prototype?"WeakMap":_&&y===DataView.prototype?"DataView":d&&y===oe?"Map Iterator":w&&y===ne?"Set Iterator":L&&y===ae?"Array Iterator":D&&y===ie?"String Iterator":y===null?"Object":Object.prototype.toString.call(c).slice(ue,fe)}return se})});const u=typeof Buffer<"u",f=u&&typeof Buffer.from<"u",m=u?function(i){return Buffer.isBuffer(i)}:function(){return!1},h=f?function(i){return Buffer.from(i)}:u?function(i){return new Buffer(i)}:function(i){return i};function v(o){return m(o)?"Buffer":a(o)}const E=new Set(["Arguments","Array","Map","Object","Set"]);function M(o,i,s=null){switch(s||v(o)){case"Arguments":case"Array":case"Object":return o[i];case"Map":return o.get(i);case"Set":return i}}function O(o){return E.has(o)}function S(o,i,s,l=null){switch(l||v(o)){case"Arguments":case"Array":case"Object":o[i]=s;break;case"Map":o.set(i,s);break;case"Set":o.add(s);break}return o}const U=typeof globalThis<"u"&&globalThis!==null&&globalThis.Object===Object&&globalThis,F=typeof commonjsGlobal<"u"&&commonjsGlobal!==null&&commonjsGlobal.Object===Object&&commonjsGlobal,G=typeof self<"u"&&self!==null&&self.Object===Object&&self,P=U||F||G||Function("return this")();function V(o){return o.slice(0)}function q(o){return new Boolean(o.valueOf())}function N(o){return new DataView(o.buffer)}function R(o){return h(o)}function J(o){return new Date(o.getTime())}function H(o){return new Number(o)}function W(o){return new RegExp(o.source,o.flags)}function k(o){return new String(o)}function g(o,i){return P[i].from?P[i].from(o):new P[i](o)}function p(o){return o}function C(){return[]}function Z(){return new Map}function K(){return{}}function Q(){return new Set}var X=new Map([["ArrayBuffer",V],["Boolean",q],["Buffer",R],["DataView",N],["Date",J],["Number",H],["RegExp",W],["String",k],["Float32Array",g],["Float64Array",g],["Int16Array",g],["Int32Array",g],["Int8Array",g],["Uint16Array",g],["Uint32Array",g],["Uint8Array",g],["Uint8ClampedArray",g],["Array Iterator",p],["Map Iterator",p],["Promise",p],["Set Iterator",p],["String Iterator",p],["function",p],["global",p],["WeakMap",p],["WeakSet",p],["boolean",p],["null",p],["number",p],["string",p],["symbol",p],["undefined",p],["Arguments",C],["Array",C],["Map",Z],["Object",K],["Set",Q]]);function Y(){}function B(o,i=null,s=Y){arguments.length===2&&typeof i=="function"&&(s=i,i=null);const l=i||v(o),b=X.get(l);if(l==="Object"){const d=s(o,l);if(d!==void 0)return d}return b?b(o,l):o}function ee(o,i={}){typeof i=="function"&&(i={customizer:i});const{customizer:s}=i,l=v(o);if(!O(l))return z(o,null,null,null);const b=B(o,l,s),d=new WeakMap([[o,b]]),w=new WeakSet([o]);return z(o,b,d,w)}function z(o,i,s,l,b){const d=v(o),w=B(o,d);if(!O(d))return w;let j;switch(d){case"Arguments":case"Array":j=Object.keys(o);break;case"Object":j=Object.keys(o),j.push(...Object.getOwnPropertySymbols(o));break;case"Map":case"Set":j=o.keys();break}for(let $ of j){const _=M(o,$,d);if(l.has(_))S(i,$,s.get(_),d);else{const A=v(_),T=B(_,A);O(A)&&(s.set(_,T),l.add(_)),S(i,$,z(_,T,s,l),d)}}return i}return ee})})(deepcopy);var deepcopyExports=deepcopy.exports,__importDefault=commonjsGlobal&&commonjsGlobal.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(deepCopy$1,"__esModule",{value:!0});deepCopy$1.deepCopy=void 0;var deepcopy_1=__importDefault(deepcopyExports);function deepCopy(e){return(0,deepcopy_1.default)(e)}deepCopy$1.deepCopy=deepCopy;var form={},__assign=commonjsGlobal&&commonjsGlobal.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},__assign.apply(this,arguments)};Object.defineProperty(form,"__esModule",{value:!0});form.Form=form.FormControl=form.Validators=void 0;var deep_equal_1=deepEqual$1,deep_copy_1=deepCopy$1;function isNumber(e){return typeof e=="number"||String(Number(e))==e}var Validators=function(){function e(){}return e.required=function(r){return{valid:r!=null&&r!=="",error:"This field is required"}},e.email=function(r){return{valid:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(r),error:"Email is not valid"}},e.min=function(r){return function(t){if(!isNumber(t))return{valid:!1,error:"Field must be a number (minimum "+r+")"};var n=Number(t);return{valid:n>=r,error:"This field is too small (minimum "+r+")"}}},e.max=function(r){return function(t){if(!isNumber(t))return{valid:!1,error:"Field must be a number (maximum "+r+")"};var n=Number(t);return{valid:n<=r,error:"This field is too big (maximum "+r+")"}}},e.minLength=function(r){return function(t){return typeof t!="string"&&!Array.isArray(t)?{valid:!1,error:"This field is too short (minimum "+r+" characters)"}:{valid:t.length>=r,error:"This field is too short (minimum "+r+" characters)"}}},e.maxLength=function(r){return function(t){return typeof t!="string"&&!Array.isArray(t)?{valid:!1,error:"This field is too long (maximum "+r+" characters)"}:{valid:t.length<=r,error:"This field is too long (maximum "+r+" characters)"}}},e.URL=function(r){return{valid:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(r),error:"This field is not a valid URL"}},e.pattern=function(r){return function(t){return{valid:new RegExp(r).test(t),error:"This field is not valid"}}},e.enum=function(r){return function(t){return{valid:r.some(function(n){return(0,deep_equal_1.deepEqual)(n,t)}),error:"This field is not valid. Must be one of: "+r.join(", ")}}},e}();form.Validators=Validators;var FormControl=function(){function e(r,t){var n=this;this._validators=[],this._subscriptions=[],this._touched=!1,this._handler={get:function(a,u){return a[u]},set:function(a,u,f){return a[u]=f,!n._touched&&!(0,deep_equal_1.deepEqual)(a[u],n._originalValue)&&(n._touched=!0),n._subscriptions.forEach(function(m){return m(f)}),!0}},this._originalValue=(0,deep_copy_1.deepCopy)(r),this._validators=t||[],this._proxy=new Proxy({value:r},this._handler)}return Object.defineProperty(e.prototype,"value",{get:function(){return this._proxy.value},set:function(r){this._proxy.value=r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){var r=this;return this._validators.every(function(t){return t(r._proxy.value).valid})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invalid",{get:function(){return!this.valid},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"errors",{get:function(){var r=this;return this._validators.map(function(t){return t(r._proxy.value)}).filter(function(t){return!t.valid}).map(function(t){return t.error})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dirty",{get:function(){return!(0,deep_equal_1.deepEqual)(this._proxy.value,this._originalValue)||this._touched},enumerable:!1,configurable:!0}),e.prototype.setValue=function(r){this._proxy.value=r},e.prototype.subscribe=function(r){var t=this;return this._subscriptions.push(r),{unsubscribe:function(){t._subscriptions=t._subscriptions.filter(function(n){return n!==r})}}},e}();form.FormControl=FormControl;var Form=function(){function e(r){this.controls={},this.controls=Object.keys(r).reduce(function(t,n){var a,u;return r[n]instanceof FormControl?__assign(__assign({},t),(a={},a[n]=r[n],a)):__assign(__assign({},t),(u={},u[n]=new FormControl(r[n][0],r[n].slice(1)),u))},{})}return Object.defineProperty(e.prototype,"valid",{get:function(){return Object.values(this.controls).every(function(r){return r.valid})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invalid",{get:function(){return!this.valid},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dirty",{get:function(){return Object.values(this.controls).some(function(r){return r.dirty})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dirtyControls",{get:function(){var r=this;return Object.keys(this.controls).filter(function(t){return r.controls[t].dirty})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){var r=this;return Object.keys(this.controls).reduce(function(t,n){var a;return __assign(__assign({},t),(a={},a[n]=r.controls[n].value,a))},{})},enumerable:!1,configurable:!0}),e.prototype.get=function(r){return this.controls[r]},e}();form.Form=Form;var formatEmail$1={};Object.defineProperty(formatEmail$1,"__esModule",{value:!0});formatEmail$1.formatEmail=void 0;function formatEmail(e){var r=e.toLowerCase().trim(),t=r.split("@"),n=t[0],a=t[1];return[n.replace(/\./g,""),a].join("@")}formatEmail$1.formatEmail=formatEmail;var cleanSlug$1={};Object.defineProperty(cleanSlug$1,"__esModule",{value:!0});cleanSlug$1.cleanSlug=void 0;function cleanSlug(e){return(e||"").trim().replace(/[^a-zA-Z0-9-_ ]|,/g,"").replace(/ /g,"-").toLowerCase()}cleanSlug$1.cleanSlug=cleanSlug;var base64UrlDecode$1={};Object.defineProperty(base64UrlDecode$1,"__esModule",{value:!0});base64UrlDecode$1.base64UrlDecode=void 0;function base64UrlDecode(e,r){return r===void 0&&(r=!0),e=atob(e.replace(/\-/g,"+").replace(/\_/g,"/").replace(/\./g,"=")),r&&(e=JSON.parse(e)),e}base64UrlDecode$1.base64UrlDecode=base64UrlDecode;var base64UrlEncode$1={};Object.defineProperty(base64UrlEncode$1,"__esModule",{value:!0});base64UrlEncode$1.base64UrlEncode=void 0;function base64UrlEncode(e,r){return r===void 0&&(r=!0),r&&(e=JSON.stringify(e)),btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,".")}base64UrlEncode$1.base64UrlEncode=base64UrlEncode;(function(e){var r=commonjsGlobal&&commonjsGlobal.__createBinding||(Object.create?function(n,a,u,f){f===void 0&&(f=u),Object.defineProperty(n,f,{enumerable:!0,get:function(){return a[u]}})}:function(n,a,u,f){f===void 0&&(f=u),n[f]=a[u]}),t=commonjsGlobal&&commonjsGlobal.__exportStar||function(n,a){for(var u in n)u!=="default"&&!Object.prototype.hasOwnProperty.call(a,u)&&r(a,n,u)};Object.defineProperty(e,"__esModule",{value:!0}),t(random,e),t(parseSize$1,e),t(sizeToBytes$1,e),t(safeEval$1,e),t(safeJsonParse$1,e),t(parseTemplate$1,e),t(swapItems$1,e),t(roundAccurately$1,e),t(capitalize$1,e),t(toLabel$1,e),t(deepEqual$1,e),t(deepCopy$1,e),t(form,e),t(formatEmail$1,e),t(cleanSlug$1,e),t(base64UrlDecode$1,e),t(base64UrlEncode$1,e),t(characters_const,e)})(dist);export{dist as d};