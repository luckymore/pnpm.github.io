"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3414],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9775:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>s});var r=t(5900),o=t(4750),i=(t(9496),t(9613)),a=["components"],p={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"version-6.x/cli/prune",title:"pnpm prune",description:"\u4e0d\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/ja/cli/prune",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-6.x/docs",previous:{title:"pnpm rebuild",permalink:"/ja/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/ja/cli/fetch"}},u=[{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3}],level:2}],d={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e0d\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--prod"},"--prod"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306b\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306b\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u73fe\u5728\u306e prune \u30b3\u30de\u30f3\u30c9\u306f\u3001\u30e2\u30ce\u30ea\u30dd\u3067\u518d\u5e30\u7684\u306b\u5b9f\u884c\u3059\u308b\u6a5f\u80fd\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u30e2\u30ce\u30ea\u30dd\u3067\u672c\u756a\u74b0\u5883\u7528\u306e\u4f9d\u5b58\u95a2\u4fc2\u3060\u3051\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u304d\u306f\u3001\u5168\u3066\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u3092\u524a\u9664\u3057\u3066\u304b\u3089",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),"\u30b3\u30de\u30f3\u30c9\u3067\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))))}s.isMDXComponent=!0}}]);