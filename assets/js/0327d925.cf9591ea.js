"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,y=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(y,p(p({ref:t},l),{},{components:n})):a.createElement(y,p({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,p[1]=s;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"custom-types",title:"customTypes"},p=void 0,s={unversionedId:"config/custom-types",id:"config/custom-types",title:"customTypes",description:"Extend syncpack to find and fix versions in your packages which are not",source:"@site/docs/config/custom-types.md",sourceDirName:"config",slug:"/config/custom-types",permalink:"/syncpack/config/custom-types",draft:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/master/site/docs/config/custom-types.md",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1676498744,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{id:"custom-types",title:"customTypes"},sidebar:"docs",previous:{title:"--types",permalink:"/syncpack/option/types"},next:{title:"dependencyTypes",permalink:"/syncpack/config/dependency-types"}},i={},c=[{value:"customTypes[name]",id:"customtypesname",level:2},{value:"customTypes[name].path",id:"customtypesnamepath",level:2},{value:"customTypes[name].strategy",id:"customtypesnamestrategy",level:2}],l={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extend syncpack to find and fix versions in your packages which are not\navailable by default. Custom types behave like any other dependency, so can be\nincluded in ",(0,r.kt)("a",{parentName:"p",href:"/syncpack/config/version-groups"},"versionGroups")," or\n",(0,r.kt)("a",{parentName:"p",href:"/syncpack/config/semver-groups"},"semverGroups")," etc."),(0,r.kt)("p",null,"The example below adds support for synchronising versions found in:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines"},(0,r.kt)("inlineCode",{parentName:"a"},"engines")),"\nobject."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/api/packages.html#packagemanager"},(0,r.kt)("inlineCode",{parentName:"a"},"packageManager")),"\nstring.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customTypes": {\n    "engines": {\n      "path": "engines",\n      "strategy": "versionsByName"\n    },\n    "packageManager": {\n      "path": "packageManager",\n      "strategy": "name@version"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"customtypesname"},"customTypes","[","name","]"),(0,r.kt)("p",null,"The key of each custom type is its name, this can be used in the following\nplaces to toggle when it is enabled:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/syncpack/option/types"},(0,r.kt)("inlineCode",{parentName:"a"},"--types"))," and\n",(0,r.kt)("a",{parentName:"li",href:"/syncpack/config/dependency-types"},(0,r.kt)("inlineCode",{parentName:"a"},"dependencyTypes")),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups#dependencytypes"},(0,r.kt)("inlineCode",{parentName:"a"},"versionGroup.dependencyTypes"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/syncpack/config/semver-groups#dependencytypes"},(0,r.kt)("inlineCode",{parentName:"a"},"semverGroup.dependencyTypes")))),(0,r.kt)("h2",{id:"customtypesnamepath"},"customTypes","[","name","]",".path"),(0,r.kt)("p",null,"Where the version can be found in each package.json file, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"engines"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"packageManager")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"some.nested.property"),"."),(0,r.kt)("h2",{id:"customtypesnamestrategy"},"customTypes","[","name","]",".strategy"),(0,r.kt)("p",null,"A strategy defines how syncpack needs to read and write dependency names and\nversions, there are 3 to choose from:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name@version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm@7.27.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"12.4.2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"versionsByName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"pnpm":"7.27.0", "semver": "7.3.8"}'))))))}d.isMDXComponent=!0}}]);