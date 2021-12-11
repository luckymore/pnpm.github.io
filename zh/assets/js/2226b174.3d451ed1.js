"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7259],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5025:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>d});var n=r(5900),o=r(4750),a=(r(9496),r(9613)),l=["components"],i={id:"store",title:"pnpm store"},p=void 0,c={unversionedId:"cli/store",id:"version-5.x/cli/store",title:"pnpm store",description:"\u7ba1\u7406\u5305\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/zh/5.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-5.x/docs",previous:{title:"pnpm server",permalink:"/zh/5.x/cli/server"},next:{title:"package.json",permalink:"/zh/5.x/package_json"}},u=[{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ba1\u7406\u5305\u5b58\u50a8\u3002"),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u67e5\u770b store \u4e2d\u5df2\u4fee\u6539\u7684\u5305\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5305\u7684\u5185\u5bb9\u4e0e\u62c6\u5305\u65f6\u65f6\u76f8\u540c\u7684\u8bdd\uff0c\u8fd4\u56de\u9000\u51fa\u4ee3\u78010\u3002"),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1a v2.12.0"),(0,a.kt)("p",null,"\u529f\u80fd\u4e0a\u7b49\u540c\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/zh/5.x/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),"\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u53ea\u628a\u5305\u52a0\u5165\u5b58\u50a8\u4e2d\uff0c\u4e14\u6ca1\u6709\u4fee\u6539\u5b58\u50a8\u5916\u7684\u4efb\u4f55\u9879\u76ee\u6216\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"\u4ece store \u4e2d\u79fb\u9664\u5b64\u7acb\u7684\u5305\u3002"),(0,a.kt)("p",null,"\u4fee\u526a\u5b58\u50a8\u5c06\u8282\u7701\u78c1\u76d8\u7a7a\u95f4\uff0c\u4f46\u662f\u53ef\u80fd\u4f1a\u51cf\u6162\u672a\u6765\u6d89\u53ca\u4fee\u526a\u8fc7\u5305\u7684\u5b89\u88c5\u3002 \u5f52\u6839\u7ed3\u5e95\uff0c\u8fd9\u662f\u4e00\u4e2a\u5b89\u5168\u7684\u64cd\u4f5c\uff0c\u4f46\u662f\u5982\u679c\u60a8\u4ece\u6253\u7b97\u91cd\u65b0\u5b89\u88c5\u5b64\u513f\u5305\uff0c\u90a3\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"/zh/5.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54")," \u4ee5\u83b7\u53d6\u6709\u5173\u672a\u5f15\u7528\u5305\u548c\u6700\u4f73\u5b9e\u8df5\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5f53 ",(0,a.kt)("a",{parentName:"p",href:"/zh/5.x/cli/server"},"\u5b58\u50a8\u670d\u52a1\u5668")," \u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u8fd9\u662f\u7981\u6b62\u7684\u3002"))}d.isMDXComponent=!0}}]);