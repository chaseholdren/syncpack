"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=s,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),s=(t(7294),t(3905));const a={id:"lint-semver-ranges",title:"lint-semver-ranges"},i=void 0,o={unversionedId:"lint-semver-ranges",id:"lint-semver-ranges",title:"lint-semver-ranges",description:'Check whether dependency versions used within "dependencies", "devDependencies"',source:"@site/docs/lint-semver-ranges.md",sourceDirName:".",slug:"/lint-semver-ranges",permalink:"/syncpack/lint-semver-ranges",draft:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/master/site/docs/lint-semver-ranges.md",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1676498744,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{id:"lint-semver-ranges",title:"lint-semver-ranges"},sidebar:"docs",previous:{title:"format",permalink:"/syncpack/format"},next:{title:"list-mismatches",permalink:"/syncpack/list-mismatches"}},c={},p=[{value:"CLI Options",id:"cli-options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'Check whether dependency versions used within "dependencies", "devDependencies"\netc follow a consistent format.'),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/syncpack/config/semver-groups"},(0,s.kt)("inlineCode",{parentName:"a"},"semverGroups"))," if you have advanced\nrequirements."),(0,s.kt)("h2",{id:"cli-options"},"CLI Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'-s, --source [pattern]      glob pattern for package.json files to read from\n-f, --filter [pattern]      only include dependencies whose name matches this regex\n-r, --semver-range <range>  see supported ranges below. defaults to ""\n-c, --config <path>         path to a syncpack config file\n-t, --types <names>         only include dependencies matching these types (eg. types=dev,prod,myCustomType)\n-h, --help                  display help for command\n')),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# uses defaults for resolving packages\nsyncpack lint-semver-ranges\n# uses packages defined by --source when provided\nsyncpack lint-semver-ranges --source "apps/*/package.json"\n# multiple globs can be provided like this\nsyncpack lint-semver-ranges --source "apps/*/package.json" --source "core/*/package.json"\n# uses dependencies regular expression defined by --filter when provided\nsyncpack lint-semver-ranges --filter "typescript|tslint"\n# use ~ range instead of default ""\nsyncpack lint-semver-ranges --semver-range ~\n# use ~ range in "devDependencies"\nsyncpack lint-semver-ranges --types dev --semver-range ~\n# use ~ range in "devDependencies" and "peerDependencies"\nsyncpack lint-semver-ranges --types dev,peer semver-range ~\n')))}m.isMDXComponent=!0}}]);