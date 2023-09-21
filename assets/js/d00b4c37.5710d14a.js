"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||p;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const p={id:"update",title:"update"},o=void 0,s={unversionedId:"update",id:"update",title:"update",description:"Interactively update packages to the latest versions from the npm registry.",source:"@site/docs/update.mdx",sourceDirName:".",slug:"/update",permalink:"/syncpack/update",draft:!1,editUrl:"https://github.com/JamieMason/syncpack/tree/master/site/docs/update.mdx",tags:[],version:"current",lastUpdatedBy:"Jamie Mason",lastUpdatedAt:1695321344,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"update",title:"update"},sidebar:"docs",previous:{title:"set-semver-ranges",permalink:"/syncpack/set-semver-ranges"},next:{title:"--config",permalink:"/syncpack/option/config"}},c={},i=[{value:"CLI Options",id:"cli-options",level:2},{value:"Examples",id:"examples",level:2}],l={toc:i},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Interactively update packages to the latest versions from the npm registry."),(0,a.kt)("h2",{id:"cli-options"},"CLI Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-s, --source [pattern]  glob pattern for package.json files to read from (default: [])\n-f, --filter [pattern]  only include dependencies whose name matches this regex\n-c, --config <path>     path to a syncpack config file\n-t, --types <names>     only include dependencies matching these types (eg. types=dev,prod,myCustomType)\n-h, --help              display help for command\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# uses defaults for resolving packages\nsyncpack update\n# uses packages defined by --source when provided\nsyncpack update --source "apps/*/package.json"\n# multiple globs can be provided like this\nsyncpack update --source "apps/*/package.json" --source "core/*/package.json"\n# uses dependencies regular expression defined by --filter when provided\nsyncpack update --filter "typescript|tslint"\n# only inspect "devDependencies"\nsyncpack update --types dev\n# only inspect "devDependencies" and "peerDependencies"\nsyncpack update --types dev,peer\n')))}u.isMDXComponent=!0}}]);