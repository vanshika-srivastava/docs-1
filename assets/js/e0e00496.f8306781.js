"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="FAQ",l={unversionedId:"resources/faq",id:"resources/faq",title:"FAQ",description:"How do I upgrade my node?",source:"@site/docs/07-resources/faq.md",sourceDirName:"07-resources",slug:"/resources/faq",permalink:"/docs/resources/faq",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/07-resources/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting Wallet",permalink:"/docs/resources/connecting-wallet"},next:{title:"Firewall Configuration",permalink:"/docs/resources/firewall-configuration"}},s={},d=[{value:"How do I upgrade my node?",id:"how-do-i-upgrade-my-node",level:2},{value:"Upgrading Nethermind for Docker users",id:"upgrading-nethermind-for-docker-users",level:3},{value:"Upgrading Nethermind for Systemd users",id:"upgrading-nethermind-for-systemd-users",level:3},{value:"Upgrading Nethermind when running as a background process",id:"upgrading-nethermind-when-running-as-a-background-process",level:3},{value:"What is the minimum viable config to serve ETH2 validator requests?",id:"what-is-the-minimum-viable-config-to-serve-eth2-validator-requests",level:2},{value:"Can I disable logging to file?",id:"can-i-disable-logging-to-file",level:2},{value:"Can I disable logging of JSON RPC calls?",id:"can-i-disable-logging-of-json-rpc-calls",level:2},{value:"How can I configure validator on AuRa / Clique?",id:"how-can-i-configure-validator-on-aura--clique",level:2},{value:"My network bandwidth is used up by the Nethermind node",id:"my-network-bandwidth-is-used-up-by-the-nethermind-node",level:2},{value:"Is my node synced?",id:"is-my-node-synced",level:2},{value:"I want to run two or more nodes on one machine. How can I achieve this?",id:"i-want-to-run-two-or-more-nodes-on-one-machine-how-can-i-achieve-this",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"how-do-i-upgrade-my-node"},"How do I upgrade my node?"),(0,a.kt)("h3",{id:"upgrading-nethermind-for-docker-users"},"Upgrading Nethermind for Docker users"),(0,a.kt)("p",null,"Pull the latest version of Nethermind using the ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," tag. You can find specific tag\nat ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nethermind/nethermind/tags"},"Docker Hub"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull nethermind/nethermind:latest\n")),(0,a.kt)("p",null,"or pull with docker-compose if the ",(0,a.kt)("inlineCode",{parentName:"p"},"nethermind/nethermind:latest")," base image is specified"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose pull\n")),(0,a.kt)("h3",{id:"upgrading-nethermind-for-systemd-users"},"Upgrading Nethermind for Systemd users"),(0,a.kt)("p",null,"Simply download the latest Nethermind package either\nfrom ",(0,a.kt)("a",{parentName:"p",href:"https://downloads.nethermind.io/"},"https://downloads.nethermind.io"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/releases"},"https://github.com/NethermindEth/nethermind/releases")," and make\nsure that the package is extracted in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WorkingDirectory")," path defined in your ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," service. Make sure to stop\nthe service before the upgrade and start it after."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-systemd"},"WorkingDirectory=/home/nethermind/nethermind\n")),(0,a.kt)("h3",{id:"upgrading-nethermind-when-running-as-a-background-process"},"Upgrading Nethermind when running as a background process"),(0,a.kt)("p",null,"Download the latest Nethermind package either from ",(0,a.kt)("a",{parentName:"p",href:"https://downloads.nethermind.io/"},"https://downloads.nethermind.io"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/releases"},"https://github.com/NethermindEth/nethermind/releases")," and\nextract the package in the folder you currently use for running Nethermind. Make sure the service is down before the\nupdate. Make sure to stop the service before the upgrade and start it after."),(0,a.kt)("h2",{id:"what-is-the-minimum-viable-config-to-serve-eth2-validator-requests"},"What is the minimum viable config to serve ETH2 validator requests?"),(0,a.kt)("p",null,"This config downloads a minimal amount of bodies and receipts to be able to serve ETH2 validator requests since the\ndeposit contract deployment. It also enables JSON RPC (",(0,a.kt)("strong",{parentName:"p"},"important - make sure that you do not open firewall to the\noutside world!"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nethermind --config mainnet --Init.BaseDbPath /your/db/path\n")),(0,a.kt)("p",null,"If you have any issues, please reach out to us on Discord: ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/X539yhn"},"https://discord.gg/X539yhn"),"."),(0,a.kt)("h2",{id:"can-i-disable-logging-to-file"},"Can I disable logging to file?"),(0,a.kt)("p",null,"You can find more details on the logging config page ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/logs/logging-configuration"},"here")),(0,a.kt)("h2",{id:"can-i-disable-logging-of-json-rpc-calls"},"Can I disable logging of JSON RPC calls?"),(0,a.kt)("p",null,"You can find more details on the logging config page ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/logs/logging-configuration"},"here")),(0,a.kt)("h2",{id:"how-can-i-configure-validator-on-aura--clique"},"How can I configure validator on AuRa / Clique?"),(0,a.kt)("p",null,"You can find more details on running validators in the docs ->\nfor ",(0,a.kt)("a",{parentName:"p",href:"/docs/resources/guides-and-helpers/validator-setup/aura-validator"},"AuRa")," and\nfor ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/private-networks/how-to-setup-a-nethermind-only-clique-based-chain"},"Clique"),"."),(0,a.kt)("p",null,"You can learn more about how to setup a aura validator ",(0,a.kt)("a",{parentName:"p",href:"/docs/resources/guides-and-helpers/validator-setup/aura-validator"},"here")),(0,a.kt)("h2",{id:"my-network-bandwidth-is-used-up-by-the-nethermind-node"},"My network bandwidth is used up by the Nethermind node"),(0,a.kt)("p",null,"Try changing the config to a lower number (",(0,a.kt)("inlineCode",{parentName:"p"},"--Network.ActivePeersMaxCount 25"),")"),(0,a.kt)("h2",{id:"is-my-node-synced"},"Is my node synced?"),(0,a.kt)("p",null,"Your node is synced when it shows log lines starting with:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Processed ...")),(0,a.kt)("p",null,"And the block numbers shown are at the head of the chain."),(0,a.kt)("p",null,"Also, to check if your node is synced, you may execute ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_syncing")," call check its result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' localhost:8545\n')),(0,a.kt)("p",null,"If the result shows ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," it means that your node is ",(0,a.kt)("strong",{parentName:"p"},"synced")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{"jsonrpc":"2.0","result":false,"id":1}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In blockchain, any node can never be 100% sure it is synced because there is no central source of truth - so your node\nis generally not able to tell you that it is synced but, it is able to tell you that it believes it is synced based on\nwhat it knows from the peers that it talks to).")),(0,a.kt)("h2",{id:"i-want-to-run-two-or-more-nodes-on-one-machine-how-can-i-achieve-this"},"I want to run two or more nodes on one machine. How can I achieve this?"),(0,a.kt)("p",null,"You have to configure a few ports used by Nethermind."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JsonRpc.EnginePort"),(0,a.kt)("td",{parentName:"tr",align:null},"8551"),(0,a.kt)("td",{parentName:"tr",align:null},"Remember to change it on your Consensus client.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JsonRpc.Port"),(0,a.kt)("td",{parentName:"tr",align:null},"8545"),(0,a.kt)("td",{parentName:"tr",align:null},"Only needed if you are using standard JsonRpc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JsonRpc.WebSocketsPort"),(0,a.kt)("td",{parentName:"tr",align:null},"8545"),(0,a.kt)("td",{parentName:"tr",align:null},"By default same as the JsonRpc port. Only relevant when you use WebSockets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network.P2PPort"),(0,a.kt)("td",{parentName:"tr",align:null},"30303"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network.DiscoveryPort"),(0,a.kt)("td",{parentName:"tr",align:null},"30303"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"The example of parameters that you have to pass to your second node when the first has been running with default\nsettings:\\\n",(0,a.kt)("inlineCode",{parentName:"p"},"--JsonRpc.EnginePort 8552 --JsonRpc.Port 8546 --Network.P2PPort 30304 --Network.DiscoveryPort 30304")))}p.isMDXComponent=!0}}]);