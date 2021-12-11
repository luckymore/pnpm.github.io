"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3853],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),k=p,s=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return t?r.createElement(s,a(a({ref:n},c),{},{components:t})):r.createElement(s,a({ref:n},c))}));function k(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var m=2;m<l;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7999:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>m,toc:()=>c,default:()=>u});var r=t(5900),p=t(4750),l=(t(9496),t(9613)),a=["components"],i={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",title:"pnpm CLI",description:"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 npm",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/ru/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-6.x/docs",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",permalink:"/ru/installation"},next:{title:"pnpx CLI",permalink:"/ru/pnpx-cli"}},c=[{value:"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 npm",id:"\u043e\u0442\u043b\u0438\u0447\u0438\u044f-\u043e\u0442-npm",children:[],level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"-C &lt;\u043f\u0443\u0442\u044c&gt;, --dir &lt;\u043f\u0443\u0442\u044c&gt;",id:"-c-\u043f\u0443\u0442\u044c---dir-\u043f\u0443\u0442\u044c",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:[],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,p.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u043e\u0442\u043b\u0438\u0447\u0438\u044f-\u043e\u0442-npm"},"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 npm"),(0,l.kt)("p",null,"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 npm, pnpm \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0432\u0441\u0435 \u043e\u043f\u0446\u0438\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443, \u0442\u0430\u043a \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"--foo")," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0439 \u043e\u043f\u0446\u0438\u0435\u0439 \u0434\u043b\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,l.kt)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"npm_config_"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0438\u0437 \u043e\u043f\u0446\u0438\u0439 CLI. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u044f\u0432\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f: ",(0,l.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,l.kt)("li",{parentName:"ol"},"\u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0443\u044e \u043e\u043f\u0446\u0438\u044e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"-c-\u043f\u0443\u0442\u044c---dir-\u043f\u0443\u0442\u044c"},"-C ","<","\u043f\u0443\u0442\u044c",">",", --dir ","<","\u043f\u0443\u0442\u044c",">"),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b pnpm \u0431\u044b\u043b \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"<path>")," \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430."),(0,l.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v5.6.0"),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b pnpm \u0431\u044b\u043b \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0432 \u043a\u043e\u0440\u043d\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435), \u0430 \u043d\u0435 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435."),(0,l.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0441\u043c. \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c CLI. \u0412\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0443\u0434\u043e\u0431\u043d\u044b\u0445 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043e\u0432 npm-\u043a\u043e\u043c\u0430\u043d\u0434 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"npm \u043a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442 \u0432 pnpm"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm install")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/ru/cli/install"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm i <\u043f\u0430\u043a\u0435\u0442>")),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add <\u043f\u0430\u043a\u0435\u0442>"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm run <\u043a\u043e\u043c\u0430\u043d\u0434\u0430>")),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm <\u043a\u043e\u043c\u0430\u043d\u0434\u0430>"),"]")))),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430, pnpm \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043a\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," - \u044d\u0442\u043e \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". \u0415\u0441\u043b\u0438 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0442\u043e pnpm \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043a\u0430\u043a \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430/\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438, \u0442\u0430\u043a \u0447\u0442\u043e \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u0432\u0435\u0449\u0438, \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (\u0441\u043c. ",(0,l.kt)("a",{parentName:"p",href:"/ru/cli/exec"},"pnpm exec"),")."))}u.isMDXComponent=!0}}]);