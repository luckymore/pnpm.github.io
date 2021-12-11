"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7790],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2629:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var r=n(5900),o=n(4750),i=(n(9496),n(9613)),a=["components"],p={id:"test",title:"pnpm test"},c=void 0,l={unversionedId:"cli/test",id:"version-6.x/cli/test",title:"pnpm test",description:"Aliases: run test, t, tst",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-6.x/cli/test.md",sourceDirName:"cli",slug:"/cli/test",permalink:"/de/cli/test",editUrl:"https://crowdin.com/project/pnpm/de",tags:[],version:"6.x",frontMatter:{id:"test",title:"pnpm test"},sidebar:"version-6.x/docs",previous:{title:"pnpm run",permalink:"/de/cli/run"},next:{title:"pnpm exec",permalink:"/de/cli/exec"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tst")),(0,i.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," property of its ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," object."),(0,i.kt)("p",null,"The intended usage of the property is to specify a command that runs unit or integration testing for your program."))}m.isMDXComponent=!0}}]);