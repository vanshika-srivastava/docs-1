"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Eth2 <-> Nethermind"},o="ETH2 <-> Nethermind",s={unversionedId:"resources/guides-and-helpers/eth2-lighthouse-less-than-greater-than-nethermind",id:"resources/guides-and-helpers/eth2-lighthouse-less-than-greater-than-nethermind",title:"ETH2 <-> Nethermind",description:"Nethermind client as ETH1 endpoint",source:"@site/docs/resources/guides-and-helpers/eth2-lighthouse-less-than-greater-than-nethermind.md",sourceDirName:"resources/guides-and-helpers",slug:"/resources/guides-and-helpers/eth2-lighthouse-less-than-greater-than-nethermind",permalink:"/docs/resources/guides-and-helpers/eth2-lighthouse-less-than-greater-than-nethermind",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/resources/guides-and-helpers/eth2-lighthouse-less-than-greater-than-nethermind.md",tags:[],version:"current",lastUpdatedAt:1693765443,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{sidebar_label:"Eth2 <-> Nethermind"},sidebar:"tutorialSidebar",previous:{title:"ETH2 <-> Nethermind",permalink:"/docs/resources/guides-and-helpers/eth2-less-than-greater-than-nethermind"},next:{title:"Connecting Wallet",permalink:"/docs/resources/connecting-wallet"}},l={},d=[{value:"Nethermind client as ETH1 endpoint",id:"nethermind-client-as-eth1-endpoint",level:2},{value:"Get &amp; Run Nethermind",id:"get--run-nethermind",level:3},{value:"Monitoring Nethermind Node Health",id:"monitoring-nethermind-node-health",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eth2---nethermind"},"ETH2 <-> Nethermind"),(0,a.kt)("h2",{id:"nethermind-client-as-eth1-endpoint"},"Nethermind client as ETH1 endpoint"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You should always consider being able to switch to Infura or another provider as a backup for safety ","(","or run two nodes\nyourself",")","\ud83d\udc48")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For a more comprehensive step-by-step guide, you should look into one of these awesome guides\n-",">"," ",(0,a.kt)("a",{parentName:"p",href:"https://someresat.medium.com/"},"https://someresat.medium.com/"),". Below you will find instructions on how to run\nNethermind node -",">"," ",(0,a.kt)("strong",{parentName:"p"},"Step 6 \u2014 Set up an Ethereum ","(","Eth1",")"," Node"))),(0,a.kt)("h3",{id:"get--run-nethermind"},"Get & Run Nethermind"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Download the Nethermind client")),(0,a.kt)("p",null,"You can get it either from ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started/installing-nethermind#downloading-releases"},"Github Releases or our Downloads page")),(0,a.kt)("p",null,'{% page-ref page="../ethereum-client/download-sources/" %}'),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","unzip the package"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","run the Nethermind node ","(","use ",(0,a.kt)("inlineCode",{parentName:"li"},"Nethermind.Launcher")," or change ",(0,a.kt)("inlineCode",{parentName:"li"},"configs/mainnet.cfg")," and\nrun ",(0,a.kt)("inlineCode",{parentName:"li"},"Nethermind.Runner --config mainnet"),")")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"use the Linux ",(0,a.kt)("strong",{parentName:"p"},"screen")," utility to keep your node working in the background")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"screen -S nethermind\n./Nethermind.Launcher\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7130).Z,width:"2008",height:"737"})),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Enable ",(0,a.kt)("strong",{parentName:"p"},"JSON RPC")," service so that your ETH2 Beacon node will be able to communicate")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Setup your ",(0,a.kt)("a",{parentName:"p",href:"/docs/resources/firewall-configuration"},"firewall configuration")),(0,a.kt)("p",{parentName:"admonition"},"Configure EthStats for your node if needed:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{src:n(7823).Z,width:"1141",height:"275"})),(0,a.kt)("p",{parentName:"admonition"},"You should see the node starting:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{src:n(2962).Z,width:"1202",height:"644"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tip:")," Ctrl + A + D to leave the ",(0,a.kt)("strong",{parentName:"p"},"screen"),"\n:::"),(0,a.kt)("h3",{id:"monitoring-nethermind-node-health"},"Monitoring Nethermind Node Health"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/metrics/setting-up-local-metrics-infrastracture"},"this guide")," to setup\nPrometheus/Grafana based local setup and monitor your node's most important stats there"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3616).Z,width:"1770",height:"949"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Block Number will be ",(0,a.kt)("strong",{parentName:"p"},"0")," for the ",(0,a.kt)("strong",{parentName:"p"},"unsynced")," node")),(0,a.kt)("p",null,"To check if your node is synced you may execute ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_syncing")," call check its result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' localhost:8545\n')),(0,a.kt)("p",null,"If the result shows ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," it means that your node is ",(0,a.kt)("strong",{parentName:"p"},"synced")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{"jsonrpc":"2.0","result":false,"id":1}\n')))}m.isMDXComponent=!0},7130:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image(20)-8af7ea539a4bc0f32dd5b8860b496ec8.png"},7823:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image(3)-914d4735c8b6a9a2377e1b12418b2361.png"},3616:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image(4)-dea5ebfed3e2257f6e1e8be58a9e0f44.png"},2962:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image(8)-c167de574195bd72de2680358499de50.png"}}]);