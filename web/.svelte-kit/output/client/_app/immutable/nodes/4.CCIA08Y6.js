import{c as F,S as G,i as H,o as J,s as K,p as h,a as v,q as b,h as w,r as d,j as g,v as _,z as R,u as m,g as p,w as k,m as M,x as z,y as V,A as O,t as B,f as y,e as I,b as P,d as q,B as C,k as D,l as Q}from"../chunks/Component.BwNXiCAZ.js";import{e as E}from"../chunks/each.D6YF6ztN.js";import"../chunks/index.IHki7fMi.js";import{p as U}from"../chunks/stores.d6XaYIdv.js";import{T as W,P as X,a as j,B as Y}from"../chunks/BlogSnippets.CyQSDBNt.js";import{m as Z}from"../chunks/meta.store.BdqmDbcc.js";import{B as x}from"../chunks/Button.CTOLldax.js";function L(i,e,n){const a=i.slice();return a[3]=e[n],a}function ee(i){let e;return{c(){e=B("All posts")},l(n){e=y(n,"All posts")},m(n,a){g(n,e,a)},d(n){n&&p(e)}}}function te(i){let e=i[3].name+"",n,a;return{c(){n=B(e),a=v()},l(t){n=y(t,e),a=w(t)},m(t,l){g(t,n,l),g(t,a,l)},p(t,l){l&1&&e!==(e=t[3].name+"")&&Q(n,e)},d(t){t&&(p(n),p(a))}}}function N(i){var a;let e,n;return e=new j({props:{href:"/blog/"+i[3].id,active:((a=i[1])==null?void 0:a.id)===i[3].id,$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,l){d(e,t,l),n=!0},p(t,l){var c;const s={};l&1&&(s.href="/blog/"+t[3].id),l&3&&(s.active=((c=t[1])==null?void 0:c.id)===t[3].id),l&65&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ae(i){let e,n,a,t;e=new j({props:{href:"/blog",$$slots:{default:[ee]},$$scope:{ctx:i}}});let l=E(i[0].categories),s=[];for(let o=0;o<l.length;o+=1)s[o]=N(L(i,l,o));const c=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){h(e.$$.fragment),n=v();for(let o=0;o<s.length;o+=1)s[o].c();a=z()},l(o){b(e.$$.fragment,o),n=w(o);for(let f=0;f<s.length;f+=1)s[f].l(o);a=z()},m(o,f){d(e,o,f),g(o,n,f);for(let $=0;$<s.length;$+=1)s[$]&&s[$].m(o,f);g(o,a,f),t=!0},p(o,f){const $={};if(f&64&&($.$$scope={dirty:f,ctx:o}),e.$set($),f&3){l=E(o[0].categories);let r;for(r=0;r<l.length;r+=1){const u=L(o,l,r);s[r]?(s[r].p(u,f),m(s[r],1)):(s[r]=N(u),s[r].c(),m(s[r],1),s[r].m(a.parentNode,a))}for(V(),r=l.length;r<s.length;r+=1)c(r);R()}},i(o){if(!t){m(e.$$.fragment,o);for(let f=0;f<l.length;f+=1)m(s[f]);t=!0}},o(o){_(e.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)_(s[f]);t=!1},d(o){o&&(p(n),p(a)),k(e,o),O(s,o)}}}function se(i){let e,n,a,t,l;return t=new x({props:{href:"/",$$slots:{default:[ne]},$$scope:{ctx:i}}}),{c(){e=I("div"),n=B(`There are no articles currently.
    `),a=I("div"),h(t.$$.fragment),this.h()},l(s){e=P(s,"DIV",{class:!0});var c=q(e);n=y(c,`There are no articles currently.
    `),a=P(c,"DIV",{class:!0});var o=q(a);b(t.$$.fragment,o),o.forEach(p),c.forEach(p),this.h()},h(){C(a,"class","mt-2"),C(e,"class","max-w-2xl mx-auto")},m(s,c){g(s,e,c),D(e,n),D(e,a),d(t,a,null),l=!0},p(s,c){const o={};c&64&&(o.$$scope={dirty:c,ctx:s}),t.$set(o)},i(s){l||(m(t.$$.fragment,s),l=!0)},o(s){_(t.$$.fragment,s),l=!1},d(s){s&&p(e),k(t)}}}function re(i){let e,n;return e=new Y({props:{articles:i[0].page,baseLink:"/blog",baseAuthorLink:"/blog/authors"}}),{c(){h(e.$$.fragment)},l(a){b(e.$$.fragment,a)},m(a,t){d(e,a,t),n=!0},p(a,t){const l={};t&1&&(l.articles=a[0].page),e.$set(l)},i(a){n||(m(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){k(e,a)}}}function ne(i){let e;return{c(){e=B("Return to home page")},l(n){e=y(n,"Return to home page")},m(n,a){g(n,e,a)},d(n){n&&p(e)}}}function oe(i){let e,n,a,t,l,s,c;e=new W({props:{$$slots:{default:[ae]},$$scope:{ctx:i}}});const o=[re,se],f=[];function $(r,u){return r[0].page.length?0:1}return a=$(i),t=f[a]=o[a](i),s=new X({props:{pages:i[0].pageSize,prefix:"/blog/"+i[2].params.category+"/page/",current:1}}),{c(){h(e.$$.fragment),n=v(),t.c(),l=v(),h(s.$$.fragment)},l(r){b(e.$$.fragment,r),n=w(r),t.l(r),l=w(r),b(s.$$.fragment,r)},m(r,u){d(e,r,u),g(r,n,u),f[a].m(r,u),g(r,l,u),d(s,r,u),c=!0},p(r,[u]){const A={};u&67&&(A.$$scope={dirty:u,ctx:r}),e.$set(A);let S=a;a=$(r),a===S?f[a].p(r,u):(V(),_(f[S],1,1,()=>{f[S]=null}),R(),t=f[a],t?t.p(r,u):(t=f[a]=o[a](r),t.c()),m(t,1),t.m(l.parentNode,l));const T={};u&1&&(T.pages=r[0].pageSize),u&4&&(T.prefix="/blog/"+r[2].params.category+"/page/"),s.$set(T)},i(r){c||(m(e.$$.fragment,r),m(t),m(s.$$.fragment,r),c=!0)},o(r){_(e.$$.fragment,r),_(t),_(s.$$.fragment,r),c=!1},d(r){r&&(p(n),p(l)),k(e,r),f[a].d(r),k(s,r)}}}function le(i,e,n){let a,t;M(i,U,s=>n(2,t=s));let{data:l}=e;return i.$$set=s=>{"data"in s&&n(0,l=s.data)},i.$$.update=()=>{i.$$.dirty&5&&n(1,a=l.categories.find(s=>s.id===t.params.category)),i.$$.dirty&2&&a&&Z.set(a.meta)},[l,a,t]}class ie extends G{constructor(e){super(),H(this,e,le,oe,K,{data:0})}get data(){return this.$$.ctx[0]}set data(e){this.$$set({data:e}),J()}}F(ie,{data:{}},[],[],!0);export{ie as component};
