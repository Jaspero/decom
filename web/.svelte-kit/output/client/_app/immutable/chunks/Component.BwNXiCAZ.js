var gt=Object.defineProperty;var bt=(t,e,n)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>(bt(t,typeof e!="symbol"?e+"":e,n),n);function g(){}const xt=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Z(){return Object.create(null)}function T(t){t.forEach(it)}function B(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function te(t,e){return t===e?!0:(O||(O=document.createElement("a")),O.href=e,t===O.href)}function Et(t){return Object.keys(t).length===0}function Nt(t,...e){if(t==null){for(const i of e)i(void 0);return g}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(Nt(e,n))}function ne(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,r){if(s){const c=st(e,n,i,r);t.p(c,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){return t&&B(t.destroy)?t.destroy:g}const rt=typeof window<"u";let At=rt?()=>window.performance.now():()=>Date.now(),W=rt?t=>requestAnimationFrame(t):g;const E=new Set;function ct(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&W(ct)}function Tt(t){let e;return E.size===0&&W(ct),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let R=!1;function vt(){R=!0}function jt(){R=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const h=e[u];h.claim_order!==void 0&&l.push(h)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,h=(s>0&&e[n[s]].claim_order<=u?s+1:kt(1,s,$=>e[n[$]].claim_order,u))-1;i[l]=n[h]+1;const a=h+1;n[a]=l,s=Math.max(a,s)}const r=[],c=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);r.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<r.length&&c[l].claim_order>=r[u].claim_order;)u++;const h=u<r.length?r[u]:null;t.insertBefore(c[l],h)}}function Lt(t,e){t.appendChild(e)}function oe(t,e,n){const i=K(t);if(!i.getElementById(e)){const s=C("style");s.id=e,s.textContent=n,ot(i,s)}}function K(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ot(t){const e=C("style");return e.textContent="/* empty */",ot(K(t),e),e.sheet}function ot(t,e){return Lt(t.head||t,e),e.sheet}function Pt(t,e){if(R){for(Ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function lt(t,e,n){t.insertBefore(e,n||null)}function Mt(t,e,n){R&&!n?Pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function ue(){return Q(" ")}function ae(){return Q("")}function fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const St=["width","height"];function he(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&St.indexOf(i)===-1?t[i]=e[i]:X(t,i,e[i])}function de(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:X(t,e,n)}function _e(t){return t.dataset.svelteH}function Ht(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){at(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function ht(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||r.push(o.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function $e(t,e,n){return ht(t,e,n,C)}function me(t,e,n){return ht(t,e,n,ut)}function Dt(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function pe(t){return Dt(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function ye(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new G(e);at(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new G(e);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new G(e,r)}function ge(t,e){e=""+e,t.data!==e&&(t.data=e)}function be(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function xe(t,e,n){t.classList.toggle(e,!!n)}function dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function we(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Bt{constructor(e=!1){d(this,"is_svg",!1);d(this,"e");d(this,"n");d(this,"t");d(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ut(n.nodeName):this.e=C(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)lt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class G extends Bt{constructor(n=!1,i){super(n);d(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Mt(this.t,this.n[i],n)}}function Rt(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Ee(t,e){return new t(e)}const S=new Map;let H=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Ot(e),rules:{}};return S.set(t,n),n}function et(t,e,n,i,s,r,c,o=0){const l=16.666/i;let u=`{
`;for(let _=0;_<=1;_+=l){const b=e+(n-e)*r(_);u+=_*100+`%{${c(b,1-b)}}
`}const h=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${qt(h)}_${o}`,$=K(t),{stylesheet:y,rules:f}=S.get($)||zt($,t);f[a]||(f[a]=!0,y.insertRule(`@keyframes ${a} ${h}`,y.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,H+=1,a}function Ft(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||Gt())}function Gt(){W(()=>{H||(S.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),S.clear())})}let k;function j(t){k=t}function Y(){if(!k)throw new Error("Function called outside component initialization");return k}function Ne(t){Y().$$.on_mount.push(t)}function Ae(t){Y().$$.after_update.push(t)}function Te(){const t=Y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=dt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function ve(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],nt=[];let N=[];const U=[],_t=Promise.resolve();let V=!1;function $t(){V||(V=!0,_t.then(mt))}function je(){return $t(),_t}function D(t){N.push(t)}function ke(t){U.push(t)}const I=new Set;let x=0;function mt(){if(x!==0)return;const t=k;do{try{for(;x<w.length;){const e=w[x];x++,j(e),It(e.$$)}}catch(e){throw w.length=0,x=0,e}for(j(null),w.length=0,x=0;nt.length;)nt.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];I.has(n)||(I.add(n),n())}N.length=0}while(w.length);for(;U.length;)U.pop()();V=!1,I.clear(),j(t)}function It(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Jt(t){const e=[],n=[];N.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),N=e}let v;function Ut(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function J(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const P=new Set;let p;function Ce(){p={r:0,c:[],p}}function Le(){p.r||T(p.c),p=p.p}function Vt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function Oe(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),p.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Wt={duration:0};function Pe(t,e,n,i){let r=e(t,n,{direction:"both"}),c=i?0:1,o=null,l=null,u=null,h;function a(){u&&Ft(t,u)}function $(f,m){const _=f.b-c;return m*=Math.abs(_),{a:c,b:f.b,d:_,duration:m,start:f.start,end:f.start+m,group:f.group}}function y(f){const{delay:m=0,duration:_=300,easing:b=xt,tick:q=g,css:z}=r||Wt,F={start:At()+m,b:f};f||(F.group=p,p.r+=1),"inert"in t&&(f?h!==void 0&&(t.inert=h):(h=t.inert,t.inert=!0)),o||l?l=F:(z&&(a(),u=et(t,c,f,_,m,b,z)),f&&q(0,1),o=$(F,_),D(()=>J(t,f,"start")),Tt(L=>{if(l&&L>l.start&&(o=$(l,_),l=null,J(t,o.b,"start"),z&&(a(),u=et(t,c,o.b,o.duration,0,b,r.css))),o){if(L>=o.end)q(c=o.b,1-c),J(t,o.b,"end"),l||(o.b?a():--o.group.r||T(o.group.c)),o=null;else if(L>=o.start){const yt=L-o.start;c=o.a+o.d*b(yt/o.duration),q(c,1-c)}}return!!(o||l)}))}return{run(f){B(r)?Ut().then(()=>{r=r({direction:f?"in":"out"}),y(f)}):y(f)},end(){a(),o=l=null}}}function Me(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Se(t){t&&t.c()}function He(t,e){t&&t.l(e)}function Kt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),D(()=>{const r=t.$$.on_mount.map(it).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),s.forEach(D)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(Jt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(w.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,i,s,r,c=null,o=[-1]){const l=k;j(t);const u=t.$$={fragment:null,ctx:[],props:r,update:g,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(a,$,...y)=>{const f=y.length?y[0]:$;return u.ctx&&s(u.ctx[a],u.ctx[a]=f)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](f),h&&Xt(t,a)),$}):[],u.update(),h=!0,T(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){vt();const a=Ht(e.target);u.fragment&&u.fragment.l(a),a.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&Vt(t.$$.fragment),Kt(t,e.target,e.anchor),jt(),mt()}j(l)}let pt;typeof HTMLElement=="function"&&(pt=class extends HTMLElement{constructor(e,n,i){super();d(this,"$$ctor");d(this,"$$s");d(this,"$$c");d(this,"$$cn",!1);d(this,"$$d",{});d(this,"$$r",!1);d(this,"$$p_d",{});d(this,"$$l",{});d(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=n,i&&this.attachShadow({mode:"open"})}addEventListener(e,n,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const s=this.$$c.$on(e,n);this.$$l_u.set(n,s)}super.addEventListener(e,n,i)}removeEventListener(e,n,i){if(super.removeEventListener(e,n,i),this.$$c){const s=this.$$l_u.get(n);s&&(s(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return()=>{let c;return{c:function(){c=C("slot"),r!=="default"&&X(c,"name",r)},m:function(u,h){lt(u,c,h)},d:function(u){u&&A(c)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},i=Rt(this);for(const r of this.$$s)r in i&&(n[r]=[e(r)]);for(const r of this.attributes){const c=this.$$g_p(r.name);c in this.$$d||(this.$$d[c]=M(c,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const r in this.$$p_d)if(this.$$d[r]=this.$$c.$$.ctx[this.$$c.$$.props[r]],this.$$p_d[r].reflect){const c=M(r,this.$$d[r],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,c)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const r in this.$$l)for(const c of this.$$l[r]){const o=this.$$c.$on(r,c);this.$$l_u.set(c,o)}this.$$l={}}}attributeChangedCallback(e,n,i){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=M(e,i,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function M(t,e,n,i){var r;const s=(r=n[t])==null?void 0:r.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!n[t])return e;if(i==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Be(t,e,n,i,s,r){let c=class extends pt{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(o=>(e[o].attribute||o).toLowerCase())}};return Object.keys(e).forEach(o=>{Object.defineProperty(c.prototype,o,{get(){return this.$$c&&o in this.$$c?this.$$c[o]:this.$$d[o]},set(l){var u;l=M(o,l,e),this.$$d[o]=l,(u=this.$$c)==null||u.$set({[o]:l})}})}),i.forEach(o=>{Object.defineProperty(c.prototype,o,{get(){var l;return(l=this.$$c)==null?void 0:l[o]}})}),r&&(c=r(c)),t.element=c,c}class Re{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){Qt(this,1),this.$destroy=g}$on(e,n){if(!B(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xt as $,le as A,X as B,ye as C,te as D,_e as E,oe as F,xe as G,G as H,be as I,Ne as J,je as K,ve as L,nt as M,ne as N,wt as O,he as P,fe as Q,se as R,Re as S,re as T,ie as U,Ae as V,Ee as W,ut as X,me as Y,T as Z,we as _,ue as a,Te as a0,ce as a1,D as a2,Pe as a3,Me as a4,ke as a5,de as a6,$e as b,Be as c,Ht as d,C as e,Dt as f,A as g,pe as h,De as i,Mt as j,Pt as k,ge as l,ee as m,g as n,mt as o,Se as p,He as q,Kt as r,Zt as s,Q as t,Vt as u,Oe as v,Qt as w,ae as x,Ce as y,Le as z};