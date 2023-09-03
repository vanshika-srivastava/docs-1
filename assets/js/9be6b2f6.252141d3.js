"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||r;return n?s.createElement(m,i(i({ref:t},u),{},{components:n})):s.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<r;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(7462),o=(n(7294),n(3905));const r={description:"There are several known issues with the current version of Nethermind",sidebar_position:3},i="Known Issues",a={unversionedId:"resources/know-issues",id:"resources/know-issues",title:"Known Issues",description:"There are several known issues with the current version of Nethermind",source:"@site/docs/resources/know-issues.md",sourceDirName:"resources",slug:"/resources/know-issues",permalink:"/docs/resources/know-issues",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/resources/know-issues.md",tags:[],version:"current",lastUpdatedAt:1693765443,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:3,frontMatter:{description:"There are several known issues with the current version of Nethermind",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Firewall Configuration",permalink:"/docs/resources/firewall-configuration"}},c={},l=[{value:"RocksDB checksum issue",id:"rocksdb-checksum-issue",level:2},{value:"Database LOCK files not removed by RocksDB",id:"database-lock-files-not-removed-by-rocksdb",level:2},{value:"Leaking Socket Descriptors",id:"leaking-socket-descriptors",level:2},{value:"RocksDB on macOS",id:"rocksdb-on-macos",level:2},{value:"Skipping consensus issues blocks",id:"skipping-consensus-issues-blocks",level:2},{value:"Main issues reported so far when using Nethermind for Eth2 (30.11.2020)",id:"main-issues-reported-so-far-when-using-nethermind-for-eth2-30112020",level:2}],u={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"known-issues"},"Known Issues"),(0,o.kt)("h2",{id:"rocksdb-checksum-issue"},"RocksDB checksum issue"),(0,o.kt)("p",null,"Sometimes RocksDB may fail with an exception similar to the one below:"),(0,o.kt)("p",null,"2020-11-29 12:02:01.1968|BlockchainProcessor encountered an exception. RocksDbSharp.RocksDbException: Corruption: block\nchecksum mismatch: expected 2087346143, got 2983326672 in C:\\Nethermind\\nethermind","_","db/mainnet\\state/037463.sst offset\n33439089 size 16319"),(0,o.kt)("p",null,"On XFS file system under very high memory pressure, this tend to happen. Turning on the\nflag ",(0,o.kt)("inlineCode",{parentName:"p"},"--Db.UseDirectIoForFlushAndCompactions true"),"will help, although it might reduce performance."),(0,o.kt)("p",null,"On most cases however, this is due to RAM module issue. Please run ",(0,o.kt)("a",{parentName:"p",href:"https://www.memtest86.com/"},"memtest86")," to check your\nmemory module."," "),(0,o.kt)("h2",{id:"database-lock-files-not-removed-by-rocksdb"},"Database LOCK files not removed by RocksDB"),(0,o.kt)("p",null,"If the node complains about the LOCK files it may mean one of the two things:"),(0,o.kt)("p",null,"(1) another Nethermind process is running and using the same DB"),(0,o.kt)("p",null,"(2) previous process did not close the DB properly"),(0,o.kt)("p",null,"When (2) happens you can run"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"find . -type f -name 'LOCK' -delete")),(0,o.kt)("p",null,"in the database folder."),(0,o.kt)("h2",{id:"leaking-socket-descriptors"},"Leaking Socket Descriptors"),(0,o.kt)("p",null,"On Linux our networking library is not closing socket descriptors properly. This results in the number of open files for\nthe process growing indefinitely. Limits for the number of open files per process are different for root and other\nusers. For root the limits are usually very high and the socket descriptors would probably not cause much trouble. Many\nof the cloud operators are launching VMs with root user access by default. If Nethermind process is frequently killed by\nOS then you may need to change the configuration for the maximum number of open files."),(0,o.kt)("h2",{id:"rocksdb-on-macos"},"RocksDB on macOS"),(0,o.kt)("p",null,"RocksDB library does not always load properly on macOS. One (hacky) workaround is to install the latest version of\nRocksDB by running brew install rocksdb."),(0,o.kt)("h2",{id:"skipping-consensus-issues-blocks"},"Skipping consensus issues blocks"),(0,o.kt)("p",null,"We do our best in Nethermind not to have consensus issues with other clients. But historically consensus issues had\nhappened. In that case we start working on a hotfix immediately and release it within hours time. If you need your node\nto be operational ASAP and can\u2019t wait for hotfix you do have an option to achieve that. Nethermind node allows you to\nfast sync to recent blocks and state. When node does fast sync it can skip over processing problematic blocks. In order\nto be able to fast sync we need SyncConfig.FastSync to be set to \u2018true\u2019. You also need to set\nSyncConfig.FastSyncCatchUpHeightDelta to a value lower than how far your node is behind the chain.\nSyncConfig.FastSyncCatchUpHeightDelta is the minimum difference between current chain height and chain head block number\nwhen node can switch from full sync (block processing) to fast sync. By default it is set to 1024. Please note that we\ndon\u2019t recommend setting this value to less than 32 in normal circumstances. After setting those values and restarting\nnode, the node will download block headers, bodies (if SyncConfig.DownloadBodiesInFastSync is \u2018true\u2019), receipts (if\nSyncConfig.DownloadReceiptsInFastSync is \u2018true\u2019) and current state. After that it will resume processing from new head\nblock. Please note that the historical state for skipped blocks might not be available. This can cause some JSON RPC\ncalls on the historical state not to work - same situation as if these blocks state was pruned."),(0,o.kt)("p",null,"For example if current chain head block number is 10,000,100 and node couldn\u2019t process block 10,000,000 due to consensus\nissue, if you set FastSync:true and FastSyncCatchUpHeightDelta:100 (or as low as 32) and node should switch to fast\nsync, catch up with current chain head and switch back to full sync."),(0,o.kt)("p",null,"The time that it will take to fast sync to current chain head can take even up to 2 hours depending how many blocks and\nhow much new state there is to be downloaded."),(0,o.kt)("h1",{id:"eth2-issues"},"ETH2 issues"),(0,o.kt)("h2",{id:"main-issues-reported-so-far-when-using-nethermind-for-eth2-30112020"},"Main issues reported so far when using Nethermind for Eth2 (30.11.2020)"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"users who synced before version ",(0,o.kt)("strong",{parentName:"li"},"1.9.41")," and were not aware that old configs were ",(0,o.kt)("strong",{parentName:"li"},"not")," supporting Eth2 by default\nhad to resync with ",(0,o.kt)("strong",{parentName:"li"},"1.9.41")," (and they are reporting successful setups now)"," "),(0,o.kt)("li",{parentName:"ul"},"users who synced with ",(0,o.kt)("inlineCode",{parentName:"li"},"AncientReceiptsBarrier")," (limiting disk space) cannot use ",(0,o.kt)("strong",{parentName:"li"},"Teku")," and ",(0,o.kt)("strong",{parentName:"li"},"have to switch")," to *\n*Prysm",(0,o.kt)("strong",{parentName:"li"}," or "),"Lighthouse**"),(0,o.kt)("li",{parentName:"ul"},"two users reported that their fully synced nodes on Windows 10 Pro failed after a few blocks (please let us know if\nyou have seen a similar issue)"),(0,o.kt)("li",{parentName:"ul"},"(fixed in 1.9.45) users are reporting issues on a hard shutdown of VMs / machines with Nethermind running - some\ndatabase corruptions occur often ",(0,o.kt)("strong",{parentName:"li"},"requiring a resync")),(0,o.kt)("li",{parentName:"ul"},"users had trouble to sync node on a ZFS file system but this has been ",(0,o.kt)("strong",{parentName:"li"},"resolved after removing ZFS")),(0,o.kt)("li",{parentName:"ul"},"users reported an issue where RocksDB was displaying a ",(0,o.kt)("inlineCode",{parentName:"li"},"checksum mismatch")," error in the logs -> ",(0,o.kt)("strong",{parentName:"li"},"restarting a VM (not\nNethermind, but the machine) helped")),(0,o.kt)("li",{parentName:"ul"},"if you tried to launch Lighthouse with the old Nethermind (pre ",(0,o.kt)("strong",{parentName:"li"},"1.9.41"),") which failed and then resynced Nethermind\nand you are still getting errors then ",(0,o.kt)("strong",{parentName:"li"},"wiping the Lighthouse DB and starting again will solve it."),"\n:::"))))}h.isMDXComponent=!0}}]);