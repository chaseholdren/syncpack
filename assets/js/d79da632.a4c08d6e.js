"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[846],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(g,p(p({ref:n},c),{},{components:r})):t.createElement(g,p({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7029:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(7294);const a={pill:"pill_lx6J",gray:"gray_oDNb",red:"red_TkSj",yellow:"yellow_uZjQ",green:"green_VuIk",blue:"blue_niGL",indigo:"indigo_t1co",purple:"purple_wWQZ",pink:"pink_hjd3"};function o(e){let{required:n,optional:r}=e;return t.createElement("p",null,n&&t.createElement("span",{className:`${a.pill} ${a.red}`},"Required"),r&&t.createElement("span",{className:`${a.pill} ${a.gray}`},"Optional"))}},6905:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var t=r(7462),a=(r(7294),r(3905)),o=r(7029);const p={id:"semver-groups",title:"semverGroups"},s="semverGroups object[]",i={unversionedId:"config/semver-groups",id:"config/semver-groups",title:"semverGroups",description:"Allow some packages to have different semver range rules to the rest of your",source:"@site/docs/config/semver-groups.mdx",sourceDirName:"config",slug:"/config/semver-groups",permalink:"/syncpack/config/semver-groups",draft:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/master/site/docs/config/semver-groups.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1677001152,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{id:"semver-groups",title:"semverGroups"},sidebar:"docs",previous:{title:"indent",permalink:"/syncpack/config/indent"},next:{title:"semverRange",permalink:"/syncpack/config/semver-range"}},l={},c=[{value:"Example use cases",id:"example-use-cases",level:2},{value:"<code>semverGroup.range</code>",id:"semvergrouprange",level:2},{value:"<code>semverGroup.dependencies</code>",id:"semvergroupdependencies",level:2},{value:"<code>semverGroup.isIgnored</code>",id:"semvergroupisignored",level:2},{value:"<code>semverGroup.packages</code>",id:"semvergrouppackages",level:2},{value:"<code>semverGroup.dependencyTypes</code>",id:"semvergroupdependencytypes",level:2}],d={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semvergroups-object"},(0,a.kt)("inlineCode",{parentName:"h1"},"semverGroups")," object[]"),(0,a.kt)(o.Z,{optional:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Allow some packages to have different semver range rules to the rest of your\nmonorepo. Each dependency can only belong to one semver group, the first rule\nwhich matches a given dependency and package will apply."),(0,a.kt)("h2",{id:"example-use-cases"},"Example use cases"),(0,a.kt)("p",null,"1: Every dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"@myrepo/library")," should have a semver range of ",(0,a.kt)("inlineCode",{parentName:"p"},"~"),",\nregardless of what the rest of the monorepo uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semverGroups": [\n    {\n      "range": "~",\n      "dependencies": ["**"],\n      "packages": ["@myrepo/library"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"2: Every dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"@myrepo/library")," whose name matches ",(0,a.kt)("inlineCode",{parentName:"p"},"@alpha/**")," should\nhave a semver range of ",(0,a.kt)("inlineCode",{parentName:"p"},"^"),", regardless of what the rest of that package or the\nrest of the monorepo uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semverGroups": [\n    {\n      "range": "^",\n      "dependencies": ["@alpha/**"],\n      "packages": ["@myrepo/library"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"3: Every dependency in the monorepo whose name matches ",(0,a.kt)("inlineCode",{parentName:"p"},"@alpha/**")," should have a\nsemver range of ",(0,a.kt)("inlineCode",{parentName:"p"},"~"),", regardless of what the rest of the monorepo uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semverGroups": [\n    {\n      "range": "~",\n      "dependencies": ["@alpha/**"],\n      "packages": ["**"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"3: Production dependencies should have fixed version numbers, but development\nand peer dependencies can be broader."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semverGroups": [\n    {\n      "range": "",\n      "dependencyTypes": [\n        "dependencies",\n        "resolutions",\n        "overrides",\n        "pnpmOverrides",\n        "workspace"\n      ],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    },\n    {\n      "range": "~",\n      "dependencyTypes": ["devDependencies"],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    },\n    {\n      "range": "^",\n      "dependencyTypes": ["peerDependencies"],\n      "dependencies": ["**"],\n      "packages": ["**"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"semvergrouprange"},(0,a.kt)("inlineCode",{parentName:"h2"},"semverGroup.range")),(0,a.kt)(o.Z,{required:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Which of the ",(0,a.kt)("a",{parentName:"p",href:"/syncpack/config/semver-range#supported-ranges"},"Supported Ranges")," this group\nshould use."),(0,a.kt)("h2",{id:"semvergroupdependencies"},(0,a.kt)("inlineCode",{parentName:"h2"},"semverGroup.dependencies")),(0,a.kt)(o.Z,{required:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Works the same as\n",(0,a.kt)("a",{parentName:"p",href:"/syncpack/config/version-groups#dependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"versionGroup.dependencies")),"."),(0,a.kt)("h2",{id:"semvergroupisignored"},(0,a.kt)("inlineCode",{parentName:"h2"},"semverGroup.isIgnored")),(0,a.kt)(o.Z,{optional:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Works the same as ",(0,a.kt)("a",{parentName:"p",href:"/syncpack/config/version-groups#isignored"},(0,a.kt)("inlineCode",{parentName:"a"},"versionGroup.isIgnored")),"."),(0,a.kt)("h2",{id:"semvergrouppackages"},(0,a.kt)("inlineCode",{parentName:"h2"},"semverGroup.packages")),(0,a.kt)(o.Z,{required:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Works the same as ",(0,a.kt)("a",{parentName:"p",href:"/syncpack/config/version-groups#packages"},(0,a.kt)("inlineCode",{parentName:"a"},"versionGroup.packages")),"."),(0,a.kt)("h2",{id:"semvergroupdependencytypes"},(0,a.kt)("inlineCode",{parentName:"h2"},"semverGroup.dependencyTypes")),(0,a.kt)(o.Z,{optional:!0,mdxType:"Pills"}),(0,a.kt)("p",null,"Works the same as\n",(0,a.kt)("a",{parentName:"p",href:"/syncpack/config/version-groups#dependencytypes"},(0,a.kt)("inlineCode",{parentName:"a"},"versionGroup.dependencyTypes")),"."))}m.isMDXComponent=!0}}]);