"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5227:(e,n,t)=>{t.d(n,{ZP:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={toc:[]},i="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(i,(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Property in package.json"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dev")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devDependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"devDependencies")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"local")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version"},(0,a.kt)("inlineCode",{parentName:"a"},"version")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"overrides")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides"},(0,a.kt)("inlineCode",{parentName:"a"},"overrides")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"peer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerDependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"peerDependencies")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pnpmOverrides")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://pnpm.io/package_json#pnpmoverrides"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm.overrides")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"prod")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"dependencies")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"resolutions")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#resolutions"},(0,a.kt)("inlineCode",{parentName:"a"},"resolutions")))))))}p.isMDXComponent=!0},895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));t(5227);const o={id:"version-groups",title:"versionGroups"},i="versionGroups object[]",p={unversionedId:"config/version-groups",id:"config/version-groups",title:"versionGroups",description:"Version groups are an array of objects which partition your monorepo into isolated sections which",source:"@site/docs/config/version-groups.mdx",sourceDirName:"config",slug:"/config/version-groups",permalink:"/syncpack/config/version-groups",draft:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/master/site/docs/config/version-groups.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1695321344,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"version-groups",title:"versionGroups"},sidebar:"docs",previous:{title:"source",permalink:"/syncpack/config/source"},next:{title:"Banned",permalink:"/syncpack/config/version-groups/banned"}},s={},c=[{value:"Example",id:"example",level:2}],l={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"versiongroups-object"},(0,a.kt)("inlineCode",{parentName:"h1"},"versionGroups")," object[]"),(0,a.kt)("p",null,"Version groups are an array of objects which partition your monorepo into isolated sections which\neach have their own rules/policy/strategy for how versions should be managed."),(0,a.kt)("p",null,"There are 6 types of version groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups/banned"},"Banned")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups/ignored"},"Ignored")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups/pinned"},"Pinned")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups/same-range"},"Same Range")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups/snapped-to"},"Snapped To")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups/standard"},"Standard"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Learn more in our ",(0,a.kt)("a",{parentName:"p",href:"/syncpack/guide/version-groups"},"guide to Version Groups"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Let's say your monorepo directly depends on ",(0,a.kt)("inlineCode",{parentName:"li"},"react"),", 3 of your packages have it under\n",(0,a.kt)("inlineCode",{parentName:"li"},"dependencies")," and another 2 have it under ",(0,a.kt)("inlineCode",{parentName:"li"},"peerDependencies"),". Each of those 5 specific places\nwhere ",(0,a.kt)("inlineCode",{parentName:"li"},"react"),' is depended on we refer to as an "instance".'),(0,a.kt)("li",{parentName:"ul"},"Every instance of every dependency in your repo is assigned to the first version group it matches."),(0,a.kt)("li",{parentName:"ul"},"Each instance can only belong to one version group."),(0,a.kt)("li",{parentName:"ul"},"If you do not define any version groups, or a given instance of a dependency does not match any of\nthem, it is assigned to an internal catch-all ",(0,a.kt)("a",{parentName:"li",href:"/syncpack/config/version-groups/standard"},"Standard")," version\ngroup.")),(0,a.kt)("p",null,"Here is an example which uses every kind of version group:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "versionGroups": [\n    {\n      // Pinned\n      "label": "Ensure AWS SDK dependencies always use the same version",\n      "packages": ["**"],\n      "dependencies": ["@aws-sdk/**"],\n      "pinVersion": "3.272.0"\n    },\n    {\n      // Banned\n      "label": "Please use lodash instead of underscore",\n      "packages": ["**"],\n      "dependencies": ["underscore"],\n      "isBanned": true\n    },\n    {\n      // Ignored\n      "label": "Ignore issues in these dodgy packages",\n      "packages": ["oops-moment", "workaround"],\n      "dependencies": ["**"],\n      "isIgnored": true\n    },\n    {\n      // Snapped\n      "label": "Ensure all packages use whatever version the mobile-core package is using",\n      "dependencies": ["react", "react-native"],\n      "packages": ["**"],\n      "snapTo": ["mobile-core"]\n    },\n    {\n      // Pinned\n      "label": "Use \'*\' under \'peerDependencies\' everywhere",\n      "packages": ["**"],\n      "dependencies": ["**"],\n      "dependencyTypes": ["peer"],\n      "pinVersion": "*"\n    },\n    {\n      // Standard\n      "label": "Resolve mismatches here with the oldest version instead of the newest",\n      "dependencies": ["@vintage/**"],\n      "packages": ["**"],\n      "preferVersion": "lowestSemver"\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);