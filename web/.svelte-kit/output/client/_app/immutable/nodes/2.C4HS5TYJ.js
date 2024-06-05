import{c as ze,S as Ke,i as He,s as Ge,o as L,X as be,x as Qt,Y as Ve,d as ot,g as P,B as V,j as M,k as _t,n as he,t as We,f as Qe,l as Sr,$ as Tc,F as Xs,Q as ue,u as ht,v as Tt,z as Ca,a0 as wc,N as Ic,a as Et,e as dt,p as De,h as vt,b as ft,q as ke,G as Pt,r as Ne,a1 as ba,y as Va,R as Ac,T as Rc,U as Sc,a2 as Da,a3 as sr,w as Oe,Z as ka,D as io,M as Js,a4 as Na,a5 as Oa,E as xa,H as La,C as Ma,I as oo,J as Pc,a6 as St}from"../chunks/Component.BwNXiCAZ.js";import"../chunks/index.IHki7fMi.js";import{p as Cc}from"../chunks/stores.d6XaYIdv.js";import{m as ao}from"../chunks/meta.store.BdqmDbcc.js";import{B as _s}from"../chunks/Button.CTOLldax.js";import{g as bc}from"../chunks/entry.ek6F9sZ3.js";const Vc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Dc=(e,t)=>{const n=Array.isArray(t)?t:[t];return e.classList.add(...n),{destroy(){e.classList.remove(...n)}}};var lo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},kc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,u=l?e[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Fa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):kc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Nc;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oc=function(e){const t=Fa(e);return Ua.encodeByteArray(t,!0)},ir=function(e){return Oc(e).replace(/\./g,"")},xc=function(e){try{return Ua.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=()=>Lc().__FIREBASE_DEFAULTS__,Fc=()=>{if(typeof process>"u"||typeof lo>"u")return;const e=lo.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Uc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xc(e[1]);return t&&JSON.parse(t)},Zs=()=>{try{return Mc()||Fc()||Uc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Bc=e=>{var t,n;return(n=(t=Zs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ti=e=>{const t=Bc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ba=()=>{var e;return(e=Zs())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ir(JSON.stringify(n)),ir(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qc(){var e;const t=(e=Zs())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $c(){return!qc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qa(){try{return typeof indexedDB=="object"}catch{return!1}}function zc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="FirebaseError";class te extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Kc,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Hc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new te(s,a,r)}}function Hc(e,t){return e.replace(Gc,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Gc=/\{\$([^}]+)}/g;function ys(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(uo(i)&&uo(o)){if(!ys(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function uo(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){return e&&e._delegate?e._delegate:e}class de{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yc(t))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=re){return this.instances.has(t)}getOptions(t=re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=re){return this.component?this.component.multipleInstances?t:re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qc(e){return e===re?void 0:e}function Yc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Jc={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Zc=N.INFO,th={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},eh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=th[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class za{constructor(t){this.name=t,this._logLevel=Zc,this._logHandler=eh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const nh=(e,t)=>t.some(n=>e instanceof n);let co,ho;function rh(){return co||(co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sh(){return ho||(ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ka=new WeakMap,Es=new WeakMap,Ha=new WeakMap,ts=new WeakMap,ei=new WeakMap;function ih(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ht(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ka.set(n,e)}).catch(()=>{}),ei.set(t,e),t}function oh(e){if(Es.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Es.set(e,t)}let vs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Es.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ha.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ah(e){vs=e(vs)}function lh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(es(this),t,...n);return Ha.set(r,t.sort?t.sort():[t]),Ht(r)}:sh().includes(e)?function(...t){return e.apply(es(this),t),Ht(Ka.get(this))}:function(...t){return Ht(e.apply(es(this),t))}}function uh(e){return typeof e=="function"?lh(e):(e instanceof IDBTransaction&&oh(e),nh(e,rh())?new Proxy(e,vs):e)}function Ht(e){if(e instanceof IDBRequest)return ih(e);if(ts.has(e))return ts.get(e);const t=uh(e);return t!==e&&(ts.set(e,t),ei.set(t,e)),t}const es=e=>ei.get(e);function ch(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ht(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ht(o.result),l.oldVersion,l.newVersion,Ht(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const hh=["get","getKey","getAll","getAllKeys","count"],dh=["put","add","delete","clear"],ns=new Map;function fo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ns.get(t))return ns.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=dh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hh.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return ns.set(t,i),i}ah(e=>({...e,get:(t,n,r)=>fo(t,n)||e.get(t,n,r),has:(t,n)=>!!fo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ts="@firebase/app",mo="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new za("@firebase/app"),gh="@firebase/app-compat",ph="@firebase/analytics-compat",_h="@firebase/analytics",yh="@firebase/app-check-compat",Eh="@firebase/app-check",vh="@firebase/auth",Th="@firebase/auth-compat",wh="@firebase/database",Ih="@firebase/database-compat",Ah="@firebase/functions",Rh="@firebase/functions-compat",Sh="@firebase/installations",Ph="@firebase/installations-compat",Ch="@firebase/messaging",bh="@firebase/messaging-compat",Vh="@firebase/performance",Dh="@firebase/performance-compat",kh="@firebase/remote-config",Nh="@firebase/remote-config-compat",Oh="@firebase/storage",xh="@firebase/storage-compat",Lh="@firebase/firestore",Mh="@firebase/firestore-compat",Fh="firebase",Uh="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]",Bh={[Ts]:"fire-core",[gh]:"fire-core-compat",[_h]:"fire-analytics",[ph]:"fire-analytics-compat",[Eh]:"fire-app-check",[yh]:"fire-app-check-compat",[vh]:"fire-auth",[Th]:"fire-auth-compat",[wh]:"fire-rtdb",[Ih]:"fire-rtdb-compat",[Ah]:"fire-fn",[Rh]:"fire-fn-compat",[Sh]:"fire-iid",[Ph]:"fire-iid-compat",[Ch]:"fire-fcm",[bh]:"fire-fcm-compat",[Vh]:"fire-perf",[Dh]:"fire-perf-compat",[kh]:"fire-rc",[Nh]:"fire-rc-compat",[Oh]:"fire-gcs",[xh]:"fire-gcs-compat",[Lh]:"fire-fst",[Mh]:"fire-fst-compat","fire-js":"fire-js",[Fh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Map,jh=new Map,Is=new Map;function go(e,t){try{e.container.addComponent(t)}catch(n){fe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xe(e){const t=e.name;if(Is.has(t))return fe.debug(`There were multiple attempts to register component ${t}.`),!1;Is.set(t,e);for(const n of ar.values())go(n,e);for(const n of jh.values())go(n,e);return!0}function ni(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new $a("app","Firebase",qh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=Uh;function Wa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ws,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Gt.create("bad-app-name",{appName:String(s)});if(n||(n=Ba()),!n)throw Gt.create("no-options");const i=ar.get(s);if(i){if(ys(n,i.options)&&ys(r,i.config))return i;throw Gt.create("duplicate-app",{appName:s})}const o=new Xc(s);for(const l of Is.values())o.addComponent(l);const a=new $h(n,r,o);return ar.set(s,a),a}function ri(e=ws){const t=ar.get(e);if(!t&&e===ws&&Ba())return Wa();if(!t)throw Gt.create("no-app",{appName:e});return t}function Dt(e,t,n){var r;let s=(r=Bh[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fe.warn(a.join(" "));return}xe(new de(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="firebase-heartbeat-database",Kh=1,pn="firebase-heartbeat-store";let rs=null;function Qa(){return rs||(rs=ch(zh,Kh,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(pn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Gt.create("idb-open",{originalErrorMessage:e.message})})),rs}async function Hh(e){try{const n=(await Qa()).transaction(pn),r=await n.objectStore(pn).get(Ya(e));return await n.done,r}catch(t){if(t instanceof te)fe.warn(t.message);else{const n=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});fe.warn(n.message)}}}async function po(e,t){try{const r=(await Qa()).transaction(pn,"readwrite");await r.objectStore(pn).put(t,Ya(e)),await r.done}catch(n){if(n instanceof te)fe.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(r.message)}}}function Ya(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=1024,Wh=30*24*60*60*1e3;class Qh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_o();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Wh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_o(),{heartbeatsToSend:r,unsentEntries:s}=Yh(this._heartbeatsCache.heartbeats),i=ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _o(){return new Date().toISOString().substring(0,10)}function Yh(e,t=Gh){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yo(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qa()?zc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function yo(e){return ir(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(e){xe(new de("platform-logger",t=>new fh(t),"PRIVATE")),xe(new de("heartbeat",t=>new Qh(t),"PRIVATE")),Dt(Ts,mo,e),Dt(Ts,mo,"esm2017"),Dt("fire-js","")}Jh("");var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,si=si||{},R=Zh||self;function Pr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Dn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function td(e){return Object.prototype.hasOwnProperty.call(e,ss)&&e[ss]||(e[ss]=++ed)}var ss="closure_uid_"+(1e9*Math.random()>>>0),ed=0;function nd(e,t,n){return e.call.apply(e.bind,arguments)}function rd(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function at(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=nd:at=rd,at.apply(null,arguments)}function Hn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function X(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function ee(){this.s=this.s,this.o=this.o}var sd=0;ee.prototype.s=!1;ee.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sd!=0)&&td(this)};ee.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xa=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ii(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Eo(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function lt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var id=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};R.addEventListener("test",n,t),R.removeEventListener("test",n,t)}catch{}return e}();function _n(e){return/^[\s\xa0]*$/.test(e)}function Cr(){var e=R.navigator;return e&&(e=e.userAgent)?e:""}function Ct(e){return Cr().indexOf(e)!=-1}function oi(e){return oi[" "](e),e}oi[" "]=function(){};function od(e,t){var n=Jd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var ad=Ct("Opera"),Le=Ct("Trident")||Ct("MSIE"),Ja=Ct("Edge"),As=Ja||Le,Za=Ct("Gecko")&&!(Cr().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),ld=Cr().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function tl(){var e=R.document;return e?e.documentMode:void 0}var Rs;t:{var is="",os=function(){var e=Cr();if(Za)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ja)return/Edge\/([\d\.]+)/.exec(e);if(Le)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ld)return/WebKit\/(\S+)/.exec(e);if(ad)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(os&&(is=os?os[1]:""),Le){var as=tl();if(as!=null&&as>parseFloat(is)){Rs=String(as);break t}}Rs=is}var Ss;if(R.document&&Le){var vo=tl();Ss=vo||parseInt(Rs,10)||void 0}else Ss=void 0;var ud=Ss;function yn(e,t){if(lt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Za){t:{try{oi(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:cd[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&yn.$.h.call(this)}}X(yn,lt);var cd={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),hd=0;function dd(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++hd,this.fa=this.ia=!1}function br(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ai(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function fd(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function el(e){const t={};for(const n in e)t[n]=e[n];return t}const To="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nl(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<To.length;i++)n=To[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Vr(e){this.src=e,this.g={},this.h=0}Vr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Cs(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new dd(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Ps(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Xa(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(br(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Cs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var li="closure_lm_"+(1e6*Math.random()|0),ls={};function rl(e,t,n,r,s){if(r&&r.once)return il(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)rl(e,t[i],n,r,s);return null}return n=hi(n),e&&e[kn]?e.O(t,n,Dn(r)?!!r.capture:!!r,s):sl(e,t,n,!1,r,s)}function sl(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Dn(s)?!!s.capture:!!s,a=ci(e);if(a||(e[li]=a=new Vr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=md(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)id||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(al(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function md(){function e(n){return t.call(e.src,e.listener,n)}const t=gd;return e}function il(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)il(e,t[i],n,r,s);return null}return n=hi(n),e&&e[kn]?e.P(t,n,Dn(r)?!!r.capture:!!r,s):sl(e,t,n,!0,r,s)}function ol(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ol(e,t[i],n,r,s);else r=Dn(r)?!!r.capture:!!r,n=hi(n),e&&e[kn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Cs(i,n,r,s),-1<n&&(br(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ci(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cs(t,n,r,s)),(n=-1<e?t[e]:null)&&ui(n))}function ui(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[kn])Ps(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(al(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ci(t))?(Ps(n,e),n.h==0&&(n.src=null,t[li]=null)):br(e)}}}function al(e){return e in ls?ls[e]:ls[e]="on"+e}function gd(e,t){if(e.fa)e=!0;else{t=new yn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ui(e),e=n.call(r,t)}return e}function ci(e){return e=e[li],e instanceof Vr?e:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(e){return typeof e=="function"?e:(e[us]||(e[us]=function(t){return e.handleEvent(t)}),e[us])}function Y(){ee.call(this),this.i=new Vr(this),this.S=this,this.J=null}X(Y,ee);Y.prototype[kn]=!0;Y.prototype.removeEventListener=function(e,t,n,r){ol(this,e,t,n,r)};function et(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new lt(t,e);else if(t instanceof lt)t.target=t.target||e;else{var s=t;t=new lt(r,e),nl(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Gn(o,r,!0,t)&&s}if(o=t.g=e,s=Gn(o,r,!0,t)&&s,s=Gn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Gn(o,r,!1,t)&&s}Y.prototype.N=function(){if(Y.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)br(n[r]);delete e.g[t],e.h--}}this.J=null};Y.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Y.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Gn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ps(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var di=R.JSON.stringify;class pd{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function _d(){var e=fi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class yd{constructor(){this.h=this.g=null}add(t,n){const r=ll.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ll=new pd(()=>new Ed,e=>e.reset());class Ed{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vd(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Td(e){R.setTimeout(()=>{throw e},0)}let En,vn=!1,fi=new yd,ul=()=>{const e=R.Promise.resolve(void 0);En=()=>{e.then(wd)}};var wd=()=>{for(var e;e=_d();){try{e.h.call(e.g)}catch(n){Td(n)}var t=ll;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}vn=!1};function Dr(e,t){Y.call(this),this.h=e||1,this.g=t||R,this.j=at(this.qb,this),this.l=Date.now()}X(Dr,Y);v=Dr.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(mi(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}v.N=function(){Dr.$.N.call(this),mi(this),delete this.g};function gi(e,t,n){if(typeof e=="function")n&&(e=at(e,n));else if(e&&typeof e.handleEvent=="function")e=at(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(e,t||0)}function cl(e){e.g=gi(()=>{e.g=null,e.i&&(e.i=!1,cl(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Id extends ee{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:cl(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(e){ee.call(this),this.h=e,this.g={}}X(Tn,ee);var wo=[];function hl(e,t,n,r){Array.isArray(n)||(n&&(wo[0]=n.toString()),n=wo);for(var s=0;s<n.length;s++){var i=rl(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function dl(e){ai(e.g,function(t,n){this.g.hasOwnProperty(n)&&ui(t)},e),e.g={}}Tn.prototype.N=function(){Tn.$.N.call(this),dl(this)};Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kr(){this.g=!0}kr.prototype.Ea=function(){this.g=!1};function Ad(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Rd(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Re(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Pd(e,n)+(r?" "+r:"")})}function Sd(e,t){e.info(function(){return"TIMEOUT: "+t})}kr.prototype.info=function(){};function Pd(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return di(n)}catch{return t}}var _e={},Io=null;function Nr(){return Io=Io||new Y}_e.Ta="serverreachability";function fl(e){lt.call(this,_e.Ta,e)}X(fl,lt);function wn(e){const t=Nr();et(t,new fl(t))}_e.STAT_EVENT="statevent";function ml(e,t){lt.call(this,_e.STAT_EVENT,e),this.stat=t}X(ml,lt);function ct(e){const t=Nr();et(t,new ml(t,e))}_e.Ua="timingevent";function gl(e,t){lt.call(this,_e.Ua,e),this.size=t}X(gl,lt);function Nn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){e()},t)}var Or={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pi(){}pi.prototype.h=null;function Ao(e){return e.h||(e.h=e.i())}function _l(){}var On={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _i(){lt.call(this,"d")}X(_i,lt);function yi(){lt.call(this,"c")}X(yi,lt);var bs;function xr(){}X(xr,pi);xr.prototype.g=function(){return new XMLHttpRequest};xr.prototype.i=function(){return{}};bs=new xr;function xn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Tn(this),this.P=Cd,e=As?125:void 0,this.V=new Dr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var Cd=45e3,El={},Vs={};v=xn.prototype;v.setTimeout=function(e){this.P=e};function Ds(e,t,n){e.L=1,e.A=Mr($t(t)),e.u=n,e.S=!0,vl(e,null)}function vl(e,t){e.G=Date.now(),Ln(e),e.B=$t(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Cl(n.i,"t",r),e.o=0,n=e.l.J,e.h=new yl,e.g=Ql(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Id(at(e.Pa,e,e.g),e.O)),hl(e.U,e.g,"readystatechange",e.nb),t=e.I?el(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),wn(),Ad(e.j,e.v,e.B,e.m,e.W,e.u)}v.nb=function(e){e=e.target;const t=this.M;t&&bt(e)==3?t.l():this.Pa(e)};v.Pa=function(e){try{if(e==this.g)t:{const c=bt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||As||this.g&&(this.h.h||this.g.ja()||Co(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?wn(3):wn(2)),Lr(this);var n=this.g.da();this.ca=n;e:if(Tl(this)){var r=Co(this.g);e="";var s=r.length,i=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),cn(this);var o="";break e}this.h.i=new R.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Rd(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_n(a)){var u=a;break e}}u=null}if(n=u)Re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ks(this,n);else{this.i=!1,this.s=3,ct(12),ie(this),cn(this);break t}}this.S?(wl(this,c,o),As&&this.i&&c==3&&(hl(this.U,this.V,"tick",this.mb),this.V.start())):(Re(this.j,this.m,o,null),ks(this,o)),c==4&&ie(this),this.i&&!this.J&&(c==4?Kl(this.l,this):(this.i=!1,Ln(this)))}else Qd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),ie(this),cn(this)}}}catch{}finally{}};function Tl(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function wl(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=bd(e,n),s==Vs){t==4&&(e.s=4,ct(14),r=!1),Re(e.j,e.m,null,"[Incomplete Response]");break}else if(s==El){e.s=4,ct(15),Re(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Re(e.j,e.m,s,null),ks(e,s);Tl(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ct(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ai(t),t.M=!0,ct(11))):(Re(e.j,e.m,n,"[Invalid Chunked Response]"),ie(e),cn(e))}v.mb=function(){if(this.g){var e=bt(this.g),t=this.g.ja();this.o<t.length&&(Lr(this),wl(this,e,t),this.i&&e!=4&&Ln(this))}};function bd(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Vs:(n=Number(t.substring(n,r)),isNaN(n)?El:(r+=1,r+n>t.length?Vs:(t=t.slice(r,r+n),e.o=r+n,t)))}v.cancel=function(){this.J=!0,ie(this)};function Ln(e){e.Y=Date.now()+e.P,Il(e,e.P)}function Il(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Nn(at(e.lb,e),t)}function Lr(e){e.C&&(R.clearTimeout(e.C),e.C=null)}v.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Sd(this.j,this.B),this.L!=2&&(wn(),ct(17)),ie(this),this.s=2,cn(this)):Il(this,this.Y-e)};function cn(e){e.l.H==0||e.J||Kl(e.l,e)}function ie(e){Lr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,mi(e.V),dl(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ks(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ns(n.i,e))){if(!e.K&&Ns(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)cr(n),jr(n);else break t;Ii(n),ct(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Nn(at(n.ib,n),6e3));if(1>=Dl(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else oe(n,11)}else if((e.K||n.g==e)&&cr(n),!_n(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ei(i,i.h),i.h=null))}if(r.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,B(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Wl(r,r.J?r.pa:null,r.Y),o.K){kl(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Lr(a),Ln(a)),r.g=o}else $l(r);0<n.j.length&&qr(n)}else u[0]!="stop"&&u[0]!="close"||oe(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?oe(n,7):wi(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}wn(4)}catch{}}function Vd(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Pr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Dd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Pr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Al(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Pr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Dd(e),r=Vd(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Rl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ce(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ce){this.h=e.h,lr(this,e.j),this.s=e.s,this.g=e.g,ur(this,e.m),this.l=e.l;var t=e.i,n=new In;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ro(this,n),this.o=e.o}else e&&(t=String(e).match(Rl))?(this.h=!1,lr(this,t[1]||"",!0),this.s=on(t[2]||""),this.g=on(t[3]||"",!0),ur(this,t[4]),this.l=on(t[5]||"",!0),Ro(this,t[6]||"",!0),this.o=on(t[7]||"")):(this.h=!1,this.i=new In(null,this.h))}ce.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,So,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(an(t,So,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(an(n,n.charAt(0)=="/"?xd:Od,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,Md)),e.join("")};function $t(e){return new ce(e)}function lr(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ur(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ro(e,t,n){t instanceof In?(e.i=t,Fd(e.i,e.h)):(n||(t=an(t,Ld)),e.i=new In(t,e.h))}function B(e,t,n){e.i.set(t,n)}function Mr(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Nd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Nd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var So=/[#\/\?@]/g,Od=/[#\?:]/g,xd=/[#\?]/g,Ld=/[#\?@]/g,Md=/#/g;function In(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ne(e){e.g||(e.g=new Map,e.h=0,e.i&&kd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=In.prototype;v.add=function(e,t){ne(this),this.i=null,e=Ye(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Sl(e,t){ne(e),t=Ye(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Pl(e,t){return ne(e),t=Ye(e,t),e.g.has(t)}v.forEach=function(e,t){ne(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};v.ta=function(){ne(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};v.Z=function(e){ne(this);let t=[];if(typeof e=="string")Pl(this,e)&&(t=t.concat(this.g.get(Ye(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};v.set=function(e,t){return ne(this),this.i=null,e=Ye(this,e),Pl(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};v.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Cl(e,t,n){Sl(e,t),0<n.length&&(e.i=null,e.g.set(Ye(e,t),ii(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Ye(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Fd(e,t){t&&!e.j&&(ne(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Sl(this,r),Cl(this,s,n))},e)),e.j=t}var Ud=class{constructor(e,t){this.g=e,this.map=t}};function bl(e){this.l=e||Bd,R.PerformanceNavigationTiming?(e=R.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bd=10;function Vl(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Dl(e){return e.h?1:e.g?e.g.size:0}function Ns(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ei(e,t){e.g?e.g.add(t):e.h=t}function kl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}bl.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Nl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ii(e.i)}var jd=class{stringify(e){return R.JSON.stringify(e,void 0)}parse(e){return R.JSON.parse(e,void 0)}};function qd(){this.g=new jd}function $d(e,t,n){const r=n||"";try{Al(e,function(s,i){let o=s;Dn(s)&&(o=di(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function zd(e,t){const n=new kr;if(R.Image){const r=new Image;r.onload=Hn(Wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Hn(Wn,n,r,"TestLoadImage: error",!1,t),r.onabort=Hn(Wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Hn(Wn,n,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Wn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Fr(e){this.l=e.ec||null,this.j=e.ob||!1}X(Fr,pi);Fr.prototype.g=function(){return new Ur(this.l,this.j)};Fr.prototype.i=function(e){return function(){return e}}({});function Ur(e,t){Y.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=vi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X(Ur,Y);var vi=0;v=Ur.prototype;v.open=function(e,t){if(this.readyState!=vi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)};v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||R).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=vi};v.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ol(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ol(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}v.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Mn(this):An(this),this.readyState==3&&Ol(this)}};v.Za=function(e){this.g&&(this.response=this.responseText=e,Mn(this))};v.Ya=function(e){this.g&&(this.response=e,Mn(this))};v.ka=function(){this.g&&Mn(this)};function Mn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)};v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Kd=R.JSON.parse;function z(e){Y.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xl,this.L=this.M=!1}X(z,Y);var xl="",Hd=/^https?$/i,Gd=["POST","PUT"];v=z.prototype;v.Oa=function(e){this.M=e};v.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bs.g(),this.C=this.u?Ao(this.u):Ao(bs),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Po(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=R.FormData&&e instanceof R.FormData,!(0<=Xa(Gd,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fl(this),0<this.B&&((this.L=Wd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=gi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Po(this,i)}};function Wd(e){return Le&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.ua=function(){typeof si<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Po(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ll(e),Br(e)}function Ll(e){e.F||(e.F=!0,et(e,"complete"),et(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,et(this,"complete"),et(this,"abort"),Br(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Br(this,!0)),z.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?Ml(this):this.kb())};v.kb=function(){Ml(this)};function Ml(e){if(e.h&&typeof si<"u"&&(!e.C[1]||bt(e)!=4||e.da()!=2)){if(e.v&&bt(e)==4)gi(e.La,0,e);else if(et(e,"readystatechange"),bt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Rl)[1]||null;!s&&R.self&&R.self.location&&(s=R.self.location.protocol.slice(0,-1)),r=!Hd.test(s?s.toLowerCase():"")}n=r}if(n)et(e,"complete"),et(e,"success");else{e.m=6;try{var i=2<bt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Ll(e)}}finally{Br(e)}}}}function Br(e,t){if(e.g){Fl(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||et(e,"ready");try{n.onreadystatechange=r}catch{}}}function Fl(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(R.clearTimeout(e.A),e.A=null)}v.isActive=function(){return!!this.g};function bt(e){return e.g?e.g.readyState:0}v.da=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Kd(t)}};function Co(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case xl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Qd(e){const t={};e=(e.g&&2<=bt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(_n(e[r]))continue;var n=vd(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}fd(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ul(e){let t="";return ai(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ti(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ul(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function nn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Bl(e){this.Ga=0,this.j=[],this.l=new kr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nn("baseRetryDelayMs",5e3,e),this.hb=nn("retryDelaySeedMs",1e4,e),this.eb=nn("forwardChannelMaxRetries",2,e),this.xa=nn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new bl(e&&e.concurrentRequestLimit),this.Ja=new qd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Bl.prototype;v.ra=8;v.H=1;function wi(e){if(jl(e),e.H==3){var t=e.W++,n=$t(e.I);if(B(n,"SID",e.K),B(n,"RID",t),B(n,"TYPE","terminate"),Fn(e,n),t=new xn(e,e.l,t),t.L=2,t.A=Mr($t(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&R.Image&&(new Image().src=t.A,n=!0),n||(t.g=Ql(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ln(t)}Gl(e)}function jr(e){e.g&&(Ai(e),e.g.cancel(),e.g=null)}function jl(e){jr(e),e.u&&(R.clearTimeout(e.u),e.u=null),cr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&R.clearTimeout(e.m),e.m=null)}function qr(e){if(!Vl(e.i)&&!e.m){e.m=!0;var t=e.Na;En||ul(),vn||(En(),vn=!0),fi.add(t,e),e.C=0}}function Yd(e,t){return Dl(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Nn(at(e.Na,e,t),Hl(e,e.C)),e.C++,!0)}v.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new xn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=el(i),nl(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ql(this,s,t),n=$t(this.I),B(n,"RID",e),B(n,"CVER",22),this.F&&B(n,"X-HTTP-Session-Id",this.F),Fn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Ul(i)))+"&"+t:this.o&&Ti(n,this.o,i)),Ei(this.i,s),this.bb&&B(n,"TYPE","init"),this.P?(B(n,"$req",t),B(n,"SID","null"),s.aa=!0,Ds(s,n,null)):Ds(s,n,t),this.H=2}}else this.H==3&&(e?bo(this,e):this.j.length==0||Vl(this.i)||bo(this))};function bo(e,t){var n;t?n=t.m:n=e.W++;const r=$t(e.I);B(r,"SID",e.K),B(r,"RID",n),B(r,"AID",e.V),Fn(e,r),e.o&&e.s&&Ti(r,e.o,e.s),n=new xn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ql(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ei(e.i,n),Ds(n,r,t)}function Fn(e,t){e.na&&ai(e.na,function(n,r){B(t,r,n)}),e.h&&Al({},function(n,r){B(t,r,n)})}function ql(e,t,n){n=Math.min(e.j.length,n);var r=e.h?at(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=s[l].g;const c=s[l].map;if(u-=i,0>u)i=Math.max(0,s[l].g-100),a=!1;else try{$d(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function $l(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;En||ul(),vn||(En(),vn=!0),fi.add(t,e),e.A=0}}function Ii(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Nn(at(e.Ma,e),Hl(e,e.A)),e.A++,!0)}v.Ma=function(){if(this.u=null,zl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Nn(at(this.jb,this),e)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ct(10),jr(this),zl(this))};function Ai(e){e.B!=null&&(R.clearTimeout(e.B),e.B=null)}function zl(e){e.g=new xn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);B(t,"RID","rpc"),B(t,"SID",e.K),B(t,"AID",e.V),B(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&B(t,"TO",e.qa),B(t,"TYPE","xmlhttp"),Fn(e,t),e.o&&e.s&&Ti(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Mr($t(t)),n.u=null,n.S=!0,vl(n,e)}v.ib=function(){this.v!=null&&(this.v=null,jr(this),Ii(this),ct(19))};function cr(e){e.v!=null&&(R.clearTimeout(e.v),e.v=null)}function Kl(e,t){var n=null;if(e.g==t){cr(e),Ai(e),e.g=null;var r=2}else if(Ns(e.i,t))n=t.F,kl(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Nr(),et(r,new gl(r,n)),qr(e)}else $l(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Yd(e,t)||r==2&&Ii(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:oe(e,5);break;case 4:oe(e,10);break;case 3:oe(e,6);break;default:oe(e,2)}}}function Hl(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function oe(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=at(e.pb,e);n||(n=new ce("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||lr(n,"https"),Mr(n)),zd(n.toString(),r)}else ct(2);e.H=0,e.h&&e.h.za(t),Gl(e),jl(e)}v.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ct(2)):(this.l.info("Failed to ping google.com"),ct(1))};function Gl(e){if(e.H=0,e.ma=[],e.h){const t=Nl(e.i);(t.length!=0||e.j.length!=0)&&(Eo(e.ma,t),Eo(e.ma,e.j),e.i.i.length=0,ii(e.j),e.j.length=0),e.h.ya()}}function Wl(e,t,n){var r=n instanceof ce?$t(n):new ce(n);if(r.g!="")t&&(r.g=t+"."+r.g),ur(r,r.m);else{var s=R.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new ce(null);r&&lr(i,r),t&&(i.g=t),s&&ur(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&B(r,n,t),B(r,"VER",e.ra),Fn(e,r),r}function Ql(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new z(new Fr({ob:n})):new z(e.va),t.Oa(e.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Yl(){}v=Yl.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function hr(){if(Le&&!(10<=Number(ud)))throw Error("Environmental error: no available transport.")}hr.prototype.g=function(e,t){return new mt(e,t)};function mt(e,t){Y.call(this),this.g=new Bl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!_n(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_n(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xe(this)}X(mt,Y);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ct(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Wl(e,null,e.Y),qr(e)};mt.prototype.close=function(){wi(this.g)};mt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=di(e),e=n);t.j.push(new Ud(t.fb++,e)),t.H==3&&qr(t)};mt.prototype.N=function(){this.g.h=null,delete this.j,wi(this.g),delete this.g,mt.$.N.call(this)};function Xl(e){_i.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}X(Xl,_i);function Jl(){yi.call(this),this.status=1}X(Jl,yi);function Xe(e){this.g=e}X(Xe,Yl);Xe.prototype.Ba=function(){et(this.g,"a")};Xe.prototype.Aa=function(e){et(this.g,new Xl(e))};Xe.prototype.za=function(e){et(this.g,new Jl)};Xe.prototype.ya=function(){et(this.g,"b")};function Xd(){this.blockSize=-1}function At(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}X(At,Xd);At.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cs(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}At.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)cs(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){cs(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){cs(this,r),s=0;break}}this.h=s,this.i+=t};At.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function x(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Jd={};function Ri(e){return-128<=e&&128>e?od(e,function(t){return new x([t|0],0>t?-1:0)}):new x([e|0],0>e?-1:0)}function Vt(e){if(isNaN(e)||!isFinite(e))return Se;if(0>e)return Z(Vt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Os;return new x(t,0)}function Zl(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Z(Zl(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vt(Math.pow(t,8)),r=Se,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=Vt(Math.pow(t,i)),r=r.R(i).add(Vt(o))):(r=r.R(n),r=r.add(Vt(o)))}return r}var Os=4294967296,Se=Ri(0),xs=Ri(1),Vo=Ri(16777216);v=x.prototype;v.ea=function(){if(gt(this))return-Z(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Os+r)*t,t*=Os}return e};v.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Bt(this))return"0";if(gt(this))return"-"+Z(this).toString(e);for(var t=Vt(Math.pow(e,6)),n=this,r="";;){var s=fr(n,t).g;n=dr(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Bt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};v.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Bt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function gt(e){return e.h==-1}v.X=function(e){return e=dr(this,e),gt(e)?-1:Bt(e)?0:1};function Z(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new x(n,~e.h).add(xs)}v.abs=function(){return gt(this)?Z(this):this};v.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new x(n,n[n.length-1]&-2147483648?-1:0)};function dr(e,t){return e.add(Z(t))}v.R=function(e){if(Bt(this)||Bt(e))return Se;if(gt(this))return gt(e)?Z(this).R(Z(e)):Z(Z(this).R(e));if(gt(e))return Z(this.R(Z(e)));if(0>this.X(Vo)&&0>e.X(Vo))return Vt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,Qn(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Qn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Qn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Qn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new x(n,0)};function Qn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rn(e,t){this.g=e,this.h=t}function fr(e,t){if(Bt(t))throw Error("division by zero");if(Bt(e))return new rn(Se,Se);if(gt(e))return t=fr(Z(e),t),new rn(Z(t.g),Z(t.h));if(gt(t))return t=fr(e,Z(t)),new rn(Z(t.g),t.h);if(30<e.g.length){if(gt(e)||gt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=xs,r=t;0>=r.X(e);)n=Do(n),r=Do(r);var s=Te(n,1),i=Te(r,1);for(r=Te(r,2),n=Te(n,2);!Bt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Te(r,1),n=Te(n,1)}return t=dr(e,s.R(t)),new rn(s,t)}for(s=Se;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Vt(n),o=i.R(t);gt(o)||0<o.X(e);)n-=r,i=Vt(n),o=i.R(t);Bt(i)&&(i=xs),s=s.add(i),e=dr(e,o)}return new rn(s,e)}v.gb=function(e){return fr(this,e).h};v.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new x(n,this.h&e.h)};v.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new x(n,this.h|e.h)};v.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new x(n,this.h^e.h)};function Do(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new x(n,e.h)}function Te(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new x(s,e.h)}hr.prototype.createWebChannel=hr.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;Or.NO_ERROR=0;Or.TIMEOUT=8;Or.HTTP_ERROR=6;pl.COMPLETE="complete";_l.EventType=On;On.OPEN="a";On.CLOSE="b";On.ERROR="c";On.MESSAGE="d";Y.prototype.listen=Y.prototype.O;z.prototype.listenOnce=z.prototype.P;z.prototype.getLastError=z.prototype.Sa;z.prototype.getLastErrorCode=z.prototype.Ia;z.prototype.getStatus=z.prototype.da;z.prototype.getResponseJson=z.prototype.Wa;z.prototype.getResponseText=z.prototype.ja;z.prototype.send=z.prototype.ha;z.prototype.setWithCredentials=z.prototype.Oa;At.prototype.digest=At.prototype.l;At.prototype.reset=At.prototype.reset;At.prototype.update=At.prototype.j;x.prototype.add=x.prototype.add;x.prototype.multiply=x.prototype.R;x.prototype.modulo=x.prototype.gb;x.prototype.compare=x.prototype.X;x.prototype.toNumber=x.prototype.ea;x.prototype.toString=x.prototype.toString;x.prototype.getBits=x.prototype.D;x.fromNumber=Vt;x.fromString=Zl;var Zd=function(){return new hr},tf=function(){return Nr()},hs=Or,ef=pl,nf=_e,ko={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Yn=_l,rf=z,sf=At,Pe=x;const No="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Je="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new za("@firebase/firestore");function sn(){return me.logLevel}function E(e,...t){if(me.logLevel<=N.DEBUG){const n=t.map(Si);me.debug(`Firestore (${Je}): ${e}`,...n)}}function Ot(e,...t){if(me.logLevel<=N.ERROR){const n=t.map(Si);me.error(`Firestore (${Je}): ${e}`,...n)}}function Me(e,...t){if(me.logLevel<=N.WARN){const n=t.map(Si);me.warn(`Firestore (${Je}): ${e}`,...n)}}function Si(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e="Unexpected state"){const t=`FIRESTORE (${Je}) INTERNAL ASSERTION FAILED: `+e;throw Ot(t),new Error(t)}function U(e,t){e||S()}function b(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends te{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class of{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class af{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lf{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new st(t)}}class uf{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cf{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new uf(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class df{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(U(typeof n.token=="string"),this.R=n.token,new hf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ff(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function O(e,t){return e<t?-1:e>t?1:0}function Fe(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return W.fromMillis(Date.now())}static fromDate(t){return W.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new W(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new W(0,0))}static max(){return new C(new W(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n,r){n===void 0?n=0:n>t.length&&S(),r===void 0?r=t.length-n:r>t.length-n&&S(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Rn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Rn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class q extends Rn{construct(t,n,r){return new q(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new q(n)}static emptyPath(){return new q([])}}const mf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Rn{construct(t,n,r){return new tt(t,n,r)}static isValidIdentifier(t){return mf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new w(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new w(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new w(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(q.fromString(t))}static fromName(t){return new I(q.fromString(t).popFirst(5))}static empty(){return new I(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return q.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new q(t.slice()))}}function gf(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=C.fromTimestamp(r===1e9?new W(n+1,0):new W(n,r));return new Xt(s,I.empty(),t)}function pf(e){return new Xt(e.readTime,e.key,-1)}class Xt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Xt(C.min(),I.empty(),-1)}static max(){return new Xt(C.max(),I.empty(),-1)}}function _f(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=I.comparator(e.documentKey,t.documentKey),n!==0?n:O(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ef{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==yf)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new g((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,n){return new g((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new jt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new hn(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Ci(r.target.error);this.V.reject(new hn(t,s))}}static open(t,n,r,s){try{return new Pi(n,t.transaction(s,r))}catch(i){throw new hn(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(E("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Tf(n)}}class ae{constructor(t,n,r){this.name=t,this.version=n,this.p=r,ae.S(or())===12.2&&Ot("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return E("SimpleDb","Removing database:",t),se(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!qa())return!1;if(ae.C())return!0;const t=or(),n=ae.S(t),r=0<n&&n<10,s=ae.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(E("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new hn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new w(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new w(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hn(t,o))},s.onupgradeneeded=i=>{E("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{E("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Pi.open(this.db,t,i?"readonly":"readwrite",r),l=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),g.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(E("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class vf{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return se(this.k.delete())}}class hn extends w{constructor(t,n){super(p.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Bn(e){return e.name==="IndexedDbTransactionError"}class Tf{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(E("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(E("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),se(r)}add(t){return E("SimpleDb","ADD",this.store.name,t,t),se(this.store.add(t))}get(t){return se(this.store.get(t)).next(n=>(n===void 0&&(n=null),E("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return E("SimpleDb","DELETE",this.store.name,t),se(this.store.delete(t))}count(){return E("SimpleDb","COUNT",this.store.name),se(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new g((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new g((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){E("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new g((r,s)=>{n.onerror=i=>{const o=Ci(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new g((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new vf(a),u=n(a.primaryKey,a.value,l);if(u instanceof g){const c=u.catch(h=>(l.done(),g.reject(h)));r.push(c)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>g.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function se(e){return new g((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=Ci(r.target.error);n(s)}})}let Oo=!1;function Ci(e){const t=ae.S(or());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Oo||(Oo=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}bi._e=-1;function $r(e){return e==null}function mr(e){return e===0&&1/e==-1/0}function wf(e){return typeof e=="number"&&Number.isInteger(e)&&!mr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ze(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xn(this.root,t,this.comparator,!0)}}class Xn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??J.RED,this.left=s??J.EMPTY,this.right=i??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new J(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return J.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,n,r,s,i){return this}insert(t,n,r){return new J(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lo(this.data.getIterator())}getIteratorFrom(t){return new Lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new nt(this.comparator);return n.data=t,n}}class Lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new wt([])}unionWith(t){let n=new nt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ru("Invalid base64 string: "+i):i}}(t);return new ut(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ut(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const If=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(e){if(U(!!e),typeof e=="string"){let t=0;const n=If.exec(e);if(U(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:H(e.seconds),nanos:H(e.nanos)}}function H(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ge(e){return typeof e=="string"?ut.fromBase64String(e):ut.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Di(e){const t=e.mapValue.fields.__previous_value__;return Vi(t)?Di(t):t}function Sn(e){const t=Jt(e.mapValue.fields.__local_write_time__.timestampValue);return new W(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t,n,r,s,i,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Pn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Vi(e)?4:Rf(e)?9007199254740991:10:S()}function xt(e,t){if(e===t)return!0;const n=pe(e);if(n!==pe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Sn(e).isEqual(Sn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jt(s.timestampValue),a=Jt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ge(s.bytesValue).isEqual(ge(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return H(s.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return H(s.integerValue)===H(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=H(s.doubleValue),a=H(i.doubleValue);return o===a?mr(o)===mr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Fe(e.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(xo(o)!==xo(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xt(o[l],a[l])))return!1;return!0}(e,t);default:return S()}}function Cn(e,t){return(e.values||[]).find(n=>xt(n,t))!==void 0}function Ue(e,t){if(e===t)return 0;const n=pe(e),r=pe(t);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=H(i.integerValue||i.doubleValue),l=H(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Mo(e.timestampValue,t.timestampValue);case 4:return Mo(Sn(e),Sn(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(i,o){const a=ge(i),l=ge(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=O(a[u],l[u]);if(c!==0)return c}return O(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=O(H(i.latitude),H(o.latitude));return a!==0?a:O(H(i.longitude),H(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ue(a[u],l[u]);if(c)return c}return O(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Jn.mapValue&&o===Jn.mapValue)return 0;if(i===Jn.mapValue)return 1;if(o===Jn.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=O(l[h],c[h]);if(d!==0)return d;const f=Ue(a[l[h]],u[c[h]]);if(f!==0)return f}return O(l.length,c.length)}(e.mapValue,t.mapValue);default:throw S()}}function Mo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return O(e,t);const n=Jt(e),r=Jt(t),s=O(n.seconds,r.seconds);return s!==0?s:O(n.nanos,r.nanos)}function Be(e){return Ls(e)}function Ls(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Jt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ge(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return I.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ls(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ls(n.fields[o])}`;return s+"}"}(e.mapValue):S()}function Ms(e){return!!e&&"integerValue"in e}function ki(e){return!!e&&"arrayValue"in e}function Fo(e){return!!e&&"nullValue"in e}function Uo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function er(e){return!!e&&"mapValue"in e}function dn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ze(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=dn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=dn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Rf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!er(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(n)}setAll(t){let n=tt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=dn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());er(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];er(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Ze(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new pt(dn(this.value))}}function su(e){const t=[];return Ze(e.fields,(n,r)=>{const s=new tt([n]);if(er(r)){const i=su(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new it(t,0,C.min(),C.min(),C.min(),pt.empty(),0)}static newFoundDocument(t,n,r,s){return new it(t,1,n,C.min(),r,s,0)}static newNoDocument(t,n){return new it(t,2,n,C.min(),C.min(),pt.empty(),0)}static newUnknownDocument(t,n){return new it(t,3,n,C.min(),C.min(),pt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n){this.position=t,this.inclusive=n}}function Bo(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),n.key):r=Ue(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!xt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,n="asc"){this.field=t,this.dir=n}}function Sf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{}class G extends iu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Cf(t,n,r):n==="array-contains"?new Df(t,r):n==="in"?new kf(t,r):n==="not-in"?new Nf(t,r):n==="array-contains-any"?new Of(t,r):new G(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new bf(t,r):new Vf(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ue(n,this.value)):n!==null&&pe(this.value)===pe(n)&&this.matchesComparison(Ue(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends iu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Lt(t,n)}matches(t){return ou(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ou(e){return e.op==="and"}function au(e){return Pf(e)&&ou(e)}function Pf(e){for(const t of e.filters)if(t instanceof Lt)return!1;return!0}function Fs(e){if(e instanceof G)return e.field.canonicalString()+e.op.toString()+Be(e.value);if(au(e))return e.filters.map(t=>Fs(t)).join(",");{const t=e.filters.map(n=>Fs(n)).join(",");return`${e.op}(${t})`}}function lu(e,t){return e instanceof G?function(r,s){return s instanceof G&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)}(e,t):e instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&lu(o,s.filters[a]),!0):!1}(e,t):void S()}function uu(e){return e instanceof G?function(n){return`${n.field.canonicalString()} ${n.op} ${Be(n.value)}`}(e):e instanceof Lt?function(n){return n.op.toString()+" {"+n.getFilters().map(uu).join(" ,")+"}"}(e):"Filter"}class Cf extends G{constructor(t,n,r){super(t,n,r),this.key=I.fromName(r.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.matchesComparison(n)}}class bf extends G{constructor(t,n){super(t,"in",n),this.keys=cu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Vf extends G{constructor(t,n){super(t,"not-in",n),this.keys=cu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function cu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>I.fromName(r.referenceValue))}class Df extends G{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ki(n)&&Cn(n.arrayValue,this.value)}}class kf extends G{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Cn(this.value.arrayValue,n)}}class Nf extends G{constructor(t,n){super(t,"not-in",n)}matches(t){if(Cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Cn(this.value.arrayValue,n)}}class Of extends G{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ki(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function qo(e,t=null,n=[],r=[],s=null,i=null,o=null){return new xf(e,t,n,r,s,i,o)}function Ni(e){const t=b(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Fs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$r(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Be(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Be(r)).join(",")),t.ce=n}return t.ce}function Oi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Sf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!lu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!jo(e.startAt,t.startAt)&&jo(e.endAt,t.endAt)}function Us(e){return I.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Lf(e,t,n,r,s,i,o,a){return new zr(e,t,n,r,s,i,o,a)}function xi(e){return new zr(e)}function $o(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Mf(e){return e.collectionGroup!==null}function fn(e){const t=b(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new pr(i,r))}),n.has(tt.keyField().canonicalString())||t.le.push(new pr(tt.keyField(),r))}return t.le}function kt(e){const t=b(e);return t.he||(t.he=Ff(t,fn(e))),t.he}function Ff(e,t){if(e.limitType==="F")return qo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pr(s.field,i)});const n=e.endAt?new gr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new gr(e.startAt.position,e.startAt.inclusive):null;return qo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Bs(e,t,n){return new zr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Kr(e,t){return Oi(kt(e),kt(t))&&e.limitType===t.limitType}function hu(e){return`${Ni(kt(e))}|lt:${e.limitType}`}function we(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>uu(s)).join(", ")}]`),$r(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Be(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Be(s)).join(",")),`Target(${r})`}(kt(e))}; limitType=${e.limitType})`}function Hr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):I.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of fn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Bo(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,fn(r),s)||r.endAt&&!function(o,a,l){const u=Bo(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,fn(r),s))}(e,t)}function Uf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function du(e){return(t,n)=>{let r=!1;for(const s of fn(e)){const i=Bf(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Bf(e,t,n){const r=e.field.isKeyField()?I.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ue(l,u):S()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ze(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return nu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new $(I.comparator);function zt(){return jf}const fu=new $(I.comparator);function ln(...e){let t=fu;for(const n of e)t=t.insert(n.key,n);return t}function mu(e){let t=fu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function le(){return mn()}function gu(){return mn()}function mn(){return new tn(e=>e.toString(),(e,t)=>e.isEqual(t))}const qf=new $(I.comparator),$f=new nt(I.comparator);function D(...e){let t=$f;for(const n of e)t=t.add(n);return t}const zf=new nt(O);function Kf(){return zf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mr(t)?"-0":t}}function _u(e){return{integerValue:""+e}}function Hf(e,t){return wf(t)?_u(t):pu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this._=void 0}}function Gf(e,t,n){return e instanceof _r?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vi(i)&&(i=Di(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof bn?Eu(e,t):e instanceof Vn?vu(e,t):function(s,i){const o=yu(s,i),a=zo(o)+zo(s.Ie);return Ms(o)&&Ms(s.Ie)?_u(a):pu(s.serializer,a)}(e,t)}function Wf(e,t,n){return e instanceof bn?Eu(e,t):e instanceof Vn?vu(e,t):n}function yu(e,t){return e instanceof yr?function(r){return Ms(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class _r extends Gr{}class bn extends Gr{constructor(t){super(),this.elements=t}}function Eu(e,t){const n=Tu(t);for(const r of e.elements)n.some(s=>xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vn extends Gr{constructor(t){super(),this.elements=t}}function vu(e,t){let n=Tu(t);for(const r of e.elements)n=n.filter(s=>!xt(s,r));return{arrayValue:{values:n}}}class yr extends Gr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function zo(e){return H(e.integerValue||e.doubleValue)}function Tu(e){return ki(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Qf(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof bn&&s instanceof bn||r instanceof Vn&&s instanceof Vn?Fe(r.elements,s.elements,xt):r instanceof yr&&s instanceof yr?xt(r.Ie,s.Ie):r instanceof _r&&s instanceof _r}(e.transform,t.transform)}class Yf{constructor(t,n){this.version=t,this.transformResults=n}}class qt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qt}static exists(t){return new qt(void 0,t)}static updateTime(t){return new qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Wr{}function wu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Au(e.key,qt.none()):new jn(e.key,e.data,qt.none());{const n=e.data,r=pt.empty();let s=new nt(tt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ye(e.key,r,new wt(s.toArray()),qt.none())}}function Xf(e,t,n){e instanceof jn?function(s,i,o){const a=s.value.clone(),l=Ho(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ye?function(s,i,o){if(!nr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ho(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Iu(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function gn(e,t,n,r){return e instanceof jn?function(i,o,a,l){if(!nr(i.precondition,o))return a;const u=i.value.clone(),c=Go(i.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ye?function(i,o,a,l){if(!nr(i.precondition,o))return a;const u=Go(i.fieldTransforms,l,o),c=o.data;return c.setAll(Iu(i)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return nr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Jf(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=yu(r.transform,s||null);i!=null&&(n===null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function Ko(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fe(r,s,(i,o)=>Qf(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class jn extends Wr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ye extends Wr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Iu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ho(e,t,n){const r=new Map;U(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Wf(o,a,n[s]))}return r}function Go(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Gf(i,o,t))}return r}class Au extends Wr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zf extends Wr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Xf(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=gn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=gn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=gu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=wu(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(C.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(n,r)=>Ko(n,r))&&Fe(this.baseMutations,t.baseMutations,(n,r)=>Ko(n,r))}}class Li{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){U(t.mutations.length===r.length);let s=function(){return qf}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Li(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K,k;function rm(e){switch(e){default:return S();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Ru(e){if(e===void 0)return Ot("GRPC error has no .code"),p.UNKNOWN;switch(e){case K.OK:return p.OK;case K.CANCELLED:return p.CANCELLED;case K.UNKNOWN:return p.UNKNOWN;case K.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case K.INTERNAL:return p.INTERNAL;case K.UNAVAILABLE:return p.UNAVAILABLE;case K.UNAUTHENTICATED:return p.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case K.NOT_FOUND:return p.NOT_FOUND;case K.ALREADY_EXISTS:return p.ALREADY_EXISTS;case K.PERMISSION_DENIED:return p.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case K.ABORTED:return p.ABORTED;case K.OUT_OF_RANGE:return p.OUT_OF_RANGE;case K.UNIMPLEMENTED:return p.UNIMPLEMENTED;case K.DATA_LOSS:return p.DATA_LOSS;default:return S()}}(k=K||(K={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Pe([4294967295,4294967295],0);function Wo(e){const t=sm().encode(e),n=new sf;return n.update(t),new Uint8Array(n.digest())}function Qo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Pe([n,r],0),new Pe([s,i],0)]}class Mi{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new un(`Invalid padding: ${n}`);if(r<0)throw new un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new un(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Pe.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(Pe.fromNumber(r)));return s.compare(im)===1&&(s=new Pe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Wo(t),[r,s]=Qo(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Mi(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Wo(t),[r,s]=Qo(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,qn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Qr(C.min(),s,new $(O),zt(),D())}}class qn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new qn(r,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Su{constructor(t,n){this.targetId=t,this.fe=n}}class Pu{constructor(t,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Yo{constructor(){this.ge=0,this.pe=Jo(),this.ye=ut.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=D(),n=D(),r=D();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:S()}}),new qn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Jo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,U(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class om{constructor(t){this.Be=t,this.ke=new Map,this.qe=zt(),this.Qe=Xo(),this.Ke=new $(O)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Us(i))if(r===0){const o=new I(i.path);this.We(n,o,it.newNoDocument(o,C.min()))}else U(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ge(r).toUint8Array()}catch(l){if(l instanceof ru)return Me("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Mi(o,s,i)}catch(l){return Me(l instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Us(a.target)){const l=new I(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,it.newNoDocument(l,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=D();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Qr(t,n,this.Ke,this.qe,r);return this.qe=zt(),this.Qe=Xo(),this.Ke=new $(O),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Yo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new nt(O),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new Yo),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function Xo(){return new $(I.comparator)}function Jo(){return new $(I.comparator)}const am={asc:"ASCENDING",desc:"DESCENDING"},lm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},um={and:"AND",or:"OR"};class cm{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function js(e,t){return e.useProto3Json||$r(t)?t:{value:t}}function Er(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function hm(e,t){return Er(e,t.toTimestamp())}function Nt(e){return U(!!e),C.fromTimestamp(function(n){const r=Jt(n);return new W(r.seconds,r.nanos)}(e))}function Fi(e,t){return qs(e,t).canonicalString()}function qs(e,t){const n=function(s){return new q(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function bu(e){const t=q.fromString(e);return U(Ou(t)),t}function $s(e,t){return Fi(e.databaseId,t.path)}function ds(e,t){const n=bu(t);if(n.get(1)!==e.databaseId.projectId)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new I(Du(n))}function Vu(e,t){return Fi(e.databaseId,t)}function dm(e){const t=bu(e);return t.length===4?q.emptyPath():Du(t)}function zs(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Du(e){return U(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Zo(e,t,n){return{name:$s(e,t),fields:n.value.mapValue.fields}}function fm(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(U(c===void 0||typeof c=="string"),ut.fromBase64String(c||"")):(U(c===void 0||c instanceof Buffer||c instanceof Uint8Array),ut.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?p.UNKNOWN:Ru(u.code);return new w(c,u.message||"")}(o);n=new Pu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ds(e,r.document.name),i=Nt(r.document.updateTime),o=r.document.createTime?Nt(r.document.createTime):C.min(),a=new pt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new rr(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ds(e,r.document),i=r.readTime?Nt(r.readTime):C.min(),o=it.newNoDocument(s,i),a=r.removedTargetIds||[];n=new rr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ds(e,r.document),i=r.removedTargetIds||[];n=new rr([],i,s,null)}else{if(!("filter"in t))return S();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nm(s,i),a=r.targetId;n=new Su(a,o)}}return n}function mm(e,t){let n;if(t instanceof jn)n={update:Zo(e,t.key,t.value)};else if(t instanceof Au)n={delete:$s(e,t.key)};else if(t instanceof ye)n={update:Zo(e,t.key,t.data),updateMask:Im(t.fieldMask)};else{if(!(t instanceof Zf))return S();n={verify:$s(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof _r)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw S()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(e,t.precondition)),n}function gm(e,t){return e&&e.length>0?(U(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Nt(s.updateTime):Nt(i);return o.isEqual(C.min())&&(o=Nt(i)),new Yf(o,s.transformResults||[])}(n,t))):[]}function pm(e,t){return{documents:[Vu(e,t.path)]}}function _m(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Vu(e,s);const i=function(u){if(u.length!==0)return Nu(Lt.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Ie(d.field),direction:vm(d.dir)}}(c))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=js(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:n,parent:s}}function ym(e){let t=dm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){U(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=function(h){const d=ku(h);return d instanceof Lt&&au(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new pr(Ae(_.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,$r(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new gr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new gr(f,d)}(n.endAt)),Lf(t,s,o,i,a,"F",l,u)}function Em(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ku(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ae(n.unaryFilter.field);return G.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ae(n.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ae(n.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ae(n.unaryFilter.field);return G.create(o,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(n){return G.create(Ae(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Lt.create(n.compositeFilter.filters.map(r=>ku(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return S()}}(n.compositeFilter.op))}(e):S()}function vm(e){return am[e]}function Tm(e){return lm[e]}function wm(e){return um[e]}function Ie(e){return{fieldPath:e.canonicalString()}}function Ae(e){return tt.fromServerFormat(e.fieldPath)}function Nu(e){return e instanceof G?function(n){if(n.op==="=="){if(Uo(n.value))return{unaryFilter:{field:Ie(n.field),op:"IS_NAN"}};if(Fo(n.value))return{unaryFilter:{field:Ie(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uo(n.value))return{unaryFilter:{field:Ie(n.field),op:"IS_NOT_NAN"}};if(Fo(n.value))return{unaryFilter:{field:Ie(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(n.field),op:Tm(n.op),value:n.value}}}(e):e instanceof Lt?function(n){const r=n.getFilters().map(s=>Nu(s));return r.length===1?r[0]:{compositeFilter:{op:wm(n.op),filters:r}}}(e):S()}function Im(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ou(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,n,r,s,i=C.min(),o=C.min(),a=ut.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.ct=t}}function Rm(e){const t=ym({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Bs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this._n=new Pm}addToCollectionParentIndex(t,n){return this._n.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Xt.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Pm{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new nt(q.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new nt(q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new je(0)}static Ln(){return new je(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.changes=new tn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&gn(r.mutation,s,wt.empty(),W.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,D()).next(()=>r))}getLocalViewOfDocuments(t,n,r=D()){const s=le();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=ln();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=le();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,D()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=zt();const o=mn(),a=function(){return mn()}();return n.forEach((l,u)=>{const c=r.get(u.key);s.has(u.key)&&(c===void 0||c.mutation instanceof ye)?i=i.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),gn(c.mutation,u,c.mutation.getFieldMask(),W.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new bm(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=mn();let s=new $((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||wt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(s.get(a.batchId)||D()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=gu();c.forEach(d=>{if(!i.has(d)){const f=wu(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return I.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Mf(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):g.resolve(le());let a=-1,l=i;return o.next(u=>g.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?g.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,l,u,D())).next(c=>({batchId:a,changes:mu(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new I(n)).next(r=>{let s=ln();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=ln();return this.indexManager.getCollectionParents(t,i).next(a=>g.forEach(a,l=>{const u=function(h,d){return new zr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,it.newInvalidDocument(c)))});let a=ln();return o.forEach((l,u)=>{const c=i.get(l);c!==void 0&&gn(c.mutation,u,wt.empty(),W.now()),Hr(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return g.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Rm(s.bundledQuery),readTime:Nt(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.overlays=new $(I.comparator),this.hr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=le();return g.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const s=le(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return g.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new $((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=le(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=le(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return g.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new em(n,r));let i=this.hr.get(n);i===void 0&&(i=D(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.Pr=new nt(Q.Ir),this.Tr=new nt(Q.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Q(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Q(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new I(new q([])),r=new Q(n,t),s=new Q(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new I(new q([])),r=new Q(n,t),s=new Q(n,t+1);let i=D();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Q(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Q{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return I.comparator(t.key,n.key)||O(t.pr,n.pr)}static Er(t,n){return O(t.pr,n.pr)||I.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new nt(Q.Ir)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tm(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Q(n,0),s=new Q(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new nt(O);return n.forEach(s=>{const i=new Q(s,0),o=new Q(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),g.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new Q(new I(i),0);let a=new nt(O);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.pr)),!0)},o),g.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){U(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return g.forEach(n.mutations,s=>{const i=new Q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Q(n,0),s=this.wr.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t){this.vr=t,this.docs=function(){return new $(I.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(t,n){let r=zt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=zt();const o=n.path,a=new I(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_f(pf(c),r)<=0||(s.has(c.key)||Hr(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,r,s){S()}Fr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new xm(this)}getSize(t){return g.resolve(this.size)}}class xm extends Cm{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t){this.persistence=t,this.Mr=new tn(n=>Ni(n),Oi),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ui,this.targetCount=0,this.Lr=je.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),g.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new je(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.qn(n),g.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,n){this.Br={},this.overlays={},this.kr=new bi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Lm(this),this.indexManager=new Sm,this.remoteDocumentCache=function(s){return new Om(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Am(n),this.$r=new Dm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new km,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Nm(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){E("MemoryPersistence","Starting transaction:",t);const s=new Fm(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return g.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Fm extends Ef{constructor(t){super(),this.currentSequenceNumber=t}}class Bi{constructor(t){this.persistence=t,this.zr=new Ui,this.jr=null}static Hr(t){return new Bi(t)}get Jr(){if(this.jr)return this.jr;throw S()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Jr,r=>{const s=I.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,C.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return g.or([()=>g.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=D(),s=D();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ji(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return $c()?8:ae.v(or())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Um;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(sn()<=N.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",we(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),g.resolve()):(sn()<=N.DEBUG&&E("QueryEngine","Query:",we(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(sn()<=N.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",we(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(n))):g.resolve())}ji(t,n){if($o(n))return g.resolve(null);let r=kt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bs(n,null,"F"),r=kt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=D(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(t,Bs(n,null,"F")):this.es(t,u,n,l)}))})))}Hi(t,n,r,s){return $o(n)||s.isEqual(C.min())?g.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?g.resolve(null):(sn()<=N.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),we(n)),this.es(t,o,n,gf(s,-1)).next(a=>a))})}Zi(t,n){let r=new nt(du(t));return n.forEach((s,i)=>{Hr(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return sn()<=N.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",we(n)),this.zi.getDocumentsMatchingQuery(t,n,Xt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new $(O),this.rs=new tn(i=>Ni(i),Oi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vm(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function qm(e,t,n,r){return new jm(e,t,n,r)}async function xu(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=D();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function $m(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(_=>{f=f.next(()=>c.getEntry(l,_)).next(T=>{const m=u.docVersions.get(_);U(m!==null),T.version.compareTo(m)<0&&(h.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),c.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=D();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Lu(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function zm(e,t){const n=b(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((c,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,c.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ut.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),s=s.insert(h,f),function(T,m,y){return T.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,c)&&a.push(n.Qr.updateTargetData(i,f))});let l=zt(),u=D();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Km(i,o,t.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(C.min())){const c=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function Km(e,t,n){let r=D(),s=D();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=zt();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(C.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function Hm(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Gm(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,g.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Kt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Ks(e,t,n){const r=b(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Bn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function ta(e,t,n){const r=b(e);let s=C.min(),i=D();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=b(l),d=h.rs.get(c);return d!==void 0?g.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,kt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:C.min(),n?i:D())).next(a=>(Wm(r,Uf(t),a),{documents:a,hs:i})))}function Wm(e,t,n){let r=e.ss.get(t)||C.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class ea{constructor(){this.activeTargetIds=Kf()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qm{constructor(){this.no=new ea,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ea,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn=null;function fs(){return Zn===null?Zn=function(){return 268435456+Math.round(2147483648*Math.random())}():Zn++,"0x"+Zn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class Zm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=fs(),l=this.bo(n,r.toUriEncodedString());E("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(n,l,u,s).then(c=>(E("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Me("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",s),c})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Je}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Xm[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=fs();return new Promise((o,a)=>{const l=new rf;l.setWithCredentials(!0),l.listenOnce(ef.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hs.NO_ERROR:const c=l.getResponseJson();E(rt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case hs.TIMEOUT:E(rt,`RPC '${t}' ${i} timed out`),a(new w(p.DEADLINE_EXCEEDED,"Request time out"));break;case hs.HTTP_ERROR:const h=l.getStatus();if(E(rt,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(y)>=0?y:p.UNKNOWN}(f.status);a(new w(_,f.message))}else a(new w(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new w(p.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{E(rt,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);E(rt,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Fo(t,n,r){const s=fs(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Zd(),a=tf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");E(rt,`Creating RPC '${t}' stream ${s}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const _=new Jm({lo:m=>{f?E(rt,`Not sending because RPC '${t}' stream ${s} is closed:`,m):(d||(E(rt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),E(rt,`RPC '${t}' stream ${s} sending:`,m),h.send(m))},ho:()=>h.close()}),T=(m,y,A)=>{m.listen(y,F=>{try{A(F)}catch(j){setTimeout(()=>{throw j},0)}})};return T(h,Yn.EventType.OPEN,()=>{f||E(rt,`RPC '${t}' stream ${s} transport opened.`)}),T(h,Yn.EventType.CLOSE,()=>{f||(f=!0,E(rt,`RPC '${t}' stream ${s} transport closed`),_.Vo())}),T(h,Yn.EventType.ERROR,m=>{f||(f=!0,Me(rt,`RPC '${t}' stream ${s} transport errored:`,m),_.Vo(new w(p.UNAVAILABLE,"The operation could not be completed")))}),T(h,Yn.EventType.MESSAGE,m=>{var y;if(!f){const A=m.data[0];U(!!A);const F=A,j=F.error||((y=F[0])===null||y===void 0?void 0:y.error);if(j){E(rt,`RPC '${t}' stream ${s} received error:`,j);const Ut=j.status;let Rt=function(vc){const so=K[vc];if(so!==void 0)return Ru(so)}(Ut),ve=j.message;Rt===void 0&&(Rt=p.INTERNAL,ve="Unknown error status: "+Ut+" with message "+j.message),f=!0,_.Vo(new w(Rt,ve)),h.close()}else E(rt,`RPC '${t}' stream ${s} received:`,A),_.mo(A)}}),T(a,nf.STAT_EVENT,m=>{m.stat===ko.PROXY?E(rt,`RPC '${t}' stream ${s} detected buffering proxy`):m.stat===ko.NOPROXY&&E(rt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function ms(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){return new cm(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&E("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,r,s,i,o,a,l){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Mu(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Ot(n.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new w(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tg extends Fu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=fm(this.serializer,t),r=function(i){if(!("targetChange"in i))return C.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?C.min():o.readTime?Nt(o.readTime):C.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=zs(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Us(l)?{documents:pm(i,l)}:{query:_m(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Cu(i,o.resumeToken);const u=js(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(C.min())>0){a.readTime=Er(i,o.snapshotVersion.toTimestamp());const u=js(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Em(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=zs(this.serializer),n.removeTarget=t,this.t_(n)}}class eg extends Fu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(U(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=gm(t.writeResults,t.commitTime),r=Nt(t.commitTime);return this.listener.T_(r,n)}return U(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=zs(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>mm(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,qs(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(p.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,qs(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new w(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class rg{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ot(n),this.g_=!1):E("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ee(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=b(l);u.v_.add(4),await $n(u),u.x_.set("Unknown"),u.v_.delete(4),await Xr(u)}(this))})}),this.x_=new rg(r,s)}}async function Xr(e){if(Ee(e))for(const t of e.F_)await t(!0)}async function $n(e){for(const t of e.F_)await t(!1)}function Uu(e,t){const n=b(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Ki(n)?zi(n):en(n).Jo()&&$i(n,t))}function qi(e,t){const n=b(e),r=en(n);n.C_.delete(t),r.Jo()&&Bu(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Ee(n)&&n.x_.set("Unknown"))}function $i(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(C.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}en(e).c_(t)}function Bu(e,t){e.O_.Oe(t),en(e).l_(t)}function zi(e){e.O_=new om({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),en(e).start(),e.x_.p_()}function Ki(e){return Ee(e)&&!en(e).Ho()&&e.C_.size>0}function Ee(e){return b(e).v_.size===0}function ju(e){e.O_=void 0}async function ig(e){e.C_.forEach((t,n)=>{$i(e,t)})}async function og(e,t){ju(e),Ki(e)?(e.x_.S_(t),zi(e)):e.x_.set("Unknown")}async function ag(e,t,n){if(e.x_.set("Online"),t instanceof Pu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await vr(e,r)}else if(t instanceof rr?e.O_.$e(t):t instanceof Su?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(C.min()))try{const r=await Lu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=i.C_.get(u);c&&i.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=i.C_.get(l);if(!c)return;i.C_.set(l,c.withResumeToken(ut.EMPTY_BYTE_STRING,c.snapshotVersion)),Bu(i,l);const h=new Kt(c.target,l,u,c.sequenceNumber);$i(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await vr(e,r)}}async function vr(e,t,n){if(!Bn(t))throw t;e.v_.add(1),await $n(e),e.x_.set("Offline"),n||(n=()=>Lu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Xr(e)})}function qu(e,t){return t().catch(n=>vr(e,n,t))}async function Jr(e){const t=b(e),n=Zt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;lg(t);)try{const s=await Hm(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,ug(t,s)}catch(s){await vr(t,s)}$u(t)&&zu(t)}function lg(e){return Ee(e)&&e.D_.length<10}function ug(e,t){e.D_.push(t);const n=Zt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function $u(e){return Ee(e)&&!Zt(e).Ho()&&e.D_.length>0}function zu(e){Zt(e).start()}async function cg(e){Zt(e).d_()}async function hg(e){const t=Zt(e);for(const n of e.D_)t.I_(n.mutations)}async function dg(e,t,n){const r=e.D_.shift(),s=Li.from(r,t,n);await qu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Jr(e)}async function fg(e,t){t&&Zt(e).P_&&await async function(r,s){if(function(o){return rm(o)&&o!==p.ABORTED}(s.code)){const i=r.D_.shift();Zt(r).Zo(),await qu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jr(r)}}(e,t),$u(e)&&zu(e)}async function ra(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=Ee(n);n.v_.add(3),await $n(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Xr(n)}async function mg(e,t){const n=b(e);t?(n.v_.delete(2),await Xr(n)):t||(n.v_.add(2),await $n(n),n.x_.set("Unknown"))}function en(e){return e.N_||(e.N_=function(n,r,s){const i=b(n);return i.R_(),new tg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:ig.bind(null,e),To:og.bind(null,e),u_:ag.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Ki(e)?zi(e):e.x_.set("Unknown")):(await e.N_.stop(),ju(e))})),e.N_}function Zt(e){return e.L_||(e.L_=function(n,r,s){const i=b(n);return i.R_(),new eg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:cg.bind(null,e),To:fg.bind(null,e),E_:hg.bind(null,e),T_:dg.bind(null,e)}),e.F_.push(async t=>{t?(e.L_.Zo(),await Jr(e)):(await e.L_.stop(),e.D_.length>0&&(E("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Hi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gi(e,t){if(Ot("AsyncQueue",`${t}: ${e}`),Bn(e))return new w(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t?(n,r)=>t(n,r)||I.comparator(n.key,r.key):(n,r)=>I.comparator(n.key,r.key),this.keyedMap=ln(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new Ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.B_=new $(I.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):S():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class qe{constructor(t,n,r,s,i,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qe(t,n,Ce.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class pg{constructor(){this.queries=new tn(t=>hu(t),Kr),this.onlineState="Unknown",this.W_=new Set}}async function _g(e,t){const n=b(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new gg,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Gi(o,`Initialization of query '${we(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&Wi(n)}async function yg(e,t){const n=b(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Eg(e,t){const n=b(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Wi(n)}function vg(e,t,n){const r=b(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Wi(e){e.W_.forEach(t=>{t.next()})}var Hs,ia;(ia=Hs||(Hs={})).j_="default",ia.Cache="cache";class Tg{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Hs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){this.key=t}}class Hu{constructor(t){this.key=t}}class wg{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=D(),this.mutatedKeys=D(),this.ha=du(t),this.Pa=new Ce(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new sa,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,h)=>{const d=s.get(c),f=Hr(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?_!==T&&(r.track({type:3,doc:f}),m=!0):this.da(d,f)||(r.track({type:2,doc:f}),m=!0,(l&&this.ha(f,l)>0||u&&this.ha(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),m=!0):d&&!f&&(r.track({type:1,doc:d}),m=!0,(l||u)&&(a=!0)),m&&(f?(o=o.add(f),i=T?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((c,h)=>function(f,_){const T=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return T(f)-T(_)}(c.type,h.type)||this.ha(c.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],l=this.la.size===0&&this.current&&!s?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new qe(this.query,t.Pa,i,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new sa,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=D(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Hu(r))}),this.la.forEach(r=>{t.has(r)||n.push(new Ku(r))}),n}fa(t){this.ua=t.hs,this.la=D();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return qe.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Ig{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ag{constructor(t){this.key=t,this.pa=!1}}class Rg{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new tn(a=>hu(a),Kr),this.Sa=new Map,this.ba=new Set,this.Da=new $(I.comparator),this.Ca=new Map,this.va=new Ui,this.Fa={},this.Ma=new Map,this.xa=je.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Sg(e,t,n=!0){const r=Ju(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Gu(r,t,n,!0),s}async function Pg(e,t){const n=Ju(e);await Gu(n,t,!0,!1)}async function Gu(e,t,n,r){const s=await Gm(e.localStore,kt(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await Cg(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&Uu(e.remoteStore,s),a}async function Cg(e,t,n,r,s){e.Na=(h,d,f)=>async function(T,m,y,A){let F=m.view.Ta(y);F.Xi&&(F=await ta(T.localStore,m.query,!1).then(({documents:ve})=>m.view.Ta(ve,F)));const j=A&&A.targetChanges.get(m.targetId),Ut=A&&A.targetMismatches.get(m.targetId)!=null,Rt=m.view.applyChanges(F,T.isPrimaryClient,j,Ut);return aa(T,m.targetId,Rt.Va),Rt.snapshot}(e,h,d,f);const i=await ta(e.localStore,t,!0),o=new wg(t,i.hs),a=o.Ta(i.documents),l=qn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,l);aa(e,n,u.Va);const c=new Ig(t,n,o);return e.wa.set(t,c),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),u.snapshot}async function bg(e,t,n){const r=b(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Kr(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ks(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qi(r.remoteStore,s.targetId),Gs(r,s.targetId)}).catch(Un)):(Gs(r,s.targetId),await Ks(r.localStore,s.targetId,!0))}async function Vg(e,t){const n=b(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qi(n.remoteStore,r.targetId))}async function Dg(e,t,n){const r=Fg(e);try{const s=await function(o,a){const l=b(o),u=W.now(),c=a.reduce((f,_)=>f.add(_.key),D());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=zt(),T=D();return l.os.getEntries(f,c).next(m=>{_=m,_.forEach((y,A)=>{A.isValidDocument()||(T=T.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,_)).next(m=>{h=m;const y=[];for(const A of a){const F=Jf(A,h.get(A.key).overlayedDocument);F!=null&&y.push(new ye(A.key,F,su(F.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,y,a)}).next(m=>{d=m;const y=m.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(f,m.batchId,y)})}).then(()=>({batchId:d.batchId,changes:mu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new $(O)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,s.batchId,n),await zn(r,s.changes),await Jr(r.remoteStore)}catch(s){const i=Gi(s,"Failed to persist write");n.reject(i)}}async function Wu(e,t){const n=b(e);try{const r=await zm(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?U(o.pa):s.removedDocuments.size>0&&(U(o.pa),o.pa=!1))}),await zn(n,r,t)}catch(r){await Un(r)}}function oa(e,t,n){const r=b(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=b(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.Q_)d.G_(a)&&(u=!0)}),u&&Wi(l)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kg(e,t,n){const r=b(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new $(I.comparator);o=o.insert(i,it.newNoDocument(i,C.min()));const a=D().add(i),l=new Qr(C.min(),new Map,new $(O),o,a);await Wu(r,l),r.Da=r.Da.remove(i),r.Ca.delete(t),Qi(r)}else await Ks(r.localStore,t,!1).then(()=>Gs(r,t,n)).catch(Un)}async function Ng(e,t){const n=b(e),r=t.batch.batchId;try{const s=await $m(n.localStore,t);Yu(n,r,null),Qu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zn(n,s)}catch(s){await Un(s)}}async function Og(e,t,n){const r=b(e);try{const s=await function(o,a){const l=b(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(U(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);Yu(r,t,n),Qu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zn(r,s)}catch(s){await Un(s)}}function Qu(e,t){(e.Ma.get(t)||[]).forEach(n=>{n.resolve()}),e.Ma.delete(t)}function Yu(e,t,n){const r=b(e);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Fa[r.currentUser.toKey()]=s}}function Gs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Xu(e,r)})}function Xu(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(qi(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Qi(e))}function aa(e,t,n){for(const r of n)r instanceof Ku?(e.va.addReference(r.key,t),xg(e,r)):r instanceof Hu?(E("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Xu(e,r.key)):S()}function xg(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(E("SyncEngine","New document in limbo: "+n),e.ba.add(r),Qi(e))}function Qi(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new I(q.fromString(t)),r=e.xa.next();e.Ca.set(r,new Ag(n)),e.Da=e.Da.insert(n,r),Uu(e.remoteStore,new Kt(kt(xi(n.path)),r,"TargetPurposeLimboResolution",bi._e))}}async function zn(e,t,n){const r=b(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const c=ji.Ki(l.targetId,u);i.push(c)}}))}),await Promise.all(o),r.ya.u_(s),await async function(l,u){const c=b(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.qi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.Qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Bn(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ns.get(d),_=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(d,T)}}}(r.localStore,i))}async function Lg(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const r=await xu(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(l=>{l.reject(new w(p.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(n,r.us)}}function Mg(e,t){const n=b(e),r=n.Ca.get(t);if(r&&r.pa)return D().add(r.key);{let s=D();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Ju(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kg.bind(null,t),t.ya.u_=Eg.bind(null,t.eventManager),t.ya.La=vg.bind(null,t.eventManager),t}function Fg(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ng.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Og.bind(null,t),t}class la{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Yr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return qm(this.persistence,new Bm,t.initialUser,this.serializer)}createPersistence(t){return new Mm(Bi.Hr,this.serializer)}createSharedClientState(t){return new Qm}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ug{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lg.bind(null,this.syncEngine),await mg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pg}()}createDatastore(t){const n=Yr(t.databaseInfo.databaseId),r=function(i){return new Zm(i)}(t.databaseInfo);return function(i,o,a,l){return new ng(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new sg(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>oa(this.syncEngine,n,0),function(){return na.D()?new na:new Ym}())}createSyncEngine(t,n){return function(s,i,o,a,l,u,c){const h=new Rg(s,i,o,a,l,u);return c&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=b(r);E("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await $n(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=eu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Gi(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function gs(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ua(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $g(e);E("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>ra(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>ra(t.remoteStore,s)),e._onlineComponents=t}function qg(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function $g(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await gs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!qg(n))throw n;Me("Error using user provided cache. Falling back to memory cache: "+n),await gs(e,new la)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await gs(e,new la);return e._offlineComponents}async function Zu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await ua(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await ua(e,new Ug))),e._onlineComponents}function zg(e){return Zu(e).then(t=>t.syncEngine)}async function Kg(e){const t=await Zu(e),n=t.eventManager;return n.onListen=Sg.bind(null,t.syncEngine),n.onUnlisten=bg.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Pg.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Vg.bind(null,t.syncEngine),n}function Hg(e,t,n={}){const r=new jt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const c=new Bg({next:d=>{o.enqueueAndForget(()=>yg(i,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new w(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new w(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Tg(xi(a.path),c,{includeMetadataChanges:!0,ta:!0});return _g(i,h)}(await Kg(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e,t,n){if(!n)throw new w(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gg(e,t,n,r){if(t===!0&&r===!0)throw new w(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ha(e){if(!I.isDocumentKey(e))throw new w(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function da(e){if(I.isDocumentKey(e))throw new w(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Yi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function Tr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yi(e);throw new w(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zr{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new of;switch(r.type){case"firstParty":return new cf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ca.get(n);r&&(E("ComponentProvider","Removing Datastore"),ca.delete(n),r.terminate())}(this),Promise.resolve()}}function Wg(e,t,n,r={}){var s;const i=(e=Tr(e,Zr))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=st.MOCK_USER;else{a=ja(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new w(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new st(u)}e._authCredentials=new af(new tu(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xi(this.firestore,t,this._query)}}class yt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class Wt extends Xi{constructor(t,n,r){super(t,n,xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new I(t))}withConverter(t){return new Wt(this.firestore,t,this._path)}}function Qg(e,t,...n){if(e=Yt(e),ec("collection","path",t),e instanceof Zr){const r=q.fromString(t,...n);return da(r),new Wt(e,null,r)}{if(!(e instanceof yt||e instanceof Wt))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return da(r),new Wt(e.firestore,null,r)}}function Ws(e,t,...n){if(e=Yt(e),arguments.length===1&&(t=eu.newId()),ec("doc","path",t),e instanceof Zr){const r=q.fromString(t,...n);return ha(r),new yt(e,null,new I(r))}{if(!(e instanceof yt||e instanceof Wt))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return ha(r),new yt(e.firestore,e instanceof Wt?e.converter:null,new I(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Mu(this,"async_queue_retry"),this.cu=()=>{const n=ms();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=ms();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=ms();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new jt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Bn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=Hi.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&S()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class Ji extends Zr{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Yg}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rc(this),this._firestoreClient.terminate()}}function Xg(e,t){const n=typeof e=="object"?e:ri(),r=typeof e=="string"?e:t||"(default)",s=ni(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ti("firestore");i&&Wg(s,...i)}return s}function nc(e){return e._firestoreClient||rc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function rc(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,u,c){return new Af(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,tc(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new jg(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $e(ut.fromBase64String(t))}catch(n){throw new w(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $e(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=/^__.*__$/;class Zg{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ye(t,this.data,this.fieldMask,n,this.fieldTransforms):new jn(t,this.data,n,this.fieldTransforms)}}function ic(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class eo{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new eo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.pu(t),s}yu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return wr(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(ic(this.Vu)&&Jg.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class tp{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Yr(t)}Cu(t,n,r,s=!1){return new eo({Vu:t,methodName:n,Du:r,path:tt.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ep(e){const t=e._freezeSettings(),n=Yr(e._databaseId);return new tp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function np(e,t,n,r,s,i={}){const o=e.Cu(i.merge||i.mergeFields?2:0,t,n,s);uc("Data must be an object, but it was:",o,r);const a=ac(r,o);let l,u;if(i.merge)l=new wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const d=rp(t,h,n);if(!o.contains(d))throw new w(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ip(c,d)||c.push(d)}l=new wt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Zg(new pt(a),l,u)}function oc(e,t){if(lc(e=Yt(e)))return uc("Unsupported field value:",t,e),ac(e,t);if(e instanceof sc)return function(r,s){if(!ic(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=oc(a,s.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=W.fromDate(r);return{timestampValue:Er(s.serializer,i)}}if(r instanceof W){const i=new W(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Er(s.serializer,i)}}if(r instanceof to)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $e)return{bytesValue:Cu(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fi(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Yi(r)}`)}(e,t)}function ac(e,t){const n={};return nu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ze(e,(r,s)=>{const i=oc(s,t.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof W||e instanceof to||e instanceof $e||e instanceof yt||e instanceof sc)}function uc(e,t,n){if(!lc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Yi(n);throw r==="an object"?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function rp(e,t,n){if((t=Yt(t))instanceof Zi)return t._internalPath;if(typeof t=="string")return cc(e,t);throw wr("Field path arguments must be of type string or ",e,!1,void 0,n)}const sp=new RegExp("[~\\*/\\[\\]]");function cc(e,t,n){if(t.search(sp)>=0)throw wr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zi(...t.split("."))._internalPath}catch{throw wr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function wr(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new w(p.INVALID_ARGUMENT,a+e+l)}function ip(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new op(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(dc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class op extends hc{data(){return super.data()}}function dc(e,t){return typeof t=="string"?cc(e,t):t instanceof Zi?t._internalPath:t._delegate._internalPath}class ap{convertValue(t,n="none"){switch(pe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return H(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ze(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new to(H(t.latitude),H(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Di(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sn(t));default:return null}}convertTimestamp(t){const n=Jt(t);return new W(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=q.fromString(t);U(Ou(r));const s=new Pn(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(n)||Ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fc extends hc{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new cp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(dc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cp extends fc{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e){e=Tr(e,yt);const t=Tr(e.firestore,Ji);return Hg(nc(t),e._key).then(n=>mp(t,e,n))}class hp extends ap{constructor(t){super(),this.firestore=t}convertBytes(t){return new $e(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function dp(e,t){const n=Tr(e.firestore,Ji),r=Ws(e),s=lp(e.converter,t);return fp(n,[np(ep(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function fp(e,t){return function(r,s){const i=new jt;return r.asyncQueue.enqueueAndForget(async()=>Dg(await zg(r),s,i)),i.promise}(nc(e),t)}function mp(e,t,n){const r=n.docs.get(t._key),s=new hp(e);return new fc(e,s,t._key,r,new up(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Je=s})(Ga),xe(new de("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ji(new lf(r.getProvider("auth-internal")),new df(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new w(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pn(u.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Dt(No,"4.6.0",t),Dt(No,"4.6.0","esm2017")})();function ga(e){let t,n;return{c(){t=be("desc"),n=We(e[7])},l(r){t=Ve(r,"desc",{});var s=ot(t);n=Qe(s,e[7]),s.forEach(P)},m(r,s){M(r,t,s),_t(t,n)},p(r,s){s&128&&Sr(n,r[7])},d(r){r&&P(t)}}}function pa(e){let t,n;return{c(){t=be("title"),n=We(e[6])},l(r){t=Ve(r,"title",{});var s=ot(t);n=Qe(s,e[6]),s.forEach(P)},m(r,s){M(r,t,s),_t(t,n)},p(r,s){s&64&&Sr(n,r[6])},d(r){r&&P(t)}}}function gp(e){let t,n,r,s=e[7]&&ga(e),i=e[6]&&pa(e);return{c(){t=be("svg"),s&&s.c(),n=Qt(),i&&i.c(),r=be("path"),this.h()},l(o){t=Ve(o,"svg",{viewBox:!0,width:!0,height:!0,class:!0,"aria-label":!0,"aria-hidden":!0});var a=ot(t);s&&s.l(a),n=Qt(),i&&i.l(a),r=Ve(a,"path",{d:!0,fill:!0}),ot(r).forEach(P),a.forEach(P),this.h()},h(){V(r,"d","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"),V(r,"fill",e[2]),V(t,"viewBox",e[3]),V(t,"width",e[0]),V(t,"height",e[1]),V(t,"class",e[8]),V(t,"aria-label",e[4]),V(t,"aria-hidden",e[5])},m(o,a){M(o,t,a),s&&s.m(t,null),_t(t,n),i&&i.m(t,null),_t(t,r)},p(o,[a]){o[7]?s?s.p(o,a):(s=ga(o),s.c(),s.m(t,n)):s&&(s.d(1),s=null),o[6]?i?i.p(o,a):(i=pa(o),i.c(),i.m(t,r)):i&&(i.d(1),i=null),a&4&&V(r,"fill",o[2]),a&8&&V(t,"viewBox",o[3]),a&1&&V(t,"width",o[0]),a&2&&V(t,"height",o[1]),a&256&&V(t,"class",o[8]),a&16&&V(t,"aria-label",o[4]),a&32&&V(t,"aria-hidden",o[5])},i:he,o:he,d(o){o&&P(t),s&&s.d(),i&&i.d()}}}function pp(e,t,n){let{size:r="1em"}=t,{width:s=r}=t,{height:i=r}=t,{color:o="currentColor"}=t,{viewBox:a="0 0 24 24"}=t,{ariaLabel:l=void 0}=t,{ariaHidden:u=void 0}=t,{title:c=void 0}=t,{desc:h=void 0}=t,{class:d=void 0}=t;return e.$$set=f=>{"size"in f&&n(9,r=f.size),"width"in f&&n(0,s=f.width),"height"in f&&n(1,i=f.height),"color"in f&&n(2,o=f.color),"viewBox"in f&&n(3,a=f.viewBox),"ariaLabel"in f&&n(4,l=f.ariaLabel),"ariaHidden"in f&&n(5,u=f.ariaHidden),"title"in f&&n(6,c=f.title),"desc"in f&&n(7,h=f.desc),"class"in f&&n(8,d=f.class)},[s,i,o,a,l,u,c,h,d,r]}class mc extends Ke{constructor(t){super(),He(this,t,pp,gp,Ge,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}get size(){return this.$$.ctx[9]}set size(t){this.$$set({size:t}),L()}get width(){return this.$$.ctx[0]}set width(t){this.$$set({width:t}),L()}get height(){return this.$$.ctx[1]}set height(t){this.$$set({height:t}),L()}get color(){return this.$$.ctx[2]}set color(t){this.$$set({color:t}),L()}get viewBox(){return this.$$.ctx[3]}set viewBox(t){this.$$set({viewBox:t}),L()}get ariaLabel(){return this.$$.ctx[4]}set ariaLabel(t){this.$$set({ariaLabel:t}),L()}get ariaHidden(){return this.$$.ctx[5]}set ariaHidden(t){this.$$set({ariaHidden:t}),L()}get title(){return this.$$.ctx[6]}set title(t){this.$$set({title:t}),L()}get desc(){return this.$$.ctx[7]}set desc(t){this.$$set({desc:t}),L()}get class(){return this.$$.ctx[8]}set class(t){this.$$set({class:t}),L()}}ze(mc,{size:{},width:{},height:{},color:{},viewBox:{},ariaLabel:{},ariaHidden:{},title:{},desc:{},class:{}},[],[],!0);function _p(e){function t(){e.dispatchEvent(new CustomEvent("click_outside",e))}function n(s){e&&!e.contains(s.target)&&!s.defaultPrevented&&t()}function r(s){s.key==="Escape"&&t()}return window.addEventListener("keydown",r,!0),document.addEventListener("mousedown",n,!0),{destroy(){document.removeEventListener("mousedown",n,!0),window.removeEventListener("keydown",r,!0)}}}function Ir(e,{delay:t=0,duration:n=400,easing:r=Tc}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:i=>`opacity: ${i*s}`}}function yp(e){Xs(e,"svelte-wpdv6r",".blurred-bg.svelte-wpdv6r{z-index:2;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.8);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.dialog.svelte-wpdv6r{z-index:10004;position:fixed;top:50%;left:50%;min-width:600px;max-height:90vh;transform:translate(-50%, -50%);display:flex;background-color:white;border-radius:1rem;box-shadow:0 3px 6px rgba(0, 0, 0, 0.16);overflow-y:auto}.dialog-content.svelte-wpdv6r{padding:0}.dialog-close.svelte-wpdv6r{position:absolute;top:-1rem;right:-1rem;background-color:white;border:1px solid red}.fullscreen.svelte-wpdv6r{top:0;left:0;width:100%;height:100%;border-radius:0;transform:translate(0)}.dialog-content.svelte-wpdv6r{width:100%;padding:3rem;overflow-y:auto}.dialog-close.svelte-wpdv6r{position:absolute;top:0.5rem;right:0.5rem;width:2.5rem;height:2.5rem;display:flex;justify-content:center;align-items:center;border:none;background-color:transparent;border-radius:50%;cursor:pointer;transition:0.25s}.dialog-close.svelte-wpdv6r:hover{background-color:rgba(0, 0, 0, 0.16)}.contentfull.svelte-wpdv6r{width:100%}.min-w-0.svelte-wpdv6r{min-width:unset}@media(max-width: 600px){.dialog-content.svelte-wpdv6r{width:100%;padding:1.5rem}.dialog.svelte-wpdv6r{width:80%;height:auto;max-height:90%;min-width:unset}img.svelte-wpdv6r{display:none}}")}function _a(e){let t,n,r,s,i,o,a,l,u,c,h,d=!e[3]&&ya(),f=e[1]&&Ea(e);const _=e[11].default,T=Ic(_,e,e[10],null);return a=new mc({props:{size:"24"}}),{c(){d&&d.c(),t=Et(),n=dt("div"),f&&f.c(),r=Et(),s=dt("div"),T&&T.c(),i=Et(),o=dt("button"),De(a.$$.fragment),this.h()},l(m){d&&d.l(m),t=vt(m),n=ft(m,"DIV",{class:!0});var y=ot(n);f&&f.l(y),r=vt(y),s=ft(y,"DIV",{class:!0});var A=ot(s);T&&T.l(A),A.forEach(P),i=vt(y),o=ft(y,"BUTTON",{type:!0,class:!0});var F=ot(o);ke(a.$$.fragment,F),F.forEach(P),y.forEach(P),this.h()},h(){V(s,"class","dialog-content svelte-wpdv6r"),Pt(s,"contentfull",e[4]),V(o,"type","button"),V(o,"class","dialog-close svelte-wpdv6r"),V(n,"class","dialog svelte-wpdv6r"),Pt(n,"fullscreen",e[3]),Pt(n,"min-w-0",e[5]),Pt(n,"button-outside",e[6])},m(m,y){d&&d.m(m,y),M(m,t,y),M(m,n,y),f&&f.m(n,null),_t(n,r),_t(n,s),T&&T.m(s,null),_t(n,i),_t(n,o),Ne(a,o,null),u=!0,c||(h=[ue(o,"click",e[7]),ba(_p.call(null,n)),ue(n,"click_outside",e[7])],c=!0)},p(m,y){m[3]?d&&(Va(),Tt(d,1,1,()=>{d=null}),Ca()):d?y&8&&ht(d,1):(d=ya(),d.c(),ht(d,1),d.m(t.parentNode,t)),m[1]?f?f.p(m,y):(f=Ea(m),f.c(),f.m(n,r)):f&&(f.d(1),f=null),T&&T.p&&(!u||y&1024)&&Ac(T,_,m,m[10],u?Sc(_,m[10],y,null):Rc(m[10]),null),(!u||y&16)&&Pt(s,"contentfull",m[4]),(!u||y&8)&&Pt(n,"fullscreen",m[3]),(!u||y&32)&&Pt(n,"min-w-0",m[5]),(!u||y&64)&&Pt(n,"button-outside",m[6])},i(m){u||(ht(d),ht(T,m),ht(a.$$.fragment,m),m&&Da(()=>{u&&(l||(l=sr(n,Ir,{duration:200},!0)),l.run(1))}),u=!0)},o(m){Tt(d),Tt(T,m),Tt(a.$$.fragment,m),m&&(l||(l=sr(n,Ir,{duration:200},!1)),l.run(0)),u=!1},d(m){m&&(P(t),P(n)),d&&d.d(m),f&&f.d(),T&&T.d(m),Oe(a),m&&l&&l.end(),c=!1,ka(h)}}}function ya(e){let t,n,r;return{c(){t=dt("div"),this.h()},l(s){t=ft(s,"DIV",{class:!0}),ot(t).forEach(P),this.h()},h(){V(t,"class","blurred-bg svelte-wpdv6r")},m(s,i){M(s,t,i),r=!0},i(s){r||(s&&Da(()=>{r&&(n||(n=sr(t,Ir,{duration:200},!0)),n.run(1))}),r=!0)},o(s){s&&(n||(n=sr(t,Ir,{duration:200},!1)),n.run(0)),r=!1},d(s){s&&P(t),s&&n&&n.end()}}}function Ea(e){let t,n;return{c(){t=dt("img"),this.h()},l(r){t=ft(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){io(t.src,n=e[1])||V(t,"src",n),V(t,"alt",e[2]),V(t,"class","svelte-wpdv6r")},m(r,s){M(r,t,s)},p(r,s){s&2&&!io(t.src,n=r[1])&&V(t,"src",n),s&4&&V(t,"alt",r[2])},d(r){r&&P(t)}}}function Ep(e){let t,n,r,s,i=e[0]&&_a(e);return{c(){i&&i.c(),t=Qt()},l(o){i&&i.l(o),t=Qt()},m(o,a){i&&i.m(o,a),M(o,t,a),n=!0,r||(s=ue(window,"keydown",e[8]),r=!0)},p(o,[a]){o[0]?i?(i.p(o,a),a&1&&ht(i,1)):(i=_a(o),i.c(),ht(i,1),i.m(t.parentNode,t)):i&&(Va(),Tt(i,1,1,()=>{i=null}),Ca())},i(o){n||(ht(i),n=!0)},o(o){Tt(i),n=!1},d(o){o&&P(t),i&&i.d(o),r=!1,s()}}}function vp(e,t,n){let{$$slots:r={},$$scope:s}=t,{showing:i=!1}=t,{showClose:o=!0}=t,{src:a=""}=t,{alt:l=""}=t,{fullScreen:u=!1}=t,{contentfull:c=!1}=t,{removeMinW:h=!1}=t,{buttonOutside:d=!1}=t;const f=wc();function _(){n(0,i=!1),f("closed")}function T(m){m.key==="Escape"&&o&&_()}return e.$$set=m=>{"showing"in m&&n(0,i=m.showing),"showClose"in m&&n(9,o=m.showClose),"src"in m&&n(1,a=m.src),"alt"in m&&n(2,l=m.alt),"fullScreen"in m&&n(3,u=m.fullScreen),"contentfull"in m&&n(4,c=m.contentfull),"removeMinW"in m&&n(5,h=m.removeMinW),"buttonOutside"in m&&n(6,d=m.buttonOutside),"$$scope"in m&&n(10,s=m.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&(i?document.documentElement.classList.add("scroll-disabled"):document.documentElement.classList.remove("scroll-disabled"))},[i,a,l,u,c,h,d,_,T,o,s,r]}class no extends Ke{constructor(t){super(),He(this,t,vp,Ep,Ge,{showing:0,showClose:9,src:1,alt:2,fullScreen:3,contentfull:4,removeMinW:5,buttonOutside:6},yp)}get showing(){return this.$$.ctx[0]}set showing(t){this.$$set({showing:t}),L()}get showClose(){return this.$$.ctx[9]}set showClose(t){this.$$set({showClose:t}),L()}get src(){return this.$$.ctx[1]}set src(t){this.$$set({src:t}),L()}get alt(){return this.$$.ctx[2]}set alt(t){this.$$set({alt:t}),L()}get fullScreen(){return this.$$.ctx[3]}set fullScreen(t){this.$$set({fullScreen:t}),L()}get contentfull(){return this.$$.ctx[4]}set contentfull(t){this.$$set({contentfull:t}),L()}get removeMinW(){return this.$$.ctx[5]}set removeMinW(t){this.$$set({removeMinW:t}),L()}get buttonOutside(){return this.$$.ctx[6]}set buttonOutside(t){this.$$set({buttonOutside:t}),L()}}ze(no,{showing:{type:"Boolean"},showClose:{type:"Boolean"},src:{},alt:{},fullScreen:{type:"Boolean"},contentfull:{type:"Boolean"},removeMinW:{type:"Boolean"},buttonOutside:{type:"Boolean"}},["default"],[],!0);var Tp="firebase",wp="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(Tp,wp,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="firebasestorage.googleapis.com",Ip="storageBucket",Ap=2*60*1e3,Rp=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends te{constructor(t,n,r=0){super(ps(t),`Firebase Storage: ${n} (${ps(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ft.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ps(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Mt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Mt||(Mt={}));function ps(e){return"storage/"+e}function Sp(){const e="An unknown error occurred, please check the error payload for server response.";return new Ft(Mt.UNKNOWN,e)}function Pp(){return new Ft(Mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Cp(){return new Ft(Mt.CANCELED,"User canceled the upload/download.")}function bp(e){return new Ft(Mt.INVALID_URL,"Invalid URL '"+e+"'.")}function Vp(e){return new Ft(Mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function va(e){return new Ft(Mt.INVALID_ARGUMENT,e)}function pc(){return new Ft(Mt.APP_DELETED,"The Firebase app was deleted.")}function Dp(e){return new Ft(Mt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=It.makeFromUrl(t,n)}catch{return new It(t,"")}if(r.path==="")return r;throw Vp(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},T=n===gc?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",y=new RegExp(`^https?://${T}/${s}/${m}`,"i"),F=[{regex:a,indices:l,postModify:i},{regex:f,indices:_,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<F.length;j++){const Ut=F[j],Rt=Ut.regex.exec(t);if(Rt){const ve=Rt[Ut.indices.bucket];let Kn=Rt[Ut.indices.path];Kn||(Kn=""),r=new It(ve,Kn),Ut.postModify(r);break}}if(r==null)throw bp(t);return r}}class kp{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...m){u||(u=!0,t.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,e(f,l())},m)}function d(){i&&clearTimeout(i)}function f(m,...y){if(u){d();return}if(m){d(),c.call(null,m,...y);return}if(l()||o){d(),c.call(null,m,...y);return}r<64&&(r*=2);let F;a===1?(a=2,F=0):F=(r+Math.random())*1e3,h(F)}let _=!1;function T(m){_||(_=!0,d(),!u&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function Op(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(e){return e!==void 0}function Ta(e,t,n,r){if(r<t)throw va(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw va(`Invalid value for '${e}'. Expected ${n} or less.`)}function Lp(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Ar||(Ar={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,n,r,s,i,o,a,l,u,c,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new tr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ar.NO_ERROR,l=i.getStatus();if(!a||Mp(l,this.additionalRetryCodes_)&&this.retry){const c=i.getErrorCode()===Ar.ABORT;r(!1,new tr(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new tr(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());xp(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Sp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?pc():Cp();o(l)}else{const l=Pp();o(l)}};this.canceled_?n(!1,new tr(!1,null,!0)):this.backoffId_=Np(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Op(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tr{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Up(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Bp(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function jp(e,t){t&&(e["X-Firebase-GMPID"]=t)}function qp(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function $p(e,t,n,r,s,i,o=!0){const a=Lp(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return jp(u,t),Up(u,n),Bp(u,i),qp(u,r),new Fp(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Kp(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,n){this._service=t,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Rr(t,n)}get root(){const t=new It(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kp(this._location.path)}get storage(){return this._service}get parent(){const t=zp(this._location.path);if(t===null)return null;const n=new It(this._location.bucket,t);return new Rr(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Dp(t)}}function wa(e,t){const n=t==null?void 0:t[Ip];return n==null?null:It.makeFromBucketSpec(n,e)}function Hp(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:ja(s,e.app.options.projectId))}class Gp{constructor(t,n,r,s,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=gc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ap,this._maxUploadRetryTime=Rp,this._requests=new Set,s!=null?this._bucket=It.makeFromBucketSpec(s,this._host):this._bucket=wa(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,t):this._bucket=wa(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ta("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ta("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Rr(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new kp(pc());{const o=$p(t,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const Ia="@firebase/storage",Aa="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="storage";function Wp(e=ri(),t){e=Yt(e);const r=ni(e,_c).getImmediate({identifier:t}),s=ti("storage");return s&&Qp(r,...s),r}function Qp(e,t,n,r={}){Hp(e,t,n,r)}function Yp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Gp(n,r,s,t,Ga)}function Xp(){xe(new de(_c,Yp,"PUBLIC").setMultipleInstances(!0)),Dt(Ia,Aa,""),Dt(Ia,Aa,"esm2017")}Xp();const yc={firebase:{apiKey:"AIzaSyAAas5gd9D3Fo62b4vSyuy5aKfzn5VPMn8",authDomain:"jp-decom.firebaseapp.com",projectId:"jp-decom",storageBucket:"jp-decom.appspot.com",messagingSenderId:"22188766286",appId:"1:22188766286:web:7bc969e580215a3bbc3f1f",measurementId:"G-JHJZTTBBVY"},region:"europe-west1"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(t);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="us-central1";class Zp{constructor(t,n,r,s,i=Qs,o){this.app=t,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Jp(n,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin,this.region=Qs}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function t_(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}const Ra="@firebase/functions",Sa="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="auth-internal",n_="app-check-internal",r_="messaging-internal";function s_(e,t){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(e_),a=r.getProvider(r_),l=r.getProvider(n_);return new Zp(i,o,a,l,s,e)};xe(new de(Ec,n,"PUBLIC").setMultipleInstances(!0)),Dt(Ra,Sa,t),Dt(Ra,Sa,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(e=ri(),t=Qs){const r=ni(Yt(e),Ec).getImmediate({identifier:t}),s=ti("functions");return s&&o_(r,...s),r}function o_(e,t,n){t_(Yt(e),t,n)}s_(fetch.bind(self));const ro=Wa(yc.firebase);Wp(ro);const Ys=Xg(ro);i_(ro,yc.region);function a_(e){let t;return{c(){t=We(e[0])},l(n){t=Qe(n,e[0])},m(n,r){M(n,t,r)},p(n,r){r&1&&Sr(t,n[0])},d(n){n&&P(t)}}}function l_(e){let t,n="Select a popup to see content.";return{c(){t=dt("p"),t.textContent=n},l(r){t=ft(r,"P",{"data-svelte-h":!0}),xa(t)!=="svelte-vhwezy"&&(t.textContent=n)},m(r,s){M(r,t,s)},p:he,d(r){r&&P(t)}}}function u_(e){let t,n;return{c(){t=new La(!1),n=Qt(),this.h()},l(r){t=Ma(r,!1),n=Qt(),this.h()},h(){t.a=n},m(r,s){t.m(e[2],r,s),M(r,n,s)},p(r,s){s&4&&t.p(r[2])},d(r){r&&(P(n),t.d())}}}function c_(e){let t;function n(i,o){return i[2]?u_:l_}let r=n(e),s=r(e);return{c(){s.c(),t=Qt()},l(i){s.l(i),t=Qt()},m(i,o){s.m(i,o),M(i,t,o)},p(i,o){r===(r=n(i))&&s?s.p(i,o):(s.d(1),s=r(i),s&&(s.c(),s.m(t.parentNode,t)))},d(i){i&&P(t),s.d(i)}}}function h_(e){let t,n,r,s,i;t=new _s({props:{$$slots:{default:[a_]},$$scope:{ctx:e}}}),t.$on("click",e[4]);function o(l){e[5](l)}let a={$$slots:{default:[c_]},$$scope:{ctx:e}};return e[1]!==void 0&&(a.showing=e[1]),r=new no({props:a}),Js.push(()=>Na(r,"showing",o)),{c(){De(t.$$.fragment),n=Et(),De(r.$$.fragment)},l(l){ke(t.$$.fragment,l),n=vt(l),ke(r.$$.fragment,l)},m(l,u){Ne(t,l,u),M(l,n,u),Ne(r,l,u),i=!0},p(l,[u]){const c={};u&65&&(c.$$scope={dirty:u,ctx:l}),t.$set(c);const h={};u&68&&(h.$$scope={dirty:u,ctx:l}),!s&&u&2&&(s=!0,h.showing=l[1],Oa(()=>s=!1)),r.$set(h)},i(l){i||(ht(t.$$.fragment,l),ht(r.$$.fragment,l),i=!0)},o(l){Tt(t.$$.fragment,l),Tt(r.$$.fragment,l),i=!1},d(l){l&&P(n),Oe(t,l),Oe(r,l)}}}function d_(e,t,n){let{popup:r}=t,{label:s="Open"}=t,i=!1,o;const a=()=>n(1,i=!0);function l(u){i=u,n(1,i)}return e.$$set=u=>{"popup"in u&&n(3,r=u.popup),"label"in u&&n(0,s=u.label)},e.$$.update=()=>{e.$$.dirty&10&&i&&r&&Promise.all([ma(Ws(Ys,"landing-page-popups",r,"content","html")),ma(Ws(Ys,"landing-page-popups",r,"content","css"))]).then(u=>{n(2,o=`${u[0].data().content}<style>${u[1].data().content}</style>`)}).catch(console.error)},[s,i,o,r,a,l]}class f_ extends Ke{constructor(t){super(),He(this,t,d_,h_,Ge,{popup:3,label:0})}get popup(){return this.$$.ctx[3]}set popup(t){this.$$set({popup:t}),L()}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),L()}}customElements.define("pb-popup",ze(f_,{popup:{},label:{}},[],[],!1));async function Pa(e,t){e={duration:5e3,state:"error",host:document.body,...e||{}};const n=document.createElement("jp-alert");n.title=e.title||"",n.message=e.message||"",n.state=e.state,e.host.appendChild(n);function r(s){e.host.removeChild(n),t&&t(s)}n.addEventListener("close",()=>r("close")),e.duration&&setTimeout(()=>r("timeout"),e.duration)}const m_={"auth/wrong-password":"The email and password you entered did not match our records. Please double-check and try again.","auth/too-many-requests":"Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.","auth/user-not-found":"There is no user record corresponding to this identifier.","auth/weak-password":"Please provide a stronger password.","auth/missing-email":"The provided email address is not valid.","auth/user-token-expired":"This is a sensitive action. Please login again to perform it.","auth/invalid-login-credentials":"The email and password you entered did not match our records. Please double-check and try again.","auth/invalid-verification-code":"The code you entered is invalid. Please try again.","auth/code-expired":"The code you entered has expired. Please try again.","auth/missing-code":"Please enter the code you received via SMS.","auth/invalid-phone-number":"Please enter a valid phone number.","auth/unverified-email":"Please verify your email first.","auth/requires-recent-login":"This action requires you to login again.","auth/email-already-in-use":"Email is already in use. Please use a different email."};async function g_(e,t="",n,r){let s;try{s=await e,t&&Pa({title:"Success",message:t,state:"success"})}catch(i){if(n!==!1){const o={title:"Something went wrong",state:"error",message:typeof n=="function"?n(i):n||i.toString()};i instanceof te&&(o.message=m_[i.code]||""),i.code!=="auth/multi-factor-auth-required"&&i.code!=="auth/unverified-email"&&Pa(o)}throw console.error(i),r&&await r(i),i}return s}function p_(e){Xs(e,"svelte-1whxo68","button.svelte-1whxo68{background-color:var(--primary-color);color:var(--primary-contrast-color);border-radius:var(--border-radius);padding:.5rem 1rem;font-size:1.2rem;cursor:pointer;border:none}.loading.svelte-1whxo68{pointer-events:none}")}function __(e){let t,n;return{c(){t=dt("button"),n=We(e[0]),this.h()},l(r){t=ft(r,"BUTTON",{type:!0,class:!0});var s=ot(t);n=Qe(s,e[0]),s.forEach(P),this.h()},h(){V(t,"type","submit"),V(t,"class","svelte-1whxo68"),Pt(t,"loading",e[2])},m(r,s){M(r,t,s),_t(t,n),e[9](t)},p(r,[s]){s&1&&Sr(n,r[0]),s&4&&Pt(t,"loading",r[2])},i:he,o:he,d(r){r&&P(t),e[9](null)}}}function y_(e,t,n){let{id:r}=t,{label:s}=t,{form:i}=t,{redirect:o=""}=t,{success:a}=t,{error:l}=t,u,c=!1,h=!1;function d(){n(8,c=!0);const _=u==null?void 0:u.closest("form");_.addEventListener("submit",async T=>{if(T.preventDefault(),h)return;n(2,h=!0);const m=new FormData(_),y=Object.fromEntries(m);await g_(dp(Qg(Ys,"forms",i,"form-responses"),{createdOn:new Date().toISOString(),...y}),a,l),o&&(o.startsWith("http")?window.open(o,"_self"):bc(o)),_.reset(),n(2,h=!1)})}function f(_){Js[_?"unshift":"push"](()=>{u=_,n(1,u)})}return e.$$set=_=>{"id"in _&&n(3,r=_.id),"label"in _&&n(0,s=_.label),"form"in _&&n(4,i=_.form),"redirect"in _&&n(5,o=_.redirect),"success"in _&&n(6,a=_.success),"error"in _&&n(7,l=_.error)},e.$$.update=()=>{e.$$.dirty&258&&!c&&u&&d()},[s,u,h,r,i,o,a,l,c,f]}class E_ extends Ke{constructor(t){super(),He(this,t,y_,__,Ge,{id:3,label:0,form:4,redirect:5,success:6,error:7},p_)}get id(){return this.$$.ctx[3]}set id(t){this.$$set({id:t}),L()}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),L()}get form(){return this.$$.ctx[4]}set form(t){this.$$set({form:t}),L()}get redirect(){return this.$$.ctx[5]}set redirect(t){this.$$set({redirect:t}),L()}get success(){return this.$$.ctx[6]}set success(t){this.$$set({success:t}),L()}get error(){return this.$$.ctx[7]}set error(t){this.$$set({error:t}),L()}}customElements.define("pb-submit",ze(E_,{id:{},label:{},form:{},redirect:{},success:{},error:{}},[],[],!1));function v_(e){Xs(e,"svelte-g3rino",'h3.svelte-g3rino{font-size:1.2rem;margin-bottom:1rem;font-weight:600}button.svelte-g3rino{cursor:pointer;width:40px;height:40px;border-radius:50%;border:none}footer.svelte-g3rino{display:flex;gap:1rem;margin-top:1rem}.dislexie{font-family:"Lexend", "sans-serif"}')}function T_(e){let t;return{c(){t=We("Resetiraj postavke")},l(n){t=Qe(n,"Resetiraj postavke")},m(n,r){M(n,t,r)},d(n){n&&P(t)}}}function w_(e){let t;return{c(){t=We("Spremi promjene")},l(n){t=Qe(n,"Spremi promjene")},m(n,r){M(n,t,r)},d(n){n&&P(t)}}}function I_(e){let t,n="Pristupačnost",r,s,i,o,a,l,u,c,h,d,f,_,T,m;return h=new _s({props:{variant:"ghost",$$slots:{default:[T_]},$$scope:{ctx:e}}}),h.$on("click",e[8]),f=new _s({props:{$$slots:{default:[w_]},$$scope:{ctx:e}}}),f.$on("click",e[7]),{c(){t=dt("h3"),t.textContent=n,r=Et(),s=dt("jp-select"),i=Et(),o=dt("jp-toggle"),a=Et(),l=dt("jp-toggle"),u=Et(),c=dt("footer"),De(h.$$.fragment),d=Et(),De(f.$$.fragment),this.h()},l(y){t=ft(y,"H3",{class:!0,"data-svelte-h":!0}),xa(t)!=="svelte-b7gbbt"&&(t.textContent=n),r=vt(y),s=ft(y,"JP-SELECT",{value:!0,label:!0,options:!0}),ot(s).forEach(P),i=vt(y),o=ft(y,"JP-TOGGLE",{value:!0,label:!0}),ot(o).forEach(P),a=vt(y),l=ft(y,"JP-TOGGLE",{value:!0,label:!0}),ot(l).forEach(P),u=vt(y),c=ft(y,"FOOTER",{class:!0});var A=ot(c);ke(h.$$.fragment,A),d=vt(A),ke(f.$$.fragment,A),A.forEach(P),this.h()},h(){V(t,"class","svelte-g3rino"),St(s,"value",e[3]),St(s,"label","Veličina teksta"),St(s,"options",e[5]),St(o,"value",e[1]),St(o,"label","Disleksija"),St(l,"value",e[2]),St(l,"label","Kontrast"),V(c,"class","svelte-g3rino")},m(y,A){M(y,t,A),M(y,r,A),M(y,s,A),M(y,i,A),M(y,o,A),M(y,a,A),M(y,l,A),M(y,u,A),M(y,c,A),Ne(h,c,null),_t(c,d),Ne(f,c,null),_=!0,T||(m=[ue(s,"value",e[9]),ue(o,"value",e[10]),ue(l,"value",e[11])],T=!0)},p(y,A){(!_||A&8)&&St(s,"value",y[3]),(!_||A&2)&&St(o,"value",y[1]),(!_||A&4)&&St(l,"value",y[2]);const F={};A&8192&&(F.$$scope={dirty:A,ctx:y}),h.$set(F);const j={};A&8192&&(j.$$scope={dirty:A,ctx:y}),f.$set(j)},i(y){_||(ht(h.$$.fragment,y),ht(f.$$.fragment,y),_=!0)},o(y){Tt(h.$$.fragment,y),Tt(f.$$.fragment,y),_=!1},d(y){y&&(P(t),P(r),P(s),P(i),P(o),P(a),P(l),P(u),P(c)),Oe(h),Oe(f),T=!1,ka(m)}}}function A_(e){let t,n,r,s,i,o,a,l,u;function c(d){e[12](d)}let h={$$slots:{default:[I_]},$$scope:{ctx:e}};return e[4]!==void 0&&(h.showing=e[4]),i=new no({props:h}),Js.push(()=>Na(i,"showing",c)),{c(){t=dt("button"),n=be("svg"),r=be("path"),s=Et(),De(i.$$.fragment),this.h()},l(d){t=ft(d,"BUTTON",{type:!0,style:!0,class:!0});var f=ot(t);n=Ve(f,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0});var _=ot(n);r=Ve(_,"path",{d:!0}),ot(r).forEach(P),_.forEach(P),f.forEach(P),s=vt(d),ke(i.$$.fragment,d),this.h()},h(){V(r,"d","M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"),V(n,"xmlns","http://www.w3.org/2000/svg"),V(n,"height","24px"),V(n,"viewBox","0 -960 960 960"),V(n,"width","24px"),V(n,"fill","#e8eaed"),V(t,"type","button"),oo(t,"background-color",e[0]),V(t,"class","svelte-g3rino")},m(d,f){M(d,t,f),_t(t,n),_t(n,r),M(d,s,f),Ne(i,d,f),a=!0,l||(u=ue(t,"click",e[6]),l=!0)},p(d,[f]){(!a||f&1)&&oo(t,"background-color",d[0]);const _={};f&8206&&(_.$$scope={dirty:f,ctx:d}),!o&&f&16&&(o=!0,_.showing=d[4],Oa(()=>o=!1)),i.$set(_)},i(d){a||(ht(i.$$.fragment,d),a=!0)},o(d){Tt(i.$$.fragment,d),a=!1},d(d){d&&(P(t),P(s)),Oe(i,d),l=!1,u()}}}function R_(e,t,n){let{color:r}=t;const s=JSON.stringify([{value:"100%",label:"Normalni"},{value:"115%",label:"Srednji"},{value:"130%",label:"Veliki"}]);let i=!1,o,a,l;function u(){n(4,i=!0)}function c(){localStorage.setItem("dislexie",o.toString()),localStorage.setItem("contrast",a.toString()),localStorage.setItem("fontSize",l),n(4,i=!1)}function h(){n(1,o=!1),n(2,a=!1),n(3,l="100%"),localStorage.removeItem("dislexie"),localStorage.removeItem("contrast"),localStorage.removeItem("fontSize"),n(4,i=!1)}Pc(()=>{n(1,o=localStorage.getItem("dislexie")==="true"),n(2,a=localStorage.getItem("contrast")==="true"),n(3,l=localStorage.getItem("fontSize")||"100%")});const d=m=>n(3,l=m.detail),f=m=>n(1,o=m.detail),_=m=>n(2,a=m.detail);function T(m){i=m,n(4,i)}return e.$$set=m=>{"color"in m&&n(0,r=m.color)},e.$$.update=()=>{e.$$.dirty&4&&(document.documentElement.style.filter=a?"grayscale(100%)":""),e.$$.dirty&2&&(o?document.body.classList.add("dislexie"):document.body.classList.remove("dislexie")),e.$$.dirty&8&&(document.documentElement.style.fontSize=l)},[r,o,a,l,i,s,u,c,h,d,f,_,T]}class S_ extends Ke{constructor(t){super(),He(this,t,R_,A_,Ge,{color:0},v_)}get color(){return this.$$.ctx[0]}set color(t){this.$$set({color:t}),L()}}customElements.define("pb-accessibility-widget",ze(S_,{color:{}},[],[],!1));const{document:P_}=Vc;function C_(e){let t,n=e[0].content+"",r,s,i;return{c(){t=new La(!1),r=Et(),this.h()},l(o){t=Ma(o,!1),r=vt(o),this.h()},h(){t.a=r},m(o,a){t.m(n,o,a),M(o,r,a),s||(i=ba(Dc.call(null,P_.body,e[1])),s=!0)},p(o,[a]){a&1&&n!==(n=o[0].content+"")&&t.p(n)},i:he,o:he,d(o){o&&(t.d(),P(r)),s=!1,i()}}}function b_(e,t,n){let{data:r}=t;const s=[];ao.set({title:r.title,...r.meta}),r.renderLayout||s.push("standalone"),i();function i(){let o=!0;Cc.subscribe(a=>{document.querySelectorAll("[data-pblink]").forEach(l=>{const u=l.classList.contains("active"),c=l.getAttribute("href");u&&c!==a.url.pathname?l.classList.remove("active"):!u&&c===a.url.pathname&&l.classList.add("active")}),document.querySelectorAll("[data-pbanchor]").forEach(l=>{l.addEventListener("click",u=>{u.preventDefault();const c=document.querySelector(l.getAttribute("href"));c&&(c==null||c.scrollIntoView({behavior:l.getAttribute("animation")}))})}),o||ao.set({title:r.title,...r.meta}),o=!1})}return e.$$set=o=>{"data"in o&&n(0,r=o.data)},[r,s]}class V_ extends Ke{constructor(t){super(),He(this,t,b_,C_,Ge,{data:0})}get data(){return this.$$.ctx[0]}set data(t){this.$$set({data:t}),L()}}ze(V_,{data:{}},[],[],!0);export{V_ as component};
