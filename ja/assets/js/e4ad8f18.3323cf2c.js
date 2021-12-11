"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7825],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8558:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>d});var n=r(5900),o=r(4750),a=(r(9496),r(9613)),l=["components"],i={id:"store",title:"pnpm store"},p=void 0,c={unversionedId:"cli/store",id:"version-6.x/cli/store",title:"pnpm store",description:"\u30d1\u30c3\u30b1\u30fc\u30b8 \u30b9\u30c8\u30a2\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ja/cli/store",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/ja/cli/server"},next:{title:"pnpm root",permalink:"/ja/cli/root"}},u=[{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3},{value:"path",id:"path",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8 \u30b9\u30c8\u30a2\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u30b9\u30c8\u30a2\u5185\u306e\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5185\u5bb9\u304c\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5c55\u958b\u3057\u305f\u3068\u304d\u3068\u540c\u4e00\u306e\u5834\u5408\u3001\u7d42\u4e86\u30b3\u30fc\u30c90\u3067\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.12.0"),(0,a.kt)("p",null,"\u6a5f\u80fd\u7684\u306b\u306f",(0,a.kt)("a",{parentName:"p",href:"/ja/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),"\u3068\u540c\u7b49\u3067\u3059\u304c\u3001\u30b9\u30c8\u30a2\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u305b\u305a\u3001\u76f4\u63a5\u30b9\u30c8\u30a2\u306b\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"\u30b9\u30c8\u30a2\u304b\u3089\u5b64\u7acb\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b9\u30c8\u30a2\u3092\u6574\u7406\u3059\u308b\u3068\u30c7\u30a3\u30b9\u30af\u9818\u57df\u306e\u4f7f\u7528\u91cf\u3092\u7bc0\u7d04\u3067\u304d\u307e\u3059\u304c\u3001\u6574\u7406\u3059\u308b\u3068\u304d\u306b\u524a\u9664\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u542b\u3080\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u3001\u6642\u9593\u304c\u304b\u304b\u308b\u3088\u3046\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u6700\u7d42\u7684\u306b\u306f\u5b89\u5168\u306a\u64cd\u4f5c\u3067\u3059\u304c\u3001\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5b64\u7acb\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u542b\u307e\u308c\u308b\u306a\u3089\u3001\u5b9f\u884c\u3057\u306a\u3044\u307b\u3046\u304c\u3044\u3044\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u53c2\u7167\u3055\u308c\u3066\u3044\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"FAQ")," \u3082\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ja/cli/server"},"store server"),"\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u306e\u306f\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.10.0"),(0,a.kt)("p",null,"\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30d1\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);