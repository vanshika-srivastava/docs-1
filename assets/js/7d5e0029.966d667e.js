"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>N});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,N=d["".concat(m,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(N,i(i({ref:t},c),{},{components:r})):n.createElement(N,i({ref:t},c))}));function N(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Evm",l={unversionedId:"monitoring/metrics-explanation/evm",id:"monitoring/metrics-explanation/evm",title:"Evm",description:"| Metric | Description |",source:"@site/docs/04-monitoring/metrics-explanation/evm.md",sourceDirName:"04-monitoring/metrics-explanation",slug:"/monitoring/metrics-explanation/evm",permalink:"/docs/docs/docs/monitoring/metrics-explanation/evm",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/04-monitoring/metrics-explanation/evm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using dotnet-counters",permalink:"/docs/docs/docs/monitoring/metrics-explanation/dotnet-counters"},next:{title:"Init",permalink:"/docs/docs/docs/monitoring/metrics-explanation/init"}},m={},p=[],c={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evm"},"Evm"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_blockhash_opcode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of BLOCKHASH opcodes executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_bn254_add_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of BN254_ADD precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_bn254_mul_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of BN254_MUL precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_bn254_pairing_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of BN254_PAIRING precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_calls"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of calls to other contracts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_creates"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of contract create calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_ec_recover_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of EC_RECOVERY precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_empty_calls"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of calls made to addresses without code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_evm_exceptions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of EVM exceptions thrown by contracts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_m_copy_opcode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of MCOPY opcodes executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_mod_exp_opcode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of MODEXP precompiles executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_mod_exp_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of MODEXP precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_point_evaluation_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of Point Evaluation precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_ripemd160_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of RIPEMD160 precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_self_destructs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SELFDESTRUCT calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_sha256_precompile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SHA256 precompile calls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_sload_opcode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SLOAD opcodes executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_sstore_opcode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SSTORE opcodes executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_tload_opcode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of TLOAD opcodes executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_tstore_opcode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of TSTORE opcodes executed.")))))}s.isMDXComponent=!0}}]);