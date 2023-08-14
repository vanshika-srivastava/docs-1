"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},f="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=s(n),d=a,u=f["".concat(c,".").concat(d)]||f[d]||m[d]||o;return n?r.createElement(u,i(i({ref:e},p),{},{components:n})):r.createElement(u,i({ref:e},p))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[f]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6658:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Bloom",l={unversionedId:"fundamentals/configuration/bloom",id:"fundamentals/configuration/bloom",title:"Bloom",description:"| Property              | Env Variable                                 | Description                                                                          | Default   |",source:"@site/docs/02-fundamentals/04-configuration/bloom.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/bloom",permalink:"/docs/docs/docs/fundamentals/configuration/bloom",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/bloom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blocks",permalink:"/docs/docs/docs/fundamentals/configuration/blocks"},next:{title:"EthStats",permalink:"/docs/docs/docs/fundamentals/configuration/ethstats"}},c={},s=[],p={toc:s},f="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bloom"},"Bloom"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Index"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_BLOOMCONFIG_INDEX"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines whether the Bloom index is used. Bloom index speeds up rpc log searches."),(0,a.kt)("td",{parentName:"tr",align:"left"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IndexLevelBucketSizes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_BLOOMCONFIG_INDEXLEVELBUCKETSIZES"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines multipliers for index levels. Can be tweaked per chain to boost performance."),(0,a.kt)("td",{parentName:"tr",align:"left"},"[4, 8, 8]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Migration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_BLOOMCONFIG_MIGRATION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines if migration of previously downloaded blocks to Bloom index will be done."),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MigrationStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_BLOOMCONFIG_MIGRATIONSTATISTICS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines if migration statistics are to be calculated and output."),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")))))}m.isMDXComponent=!0}}]);