import{c as L,S as j,i as x,o as C,s as I,p as _,a as k,q as h,h as w,r as b,j as u,u as m,v as p,g,w as d,x as S,y as N,z as D,A as E,t as P,f as T,l as F}from"../chunks/Component.BwNXiCAZ.js";import{e as A}from"../chunks/each.D6YF6ztN.js";import"../chunks/index.IHki7fMi.js";import{T as G,B as H,P as J,a as q}from"../chunks/BlogSnippets.CyQSDBNt.js";import{m as K}from"../chunks/meta.store.BdqmDbcc.js";function B(i,e,s){const t=i.slice();return t[1]=e[s],t}function M(i){let e;return{c(){e=P("All posts")},l(s){e=T(s,"All posts")},m(s,t){u(s,e,t)},d(s){s&&g(e)}}}function O(i){let e=i[1].name+"",s;return{c(){s=P(e)},l(t){s=T(t,e)},m(t,l){u(t,s,l)},p(t,l){l&1&&e!==(e=t[1].name+"")&&F(s,e)},d(t){t&&g(s)}}}function z(i){let e,s;return e=new q({props:{href:"/blog/"+i[1].id,$$slots:{default:[O]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){b(e,t,l),s=!0},p(t,l){const f={};l&1&&(f.href="/blog/"+t[1].id),l&17&&(f.$$scope={dirty:l,ctx:t}),e.$set(f)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){d(e,t)}}}function Q(i){let e,s,t,l;e=new q({props:{href:"/blog",active:!0,$$slots:{default:[M]},$$scope:{ctx:i}}});let f=A(i[0].categories),r=[];for(let a=0;a<f.length;a+=1)r[a]=z(B(i,f,a));const n=a=>p(r[a],1,1,()=>{r[a]=null});return{c(){_(e.$$.fragment),s=k();for(let a=0;a<r.length;a+=1)r[a].c();t=S()},l(a){h(e.$$.fragment,a),s=w(a);for(let o=0;o<r.length;o+=1)r[o].l(a);t=S()},m(a,o){b(e,a,o),u(a,s,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(a,o);u(a,t,o),l=!0},p(a,o){const c={};if(o&16&&(c.$$scope={dirty:o,ctx:a}),e.$set(c),o&1){f=A(a[0].categories);let $;for($=0;$<f.length;$+=1){const v=B(a,f,$);r[$]?(r[$].p(v,o),m(r[$],1)):(r[$]=z(v),r[$].c(),m(r[$],1),r[$].m(t.parentNode,t))}for(N(),$=f.length;$<r.length;$+=1)n($);D()}},i(a){if(!l){m(e.$$.fragment,a);for(let o=0;o<f.length;o+=1)m(r[o]);l=!0}},o(a){p(e.$$.fragment,a),r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)p(r[o]);l=!1},d(a){a&&(g(s),g(t)),d(e,a),E(r,a)}}}function R(i){let e,s,t,l,f,r;return e=new G({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),t=new H({props:{articles:i[0].page,baseLink:"/blog",baseAuthorLink:"/blog/authors"}}),f=new J({props:{pages:i[0].pageSize,prefix:"/blog/page/",current:1}}),{c(){_(e.$$.fragment),s=k(),_(t.$$.fragment),l=k(),_(f.$$.fragment)},l(n){h(e.$$.fragment,n),s=w(n),h(t.$$.fragment,n),l=w(n),h(f.$$.fragment,n)},m(n,a){b(e,n,a),u(n,s,a),b(t,n,a),u(n,l,a),b(f,n,a),r=!0},p(n,[a]){const o={};a&17&&(o.$$scope={dirty:a,ctx:n}),e.$set(o);const c={};a&1&&(c.articles=n[0].page),t.$set(c);const $={};a&1&&($.pages=n[0].pageSize),f.$set($)},i(n){r||(m(e.$$.fragment,n),m(t.$$.fragment,n),m(f.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),p(f.$$.fragment,n),r=!1},d(n){n&&(g(s),g(l)),d(e,n),d(t,n),d(f,n)}}}function U(i,e,s){let{data:t}=e;return K.set({title:"Blog"}),i.$$set=l=>{"data"in l&&s(0,t=l.data)},[t]}class V extends j{constructor(e){super(),x(this,e,U,R,I,{data:0})}get data(){return this.$$.ctx[0]}set data(e){this.$$set({data:e}),C()}}L(V,{data:{}},[],[],!0);export{V as component};