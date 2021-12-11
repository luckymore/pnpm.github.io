"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9603],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=l,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4283:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>o,toc:()=>s,default:()=>m});var a=n(5900),l=n(4750),r=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"Filtering"},c=void 0,o={unversionedId:"filtering",id:"version-5.x/filtering",title:"Filtering",description:"Added in: v2.13.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-5.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/id/5.x/filtering",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"5.x",frontMatter:{id:"filtering",title:"Filtering"},sidebar:"version-5.x/docs",previous:{title:"Configuring",permalink:"/id/5.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/id/5.x/cli/add"}},s=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[],level:2},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[],level:2},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[],level:2},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[],level:2},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",children:[],level:2},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[],level:2},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[],level:2},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[],level:2},{value:"Multiplicity",id:"multiplicity",children:[],level:2},{value:"Excluding",id:"excluding",children:[],level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Added in: v2.13.0"),(0,r.kt)("p",null,"Filtering allows you to restrict commands to specific subsets of packages."),(0,r.kt)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by relation."),(0,r.kt)("p",null,"Selectors may be specified via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"An article that compares Lerna's filtering to pnpm's")))),(0,r.kt)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,r.kt)("p",null,"Added in: v2.13.0"),(0,r.kt)("p",null,"To select an exact package, just specify its name (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a pattern to select a set of packages (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),(0,r.kt)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,r.kt)("p",null,"Added in: v2.13.0"),(0,r.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with an ellipsis: ",(0,r.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run tests of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),(0,r.kt)("p",null,"You may use a pattern to select a set of root packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),(0,r.kt)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),(0,r.kt)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,r.kt)("p",null,"Added in: v2.14.0"),(0,r.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",(0,r.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),(0,r.kt)("h2",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),(0,r.kt)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,r.kt)("p",null,"Added in: v2.15.0"),(0,r.kt)("p",null,"To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format."),(0,r.kt)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,r.kt)("p",null,"Added in: v4.7.0"),(0,r.kt)("p",null,"Includes all projects that are under the specified directory."),(0,r.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),(0,r.kt)("p",null,"It may also be combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),(0,r.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),(0,r.kt)("h2",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,r.kt)("p",null,"Added in: v4.6.0"),(0,r.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,r.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),(0,r.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,r.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),(0,r.kt)("h2",{id:"excluding"},"Excluding"),(0,r.kt)("p",null,"Added in: v5.8.0"),(0,r.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,r.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,r.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),(0,r.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),(0,r.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,r.kt)("p",null,"Added in: v5.14.0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,r.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')))}m.isMDXComponent=!0}}]);