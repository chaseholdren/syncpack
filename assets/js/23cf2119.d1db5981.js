"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,p(p({ref:n},l),{},{components:t})):r.createElement(y,p({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7029:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294);const a={pill:"pill_lx6J",gray:"gray_oDNb",red:"red_TkSj",yellow:"yellow_uZjQ",green:"green_VuIk",blue:"blue_niGL",indigo:"indigo_t1co",purple:"purple_wWQZ",pink:"pink_hjd3"};function o(e){let{required:n,optional:t}=e;return r.createElement("p",null,n&&r.createElement("span",{className:`${a.pill} ${a.red}`},"Required"),t&&r.createElement("span",{className:`${a.pill} ${a.gray}`},"Optional"))}},1291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905)),o=t(7029);const p={id:"types",title:"--types"},i="--types string",s={unversionedId:"option/types",id:"option/types",title:"--types",description:"Override your dependencyTypes configuration on an ad hoc basis.",source:"@site/docs/option/types.mdx",sourceDirName:"option",slug:"/option/types",permalink:"/syncpack/option/types",draft:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/master/site/docs/option/types.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1687124587,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{id:"types",title:"--types"},sidebar:"docs",previous:{title:"--source",permalink:"/syncpack/option/source"},next:{title:"customTypes",permalink:"/syncpack/config/custom-types"}},c={},l=[],d={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"--types-string"},(0,a.kt)("inlineCode",{parentName:"h1"},"--types")," string"),(0,a.kt)(o.Z,{optional:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Override your ",(0,a.kt)("a",{parentName:"p",href:"/syncpack/config/dependency-types"},(0,a.kt)("inlineCode",{parentName:"a"},"dependencyTypes"))," configuration on an ad hoc basis."),(0,a.kt)("p",null,"This can be used to work with every package in your monorepo, but only with a given property each\ntime."),(0,a.kt)("p",null,"In this example we set all versions to use exact semver ranges in ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),", then loose ranges\nwithin ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u2013 across all of your packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'syncpack set-semver-ranges --types prod --semver-range ""\nsyncpack set-semver-ranges --types dev,peer --semver-range "^"\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Running syncpack multiple times with different options to target different parts of your\npackage.json files is a lot of work to maintain, so ",(0,a.kt)("a",{parentName:"p",href:"/syncpack/config/semver-groups"},(0,a.kt)("inlineCode",{parentName:"a"},"semverGroups")),"\nexist to make this easier."),(0,a.kt)("p",{parentName:"admonition"},"The above example would would defined like so:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semverGroups": [\n    {\n      "range": "",\n      "dependencyTypes": ["prod"],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    },\n    {\n      "range": "^",\n      "dependencyTypes": ["dev", "peer"],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    }\n  ]\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"With this configuration in place, you only need to run syncpack once:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"syncpack set-semver-ranges\n")),(0,a.kt)("p",{parentName:"admonition"},"You can verify your project is correct in CI via:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"syncpack lint-semver-ranges\n"))))}m.isMDXComponent=!0}}]);