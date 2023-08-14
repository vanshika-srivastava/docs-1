"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={description:"How to resync your Nethermind node"},i="Resync database from scratch",s={unversionedId:"fundamentals/how-to-reduce-database-size/resync-database-from-scratch",id:"fundamentals/how-to-reduce-database-size/resync-database-from-scratch",title:"Resync database from scratch",description:"How to resync your Nethermind node",source:"@site/docs/02-fundamentals/08-how-to-reduce-database-size/resync-database-from-scratch.md",sourceDirName:"02-fundamentals/08-how-to-reduce-database-size",slug:"/fundamentals/how-to-reduce-database-size/resync-database-from-scratch",permalink:"/docs/docs/docs/fundamentals/how-to-reduce-database-size/resync-database-from-scratch",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/08-how-to-reduce-database-size/resync-database-from-scratch.md",tags:[],version:"current",frontMatter:{description:"How to resync your Nethermind node"},sidebar:"tutorialSidebar",previous:{title:"Full Pruning",permalink:"/docs/docs/docs/fundamentals/how-to-reduce-database-size/full-pruning"},next:{title:"Private Networks",permalink:"/docs/docs/docs/fundamentals/private-networks/"}},c={},d=[{value:"Resyncing a Nethermind Node",id:"resyncing-a-nethermind-node",level:2},{value:"Steps to Resync a Nethermind Node",id:"steps-to-resync-a-nethermind-node",level:3}],l={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resync-database-from-scratch"},"Resync database from scratch"),(0,a.kt)("h2",{id:"resyncing-a-nethermind-node"},"Resyncing a Nethermind Node"),(0,a.kt)("p",null,"This guide explains how to resync a Nethermind node using the existing Pivot block or updating it to a more recent one."),(0,a.kt)("h3",{id:"steps-to-resync-a-nethermind-node"},"Steps to Resync a Nethermind Node"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Stop the Nethermind node"),": If your Nethermind node is currently running, stop it to ensure that no new data is\nbeing written to the database during the resync process."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Delete the existing database"),": Navigate to the Nethermind data directory. The location of this directory depends\non how Nethermind was installed and your configuration settings. Inside the data directory, find the ",(0,a.kt)("inlineCode",{parentName:"li"},"nethermind_db"),"\nfolder and delete the ",(0,a.kt)("inlineCode",{parentName:"li"},"mainnet")," subfolder to remove the existing database for the mainnet."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Update the configuration file (optional)"),": If you want to change any configuration settings before resyncing the\nnode, edit the ",(0,a.kt)("inlineCode",{parentName:"li"},"mainnet.cfg")," file located in the Nethermind directory. For example, you might want to adjust the\npruning settings or specify a different network."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Update the Pivot block (optional)"),"\\",(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Only for versions before 1.19.0 where Auto-Pivot approach was introduced"))),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Using Etherscan"),": If you want to speed up the syncing process, you can update the Pivot block to a more recent\none. To do this, find the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sync")," section in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet.cfg")," file and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"PivotNumber")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PivotHash"),'\nfields to match a recent "finalized" block number and its corresponding hash. You can obtain this information from\na block explorer such as ',(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"Etherscan"),".\\\n\\\nUsing block number 17165278 from ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/block/17165278"},"Etherscan"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},' { \n     "PivotNumber": 17165278,\n     "PivotHash": "0xa665315efd923f3b11215feee09a9d3e13c5e6ee602fa19b642824682ec0a752"\n }\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Using Nethermind's GitHub"),": Alternatively, you can update the Pivot block by referring to\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/configs/mainnet.cfg"},"Nethermind's mainnet.cfg file on GitHub"),".\nThe Pivot block is periodically bumped to the HEAD-8192 block of the mainnet chain. Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"PivotNumber"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"PivotHash")," values from the GitHub file and update your local ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet.cfg")," file accordingly.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Restart the Nethermind node"),": Start the Nethermind node again to initiate the resync process. The node will begin\nsyncing from the existing Pivot block or the specified updated Pivot block, downloading and processing all the blocks\nin the blockchain.")),(0,a.kt)("p",null,"To ensure that your Nethermind node is resyncing, you can monitor the logs for the node's progress. The logs will\ndisplay information about the block processing, synchronization status and ",(0,a.kt)("inlineCode",{parentName:"p"},"OldHeaders")," being processed. By observing\nthe increasing block numbers and synchronization messages in the logs, you can confirm that the resync process is active\nand working as expected."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Old Headers 0 / 17154000 | queue 0 | current 0.00bps | total 0.00bps"),(0,a.kt)("p",{parentName:"blockquote"},"Old Headers 768 / 17154000 | queue 0 | current 766.07bps | total 762.49bps"),(0,a.kt)("p",{parentName:"blockquote"},"Beacon Headers from block 17154001 to block 17169722 | 960 / 15722 | queue 4992 | current 0.00bps | total\n40622848.83bps"),(0,a.kt)("p",{parentName:"blockquote"},"Old Headers 9024 / 17154000 | queue 0 | current 576.40bps | total 1286.40bps"),(0,a.kt)("p",{parentName:"blockquote"},"Beacon Headers from block 17154001 to block 17169723 | 9024 / 15723 | queue 6698 | current 2694.81bps | total\n3882943.63bps\\\nDownloaded 17154031 / 17172359 | current 0.00bps | total 0.00bps"),(0,a.kt)("p",{parentName:"blockquote"},"Downloaded 17154062 / 17169724 | current 0.00bps | total 2.88bps")),(0,a.kt)("p",null,"Keep in mind that resyncing a Nethermind node can take a considerable amount of time. It depends on your hardware,\ninternet connection, and the size of the blockchain."))}m.isMDXComponent=!0}}]);